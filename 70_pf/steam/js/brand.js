const secWrapper = document.getElementById("sec2-wrapper");
const background = document.getElementById("bg");

window.addEventListener("scroll", () => {
  const wrapperTop = secWrapper.getBoundingClientRect().top;
  const maxScroll = 1200; // 2000 - 800 = 1200

  if (wrapperTop <= 0 && Math.abs(wrapperTop) <= maxScroll) {
    background.style.transform = `translateY(-${Math.abs(wrapperTop)}px)`;
  }
});
const container = document.getElementById("carousel");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
});

container.addEventListener("mouseup", () => {
  isDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (x - startX) * 1.2;
  container.scrollLeft = scrollLeft - walk;
});
