
function getCart() {
  let cart = localStorage.getItem("psrcard_cart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("psrcard_cart", JSON.stringify(cart));
}

function addToCart(productId) {
  let cart     = getCart();
  let product  = products.find(function(p) { return p.id === productId; });
  let existing = cart.find(function(item) { return item.id === productId; });

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(Object.assign({}, product, { quantity: 1 }));
  }

  saveCart(cart);
  updateCartCount();
  showToast(product.title + " added to cart!");
}

function removeFromCart(productId) {
  let cart = getCart().filter(function(item) { return item.id !== productId; });
  saveCart(cart);
  updateCartCount();
}

function increaseQty(productId) {
  let cart = getCart();
  let item = cart.find(function(i) { return i.id === productId; });
  if (item) item.quantity += 1;
  saveCart(cart);
}

function decreaseQty(productId) {
  let cart = getCart();
  let item = cart.find(function(i) { return i.id === productId; });
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    saveCart(cart);
  } else {
    removeFromCart(productId);
  }
}

function updateCartCount() {
  let cart       = getCart();
  let totalItems = cart.reduce(function(sum, item) { return sum + item.quantity; }, 0);
  let badge      = document.getElementById("cart-count");
  if (badge) badge.textContent = totalItems;
}

function showToast(message) {
  let toast = document.getElementById("toast");
  if (toast) {
    toast.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>' + message;
    toast.classList.add("show");
    setTimeout(function() { toast.classList.remove("show"); }, 2500);
  }
}

function logoutUser() {
  localStorage.removeItem("psrcard_user");
  window.location.reload();
}

function showNavUser() {
  let userData    = localStorage.getItem("psrcard_user");
  let navUserWrap = document.getElementById("nav-user-wrap");
  let navLogin    = document.getElementById("nav-login-link");

  if (!navUserWrap) return;

  if (userData) {
    let user      = JSON.parse(userData);
    let firstName = user.name.split(" ")[0];

    navUserWrap.style.display = "flex";
    navUserWrap.innerHTML = `
      <span class="nav-username">
        <i class="bi bi-person-circle me-1"></i>${firstName}
      </span>
      <button onclick="logoutUser()" class="btn-logout">
        <i class="bi bi-box-arrow-right me-1"></i>Logout
      </button>
    `;
    if (navLogin) navLogin.style.display = "none";
  } else {
    navUserWrap.style.display = "none";
    if (navLogin) navLogin.style.display = "inline";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
  updateWishlistCount();
  showNavUser();
});
