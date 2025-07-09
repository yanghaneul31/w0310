const tab = document.querySelectorAll(".tab");
const rankingBtn = document.querySelector(".ranking-btn");

tab[1].addEventListener("click", () => {
  tab[0].classList.remove("active");
  tab[1].classList.add("active");
});

tab[0].addEventListener("click", () => {
  tab[1].classList.remove("active");
  tab[0].classList.add("active");
});

rankingBtn.addEventListener("click", () => {
  const rankingList = document.querySelector(".ranking-list");
  // 버튼 2개 겹쳐놓고 클릭하면 기존버튼 dn, 숨겨져있던버튼 db
  rankingList.style.height = "970px";
  rankingList.style.overflow = visible;
});