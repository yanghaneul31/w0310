const inputId = document.getElementById("username");
const inputPw = document.getElementById("password");
const login = document.querySelector(".login");

const open = document.getElementById("open");
const close = document.getElementById("close");
const save = document.getElementById("save");

// 보이기 토글
open.addEventListener("click", () => {
  inputPw.type = "password";
  open.classList.remove("show");
  close.classList.add("show");
});

//숨기기 토글
close.addEventListener("click", () => {
  inputPw.type = "text";
  close.classList.remove("show");
  open.classList.add("show");
});

// 로컬스토리지 정보 받아서 로그인하기
login.addEventListener("click", () => {
  const savedList = JSON.parse(localStorage.getItem("signUpData")) || [];

  const searchData = savedList.find((user) => {
    return inputId.value === user.userName && inputPw.value === user.passWord;
  });

  if (searchData) {
    localStorage.setItem("loginUser", searchData.userName);
    window.location.href = "../index.html";
  } else if (!inputId.value && !inputPw.value) {
    alert("아이디와 비밀번호를 입력해주세요");
  } else {
    alert("아이디 또는 비밀번호가 틀렸습니다,");
  }
});

// 배경이미지 변경
const inner = document.querySelectorAll(".inner");
let i = 0;
setInterval(() => {
  inner[i].classList.remove("active");
  i = (i + 1) % inner.length;
  inner[i].classList.add("active");
}, 7000);
