const signUpBox = document.querySelectorAll(".sign_up_box");
const btn = document.querySelector(".btn");
const stepBar = document.querySelectorAll(".step_bar");
const red = document.querySelector(".input_red");
const green = document.querySelector(".input_green");

//step0
const state = document.getElementById("state");
const date = document.getElementById("date");
const agree = document.getElementById("agree_btn");

//step1
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");

//step2
const userName = document.getElementById("Username");
const passWord = document.querySelectorAll(".pw");

//정규식
const datePattern = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const telPattern = /^\d{11}$/;
const idPattern = /^[a-zA-Z][a-zA-Z0-9]{9,23}$/;
const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

let i = 0;
let idx = 0;

//버튼 이벤트
btn.addEventListener("click", () => {
  if (!validateStep(i)) return;

  if (i === signUpBox.length - 1) {
    saveUserInfo();
    window.location.href = "./sign_up_fin.html";
    return;
  }
  signUpBox[i].classList.remove("active");
  i++;
  signUpBox[i].classList.add("active");
  stepShow();
});

// 스텝바 이벤트
const stepShow = () => {
  stepBar[idx].classList.remove("now_step");
  idx = (idx + 1) % stepBar.length;
  stepBar[idx].classList.add("now_step");
};

// 유효성 검사에 따른 input border 색 변화

date.addEventListener("input", () => {
  date.classList.remove("input_red", "input_green");
  datePattern.test(date.value)
    ? date.classList.add("input_green")
    : date.classList.add("input_red");
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

userName.addEventListener("input", () => {
  userName.classList.remove("input_red", "input_green");
  idPattern.test(userName.value)
    ? userName.classList.add("input_green")
    : userName.classList.add("input_red");
});

passWord[0].addEventListener("input", () => {
  passWord[0].classList.remove("input_red", "input_green");
  pwPattern.test(passWord[0].value)
    ? passWord[0].classList.add("input_green")
    : passWord[0].classList.add("input_red");
});

passWord[1].addEventListener("input", () => {
  passWord[1].classList.remove("input_red", "input_green");
  passWord[1].value === passWord[0].value
    ? passWord[1].classList.add("input_green")
    : passWord[1].classList.add("input_red");
  
});

// form 유효성 검사
const validateStep = (step) => {
  if (step === 0) {
    if (!datePattern.test(date.value)) {
      alert("생년월일을 다시 확인해주세요.");
      return false;
    }
    if (state.value === "선택" || !date.value || !agree.checked) {
      alert("모든 정보를 입력해주세요.");
      return false;
    }
  }

  if (step === 1) {
    if (!firstName.value || !lastName.value || !email.value || !tel.value) {
      alert("모든 정보를 입력해주세요.");
      return false;
    }
    if (!emailPattern.test(email.value)) {
      alert("이메일 형식을 다시 확인해주세요.");
      return false;
    }
    if (!telPattern.test(tel.value)) {
      alert("전화번호 형식을 다시 확인해주세요");
      return false;
    }
  }

  if (step === 2) {
    if (!userName.value || !passWord[0].value || !passWord[1].value) {
      alert("모든 정보를 입력해주세요.");
      return false;
    }
    if (!idPattern.test(userName.value)) {
      alert("아이디 형식을 다시 확인해주세요.");
      return false;
    }
    if (!pwPattern.test(passWord[0].value)) {
      alert("비밀번호 형식을 다시 확인해주세요.");
      return false;
    }
    if (!pwPattern.test(passWord[1].value)) {
      alert("비밀번호 형식을 다시 확인해주세요.");
      return false;
    }
    if (passWord[0].value !== passWord[1].value) {
      alert("입력하신 비밀번호가 서로 다릅니다.");
      return false;
    }
  }
  return true;
};

// 로컬스토리지

const saveUserInfo = () => {
  const data = {
    state: document.querySelector("#state").value,
    date: document.querySelector("#date").value,
    agree: document.querySelector("#agree_btn").checked,
    lastName: document.querySelector("#last_name").value,
    firtsName: document.querySelector("#first_name").value,
    email: document.querySelector("#email").value,
    tel: document.querySelector("#tel").value,
    userName: document.querySelector("#Username").value,
    passWord: document.querySelectorAll(".pw")[0].value,
  };
  const userList = JSON.parse(localStorage.getItem("signUpData")) || [];

  userList.push(data);

  localStorage.setItem("signUpData", JSON.stringify(userList));
};
