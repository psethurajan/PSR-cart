document.addEventListener("DOMContentLoaded", function () {
  showConfirmation();
});

function showConfirmation() {
  let lastOrderId = localStorage.getItem("psrcard_last_order");
  let orders      = JSON.parse(localStorage.getItem("psrcard_orders") || "[]");
  let order       = orders.find(function(o) { return o.orderId === lastOrderId; });

  if (!order) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("conf-order-id").textContent  = order.orderId;
  document.getElementById("conf-name").textContent      = order.customer.name;
  document.getElementById("conf-date").textContent      = order.date;
  document.getElementById("conf-total").innerHTML       = "&#8377;" + order.total.toLocaleString();
  document.getElementById("conf-address").textContent   =
    order.customer.address + ", " + order.customer.city + " - " + order.customer.pincode;

  let itemsContainer = document.getElementById("conf-items");
  itemsContainer.innerHTML = "";

  order.items.forEach(function (item) {
    itemsContainer.innerHTML += `
      <div class="detail-row">
        <span class="label">${item.title} x${item.quantity}</span>
        <span class="value">&#8377;${(item.price * item.quantity).toLocaleString()}</span>
      </div>
    `;
  });

  updateTrackingUI(order.status);
}

function updateTrackingUI(status) {
  let steps        = ["Order Placed", "Confirmed", "Shipped", "Out for Delivery", "Delivered"];
  let currentIndex = steps.indexOf(status);
  if (currentIndex === -1) currentIndex = 0;

  steps.forEach(function (step, index) {
    let el = document.getElementById("step-" + index);
    if (!el) return;

    if (index < currentIndex) {
      el.classList.add("step-done");
    } else if (index === currentIndex) {
      el.classList.add("step-active");
    }
  });
}
