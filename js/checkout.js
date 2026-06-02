document.addEventListener("DOMContentLoaded", function () {
  loadOrderSummary();
  prefillUserInfo();

  let form = document.getElementById("checkout-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      placeOrder();
    });
  }
});

function loadOrderSummary() {
  let cart      = getCart();
  let container = document.getElementById("checkout-items");

  if (cart.length === 0) {
    window.location.href = "cart.html";
    return;
  }

  container.innerHTML = "";

  cart.forEach(function (item) {
    container.innerHTML += `
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center gap-2">
          <img src="${item.image}" alt="${item.title}"
            style="width:50px;height:50px;object-fit:cover;border-radius:8px;flex-shrink:0;">
          <div>
            <div style="font-size:0.88rem;font-weight:600;color:#f5f5f5;">${item.title}</div>
            <div style="font-size:0.78rem;color:#888;">Qty: ${item.quantity}</div>
          </div>
        </div>
        <span style="font-weight:600;font-size:0.9rem;">&#8377;${(item.price * item.quantity).toLocaleString()}</span>
      </div>
    `;
  });

  let subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.quantity); }, 0);
  let shipping = 99;
  let total    = subtotal + shipping;

  document.getElementById("co-subtotal").innerHTML = "&#8377;" + subtotal.toLocaleString();
  document.getElementById("co-total").innerHTML    = "&#8377;" + total.toLocaleString();
}

function prefillUserInfo() {
  let userData = localStorage.getItem("psrcard_user");
  if (!userData) return;

  let user = JSON.parse(userData);
  let nameField  = document.getElementById("full-name");
  let emailField = document.getElementById("email");
  if (nameField)  nameField.value  = user.name;
  if (emailField) emailField.value = user.email;
}

function placeOrder() {
  let name    = document.getElementById("full-name").value.trim();
  let email   = document.getElementById("email").value.trim();
  let phone   = document.getElementById("phone").value.trim();
  let address = document.getElementById("address").value.trim();
  let city    = document.getElementById("city").value.trim();
  let pincode = document.getElementById("pincode").value.trim();
  let errorEl = document.getElementById("form-error");

  errorEl.style.display = "none";

  if (!name || !email || !phone || !address || !city || !pincode) {
    errorEl.textContent = "Please fill in all fields.";
    errorEl.style.display = "block";
    errorEl.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  if (!email.includes("@")) {
    errorEl.textContent = "Please enter a valid email address.";
    errorEl.style.display = "block";
    return;
  }
  if (phone.length < 10 || isNaN(phone)) {
    errorEl.textContent = "Please enter a valid 10-digit phone number.";
    errorEl.style.display = "block";
    return;
  }
  if (pincode.length !== 6 || isNaN(pincode)) {
    errorEl.textContent = "Please enter a valid 6-digit pincode.";
    errorEl.style.display = "block";
    return;
  }

  let paymentEl = document.querySelector('input[name="payment"]:checked');
  let payment   = paymentEl ? paymentEl.value : "cod";

  let cart     = getCart();
  let subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.quantity); }, 0);
  let total    = subtotal + 99;

  let order = {
    orderId  : "PSR" + Date.now(),
    date     : new Date().toLocaleDateString("en-IN"),
    items    : cart,
    total    : total,
    payment  : payment,
    status   : "Order Placed",
    customer : { name, email, phone, address, city, pincode }
  };

  let orders = JSON.parse(localStorage.getItem("psrcard_orders") || "[]");
  orders.push(order);
  localStorage.setItem("psrcard_orders", JSON.stringify(orders));

  localStorage.setItem("psrcard_last_order", order.orderId);

  localStorage.removeItem("psrcard_cart");

  window.location.href = "confirmation.html";
}
