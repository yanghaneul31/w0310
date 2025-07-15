//sec1
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const keyword = searchInput.value.trim();
    if (keyword !== "") {
      alert(`검색어: ${keyword}`);
      // 실제 검색 로직 추가 가능
    }
  }
});
// sec2
const images = document.querySelectorAll("#largeImageArea img");
const thumbnails = document.querySelectorAll(".thumbnail");
let idx = 0;

function clearActive() {
  images.forEach((img) => img.classList.remove("active"));
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));
}

function activate(index) {
  clearActive();
  images[index].classList.add("active");
  thumbnails[index].classList.add("active");
  idx = index;
}

thumbnails.forEach((thumb, i) => {
  thumb.addEventListener("click", () => {
    activate(i);
  });
});

setInterval(() => {
  let next = (idx + 1) % images.length;
  activate(next);
}, 5000);
