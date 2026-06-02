document.addEventListener("DOMContentLoaded", function () {
  renderFeaturedProducts();
  startCountdown();
});

function renderFeaturedProducts() {
  let container = document.getElementById("featured-products");
  if (!container) return;

  let featured = products.slice(0, 6);

  featured.forEach(function (product) {
    let inWishlist = isInWishlist(product.id);
    let heartClass = inWishlist ? "text-danger" : "text-secondary";

    container.innerHTML += `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="product-card">
          <div class="product-img-wrap">
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <button class="wishlist-btn" onclick="handleWishlist(${product.id}, this)">
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
              <button class="btn btn-add-cart" onclick="addToCart(${product.id})">
                <i class="bi bi-cart-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function handleWishlist(productId, btn) {
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

function startCountdown() {
  let targetDate = new Date("2026-12-31T23:59:59");

  let timer = setInterval(function () {
    let now  = new Date();
    let diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(timer);
      return;
    }

    let days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (document.getElementById("days"))    document.getElementById("days").textContent    = days;
    if (document.getElementById("hours"))   document.getElementById("hours").textContent   = hours;
    if (document.getElementById("minutes")) document.getElementById("minutes").textContent = minutes;
    if (document.getElementById("seconds")) document.getElementById("seconds").textContent = seconds;

  }, 1000);
}
