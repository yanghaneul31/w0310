const mobileMenu = document.querySelector(".mobile_menu");
const closeBtn = document.querySelector(".close");
const gnb = document.querySelector(".gnb");
const header = document.querySelector(".header");
const mainLi = document.querySelectorAll(".main>li");
let isOpen = false;

// 메뉴 열기
mobileMenu.addEventListener("click", () => {
  gnb.classList.add("open");
  header.classList.add("menu_open");
  mobileMenu.style.display = "none";
  closeBtn.style.display = "block";
  document.body.classList.add("menu_open");
});

// 메뉴 닫기
closeBtn.addEventListener("click", () => {
  gnb.classList.remove("open");
  header.classList.remove("menu_open");
  
  closeBtn.style.display = "none";
  mobileMenu.style.display = "block";
  document.body.classList.remove("menu_open");
  mainLi.forEach(li=>{
    li.classList.remove("open")
    li.style.color = "#fff";
  });
  document
    .querySelectorAll(".sub.open")
    .forEach((sub) => sub.classList.remove("open"));
});


mainLi.forEach((li) => {
  li.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 768px)").matches){
    isOpen=true;
    mainLi.forEach((item) => {
      item.classList.remove("open");
      item.style.color = "#fff";
    });
    li.classList.add("open");
    li.style.color = "#666";
  }
  });
});

