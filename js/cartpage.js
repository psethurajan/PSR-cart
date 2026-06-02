
document.addEventListener("DOMContentLoaded", function () {
  renderCartPage();
});

function renderCartPage() {
  let cart          = getCart();
  let container     = document.getElementById("cart-items");
  let summarySection = document.getElementById("cart-summary");

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <i class="bi bi-cart-x fs-1 text-secondary"></i>
        <h4 class="mt-3">Your cart is empty</h4>
        <p class="text-secondary mb-4">Add some products and come back here.</p>
        <a href="products.html" class="btn btn-primary-custom">
          <i class="bi bi-bag me-2"></i>Shop Now
        </a>
      </div>
    `;
    summarySection.style.display = "none";
    return;
  }

  summarySection.style.display = "block";
  container.innerHTML = "";

  cart.forEach(function (item) {
    container.innerHTML += `
      <div class="cart-item mb-3" id="cart-item-${item.id}">
        <div class="row align-items-center">
          <div class="col-3 col-md-2">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
          </div>
          <div class="col-5 col-md-6">
            <h6 class="cart-item-title">${item.title}</h6>
            <small class="text-secondary">${item.category}</small>
            <div class="mt-1 fw-bold text-light">&#8377;${item.price.toLocaleString()}</div>
          </div>
          <div class="col-4 col-md-4">
            <div class="qty-controls d-flex align-items-center gap-2 mb-2">
              <button class="btn btn-sm btn-outline-light" onclick="changeQty(${item.id}, -1)">&#8722;</button>
              <span id="qty-${item.id}">${item.quantity}</span>
              <button class="btn btn-sm btn-outline-light" onclick="changeQty(${item.id}, 1)">&#43;</button>
            </div>
            <button class="btn btn-sm btn-danger" onclick="deleteItem(${item.id})">
              <i class="bi bi-trash me-1"></i>Remove
            </button>
          </div>
        </div>
      </div>
    `;
  });

  updateTotal();
}

function changeQty(productId, change) {
  if (change === 1) {
    increaseQty(productId);
  } else {
    decreaseQty(productId);
  }

  let cart = getCart();
  let item = cart.find(function(i) { return i.id === productId; });

  if (!item) {
    renderCartPage();
  } else {
    document.getElementById("qty-" + productId).textContent = item.quantity;
    updateTotal();
    updateCartCount();
  }
}

function deleteItem(productId) {
  removeFromCart(productId);
  renderCartPage();
}

function updateTotal() {
  let cart     = getCart();
  let subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.quantity); }, 0);
  let shipping = subtotal > 0 ? 99 : 0;
  let total    = subtotal + shipping;

  document.getElementById("subtotal").innerHTML = "&#8377;" + subtotal.toLocaleString();
  document.getElementById("shipping").innerHTML = shipping === 0 ? "Free" : "&#8377;" + shipping;
  document.getElementById("total").innerHTML    = "&#8377;" + total.toLocaleString();
}

function goToCheckout() {
  let cart = getCart();
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }
  window.location.href = "checkout.html";
}
