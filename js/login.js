document.addEventListener("DOMContentLoaded", function () {

  checkLoginStatus();

  let toggleBtn = document.getElementById("toggle-password");
  let passwordInput = document.getElementById("password");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';
      } else {
        passwordInput.type = "password";
        toggleBtn.innerHTML = '<i class="bi bi-eye"></i>';
      }
    });
  }

  let loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let name     = document.getElementById("fullname").value.trim();
      let email    = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value;
      let errorMsg = document.getElementById("error-msg");

      if (name === "" || email === "" || password === "") {
        errorMsg.textContent = "Please fill in all fields.";
        errorMsg.style.display = "block";
        return;
      }
      if (!email.includes("@")) {
        errorMsg.textContent = "Please enter a valid email address.";
        errorMsg.style.display = "block";
        return;
      }
      if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters.";
        errorMsg.style.display = "block";
        return;
      }

      let user = { name: name, email: email };
      localStorage.setItem("psrcard_user", JSON.stringify(user));

      errorMsg.style.display = "none";
      document.getElementById("success-msg").style.display = "block";

      setTimeout(function () {
        window.location.href = "index.html";
      }, 1500);
    });
  }

  let logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("psrcard_user");
      window.location.reload();
    });
  }
});

function checkLoginStatus() {
  let userData = localStorage.getItem("psrcard_user");
  let loginSection  = document.getElementById("login-section");
  let welcomeSection = document.getElementById("welcome-section");

  if (!loginSection || !welcomeSection) return;

  if (userData) {
    let user = JSON.parse(userData);
    loginSection.style.display  = "none";
    welcomeSection.style.display = "block";
    let nameEl = document.getElementById("welcome-name");
    if (nameEl) nameEl.textContent = user.name;
  } else {
    loginSection.style.display  = "block";
    welcomeSection.style.display = "none";
  }
}
