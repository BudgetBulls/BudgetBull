const loginToggle = document.getElementById("login-toggle");
const signupToggle = document.getElementById("signup-toggle");

loginToggle.addEventListener("click", toggleLogin);
signupToggle.addEventListener("click", toggleSignup);

function toggleSignup() {
  loginToggle.style.backgroundColor = "#fff";
  loginToggle.style.color = "#222";
  signupToggle.style.backgroundColor = "#57b846";
  signupToggle.style.color = "#fff";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

function toggleLogin() {
  loginToggle.style.backgroundColor = "#57B846";
  loginToggle.style.color = "#fff";
  signupToggle.style.backgroundColor = "#fff";
  signupToggle.style.color = "#222";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

 