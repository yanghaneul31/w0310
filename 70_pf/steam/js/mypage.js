const userName = document.querySelector(".username");
const editBtn = document.querySelector(".edit-btn");
const user = localStorage.getItem("loginUser");

userName.textContent = user;

editBtn.addEventListener("click", () => {
  window.location.href = "./profile_edit.html";
});
