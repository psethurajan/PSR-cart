document.addEventListener("DOMContentLoaded", function () {
  renderWishlistPage();
});

function renderWishlistPage() {
  let wishlist  = getWishlist();
  let container = document.getElementById("wishlist-items");

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-heart fs-1 text-secondary"></i>
        <h4 class="mt-3">Your wishlist is empty</h4>
        <p class="text-secondary mb-4">Save products you like and come back later.</p>
        <a href="products.html" class="btn btn-primary-custom">
          <i class="bi bi-bag me-2"></i>Explore Products
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = "";

  wishlist.forEach(function (product) {
    container.innerHTML += `
      <div class="col-lg-3 col-md-6 mb-4" id="wish-${product.id}">
        <div class="product-card">
          <div class="product-img-wrap">
            <img src="${product.image}" alt="${product.title}" class="product-img">
          </div>
          <div class="product-info">
            <span class="product-category">${product.category}</span>
            <h5 class="product-title">${product.title}</h5>
            <div class="product-rating">
              <i class="bi bi-star-fill text-warning"></i>
              <span>${product.rating}</span>
            </div>
            <div class="product-price mb-2">&#8377;${product.price.toLocaleString()}</div>
            <div class="d-flex gap-2">
              <button class="btn btn-add-cart flex-grow-1" onclick="addToCart(${product.id})">
                <i class="bi bi-cart-plus me-1"></i>Add to Cart
              </button>
              <button class="btn btn-danger" onclick="removeWishItem(${product.id})">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function removeWishItem(productId) {
  toggleWishlist(productId);
  let card = document.getElementById("wish-" + productId);
  if (card) card.remove();

  if (getWishlist().length === 0) {
    renderWishlistPage();
  }
}
