const goHome = document.querySelector(".home");
const goLogin = document.querySelector(".login");

goHome.addEventListener("click", () => {
  window.location.href = "../index.html";
});

goLogin.addEventListener("click", () => {
  window.location.href = "./login.html";
});
