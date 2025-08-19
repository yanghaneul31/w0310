const slide = document.querySelector(".slide_box");
const inner = document.querySelectorAll(".inner");
const ellipse = document.querySelectorAll(".ellipse");
const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");
let i = 0;
let slideDelay = false;

slide.style.transition = "none";
slide.style.transform = `translateX(-${(i + 1) * 100}vw)`;

// 인디케이터 갱신
const ellipseChange = () => {
  ellipse.forEach(elm => elm.classList.remove("choice"));
  ellipse[i].classList.add("choice");
};

// 공통 이동 함수
const moveSlide = (direction) => {
  if (slideDelay) return;
  slideDelay = true;

  i += direction; 
  slide.style.transition = ".3s";
  slide.style.transform = `translateX(-${(i + 1) * 100}vw)`;

  // 인디케이터 갱신
  if (i >= 0 && i < ellipse.length) {
    ellipseChange();
  } else if (i < 0) {
    // 왼쪽 끝에서 왼쪽으로 이동
    ellipse.forEach(elm => elm.classList.remove("choice"));
    ellipse[ellipse.length - 1].classList.add("choice");
  } else if (i >= ellipse.length) {
    // 오른쪽 끝에서 오른쪽으로 이동
    ellipse.forEach(elm => elm.classList.remove("choice"));
    ellipse[0].classList.add("choice");
  }

  // 양쪽 끝 클론 처리
  if (i < 0) {
    setTimeout(() => {
      slide.style.transition = "none";
      i = ellipse.length - 1;
      slide.style.transform = `translateX(-${(i + 1) * 100}vw)`;
      slideDelay = false;
    }, 300);
  } else if (i === ellipse.length) {
    setTimeout(() => {
      slide.style.transition = "none";
      i = 0;
      slide.style.transform = `translateX(-${(i + 1) * 100}vw)`;
      slideDelay = false;
    }, 300);
  } else {
    // 일반 이동 시
    setTimeout(() => {
      slideDelay = false;
    }, 300);
  }
};

// 자동 슬라이드
let slideInterval = setInterval(() => moveSlide(1), 3000);

const stopSlide = () => clearInterval(slideInterval);
const resumeSlide = () => slideInterval = setInterval(() => moveSlide(1), 3000);

[slide, rightBtn, leftBtn, ...ellipse].forEach(elm => {
  elm.addEventListener("mouseover", stopSlide);
  elm.addEventListener("mouseout", resumeSlide);
});

// 버튼 이벤트
rightBtn.addEventListener("click", () => moveSlide(1));
leftBtn.addEventListener("click", () => moveSlide(-1));
