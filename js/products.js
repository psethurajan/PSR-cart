let activeCategory = "All";
let searchQuery    = "";
let sortOrder      = "default";

document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
});

function getFilteredProducts() {
  let result = products;

  if (activeCategory !== "All") {
    result = result.filter(function(p) { return p.category === activeCategory; });
  }

  if (searchQuery !== "") {
    result = result.filter(function(p) {
      return p.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }

  if (sortOrder === "low-high") {
    result = result.slice().sort(function(a, b) { return a.price - b.price; });
  } else if (sortOrder === "high-low") {
    result = result.slice().sort(function(a, b) { return b.price - a.price; });
  } else if (sortOrder === "rating") {
    result = result.slice().sort(function(a, b) { return b.rating - a.rating; });
  }

  return result;
}

function renderProducts() {
  let container = document.getElementById("products-grid");
  let filtered  = getFilteredProducts();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search fs-1 text-secondary"></i>
        <p class="mt-3 text-secondary">No products found</p>
      </div>
    `;
    return;
  }

  container.innerHTML = "";

  filtered.forEach(function (product) {
    let inWishlist = isInWishlist(product.id);
    let heartClass = inWishlist ? "text-danger" : "text-secondary";

    container.innerHTML += `
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="product-card" onclick="openModal(${product.id})" style="cursor:pointer;">
          <div class="product-img-wrap">
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <button class="wishlist-btn" onclick="event.stopPropagation(); handleWishlistBtn(${product.id}, this)">
              <i class="bi bi-heart-fill ${heartClass}"></i>
            </button>
          </div>
          <div class="product-info">
            <span class="product-category">${product.category}</span>
            <h5 class="product-title">${product.title}</h5>
            <div class="product-rating">
              <i class="bi bi-star-fill text-warning"></i>
              <span>${product.rating}</span>
            </div>
            <div class="product-footer">
              <span class="product-price">&#8377;${product.price.toLocaleString()}</span>
              <button class="btn btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                <i class="bi bi-cart-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function filterByCategory(category, btn) {
  activeCategory = category;
  document.querySelectorAll(".filter-btn").forEach(function(b) { b.classList.remove("active"); });
  btn.classList.add("active");
  renderProducts();
}

function handleSearch(value) {
  searchQuery = value;
  renderProducts();
}

function handleSort(value) {
  sortOrder = value;
  renderProducts();
}

function openModal(productId) {
  let product = products.find(function(p) { return p.id === productId; });

  document.getElementById("modal-img").src           = product.image;
  document.getElementById("modal-title").textContent = product.title;
  document.getElementById("modal-category").textContent = product.category;
  document.getElementById("modal-price").innerHTML   = "&#8377;" + product.price.toLocaleString();
  document.getElementById("modal-rating").textContent = product.rating;
  document.getElementById("modal-desc").textContent  = product.description;

  let specsList = product.specs.map(function(s) { return "<li>" + s + "</li>"; }).join("");
  document.getElementById("modal-specs").innerHTML = specsList;

  document.getElementById("modal-add-cart").setAttribute("data-id", product.id);

  let modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();
}

function modalAddToCart() {
  let btn = document.getElementById("modal-add-cart");
  let id  = parseInt(btn.getAttribute("data-id"));
  addToCart(id);
}

function handleWishlistBtn(productId, btn) {
  let added = toggleWishlist(productId);
  let icon  = btn.querySelector("i");
  if (added) {
    icon.classList.remove("text-secondary");
    icon.classList.add("text-danger");
  } else {
    icon.classList.remove("text-danger");
    icon.classList.add("text-secondary");
  }
}
