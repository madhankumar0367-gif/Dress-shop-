function showRegister() {
  document.querySelectorAll(".login-box")[0].style.display = "none";
  document.getElementById("registerBox").style.display = "block";
}

function showLogin() {
  document.getElementById("registerBox").style.display = "none";
  document.querySelectorAll(".login-box")[0].style.display = "block";
}

function register() {
  let user = document.getElementById("newUser").value;
  let pass = document.getElementById("newPass").value;

  if (user === "" || pass === "") {
    document.getElementById("regMsg").innerText = "Fill all fields ❌";
    return;
  }

  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  alert("Account created successfully ✅");
  showLogin();
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let savedUser = localStorage.getItem("username");
  let savedPass = localStorage.getItem("password");

  if (user === savedUser && pass === savedPass) {
    alert("Login successful ✅");
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("msg").innerText = "Invalid login ❌";
  }
}