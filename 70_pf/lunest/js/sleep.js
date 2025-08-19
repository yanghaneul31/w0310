const likeBtn = document.querySelectorAll(".heart");
const modalText = document.querySelector(".modal-content>p");

const initFavs = JSON.parse(localStorage.getItem("fav") || "[]");
likeBtn.forEach(btn => {
  const title = btn.parentElement.dataset.title;
  btn.textContent = initFavs.includes(title) ? "❤" : "♡";
});

likeBtn.forEach(btn => {
  btn.onclick = () => {
    const title = btn.parentElement.dataset.title;
    let favs = JSON.parse(localStorage.getItem("fav") || "[]");
    favs = favs.includes(title) ? favs.filter(v => v !== title) : favs.concat(title);
    localStorage.setItem("fav", JSON.stringify(favs));
    const on = favs.includes(title);
    localStorage.setItem("isClicked_" + title, on ? "true" : "false");
    btn.textContent = on ? "❤" : "♡";
    modalText.textContent = on ? "즐겨찾기에 추가되었습니다." : "즐겨찾기에서 삭제되었습니다.";
    showAlert();
  };
});


function showAlert() {
  document.getElementById("alertModal").style.display = "flex";
}

function closeAlert() {
  document.getElementById("alertModal").style.display = "none";
}

const soundCard = document.querySelectorAll(".sound-card");
const audioUi = document.querySelector(".audio_ui");

soundCard.forEach((card) => {
  card.addEventListener("click", () => {
    createAudioUi(card.dataset.title);

  const progress = document.getElementById("progress_bar");
  const current = document.getElementById("current_time");
  const total = document.getElementById("total_time");
  const playBtn = document.getElementById("play_btn");
  const volume = document.getElementById("volume");
   
  volume.addEventListener("input", (e) => {
      AudioPlayer.setVolume(Number(e.target.value));
  });

  AudioPlayer.initPlayer(progress, current, total, playBtn);
  AudioPlayer.setVolume(Number(volume.value));
  AudioPlayer.playTrack(card.dataset.title);
  });
});

const deleteUi = () => {
  audioUi.innerHTML = "";
  audio.pause();
  audio = null;
};


const createAudioUi = (title) => {
  audioUi.innerHTML = `
    <div class="player">
      <img src="/images/sleep/sleep_${title}.png" alt="${title}" class="cover-img">
      <div class="info">
        <h3 id="track_title">${title}</h3>
        <div class="progress">
          <span id="current_time">0:00</span>
          <input type="range" id="progress_bar" min="0" max="100" value="0">
          <span id="total_time">0:00</span>
        </div>
        <div class="controls">
          <button id="play_btn">▶</button>
          <input type="range" min="0" max="1" step="0.01" value="0.5" id="volume">
          <img src="/images/volume.svg" alt="볼륨이미지" class="volume_img">
        </div>
        <button id="close" onclick="deleteUi()"> X </button>
      </div>
    </div>
  </div>
  `;
};


// likeBtn.forEach(btn => {
//   btn.onclick = () => {
//     const title = btn.parentElement.dataset.title;
//     let favs = JSON.parse(localStorage.getItem("fav") || "[]");

//     if (!favs.includes(title)) {   
//       favs.push(title);
//       localStorage.setItem("fav", JSON.stringify(favs));
//     }
//   };
// });



