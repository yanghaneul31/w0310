let signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];

const saveBtn = document.querySelector(".save-btn");
const userName = document.getElementById("username");
const currentPw = document.getElementById("currentpw");
const passWord = document.getElementById("newpw");
const confirmPw = document.getElementById("confirmpw");
const email = document.getElementById("email");
const tel = document.getElementById("tel");

//정규표현식
const idPattern = /^[a-zA-Z][a-zA-Z0-9]{9,23}$/;
const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const telPattern = /^\d{11}$/;

userName.addEventListener("input", () => {
  userName.classList.remove("input_red", "input_green");
  idPattern.test(userName.value)
    ? userName.classList.add("input_green")
    : userName.classList.add("input_red");
});

passWord.addEventListener("input", () => {
  passWord.classList.remove("input_red", "input_green");
  pwPattern.test(passWord.value)
    ? passWord.classList.add("input_green")
    : passWord.classList.add("input_red");
});

confirmPw.addEventListener("input", () => {
  confirmPw.classList.remove("input_red", "input_green");
  confirmPw.value === passWord.value
    ? confirmPw.classList.add("input_green")
    : confirmPw.classList.add("input_red");
});

email.addEventListener("input", () => {
  email.classList.remove("input_red", "input_green");
  emailPattern.test(email.value)
    ? email.classList.add("input_green")
    : email.classList.add("input_red");
});

tel.addEventListener("input", () => {
  tel.classList.remove("input_red", "input_green");
  telPattern.test(tel.value)
    ? tel.classList.add("input_green")
    : tel.classList.add("input_red");
});

saveBtn.addEventListener("click", () => {
  const loginUser = localStorage.getItem("loginUser");

  // 로컬스토리지 데이터 덮어쓰기
  signUpData = signUpData.map((user) => {
    if (user.userName === loginUser) {
      return {
        ...user,
        userName: userName.value,
        passWord: passWord.value,
        email: email.value,
        tel: tel.value,
      };
    }
    return user;
  });

  // 저장
  localStorage.setItem("signUpData", JSON.stringify(signUpData));

  // 유저네임도 다시 저장
  localStorage.setItem("loginUser", userName.value);

  // 페이지 이동
  window.location.href = "../index.html";
});
