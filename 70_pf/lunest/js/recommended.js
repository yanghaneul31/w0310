const playtBtn = document.getElementById("playPauseBtn");
const rainAudio = new Audio("../mp3/rain.mp3");

playtBtn.addEventListener("click", () => {
  if (rainAudio.paused) {
    rainAudio.play();
    playtBtn.textContent = "⏸";
  } else {
    rainAudio.pause();
    playtBtn.textContent = "▶";
  }
});

// Date 객체
const clock = document.getElementById("clock");
const greeting = document.querySelector(".greeting");

const updateClock =()=>{
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  
  const time= `${hours.toString().padStart(2, "0")} : ${minute.toString().padStart(2, "0")}`;
  clock.textContent = time;  
  
  if (hours < 7) {
    greeting.textContent = "좋은 밤 보내세요 🌙";
  } else if (hours < 18) {
    greeting.textContent = "오늘도 좋은 하루 되세요 ☀️";
  } else {
    greeting.textContent = "편안한 저녁 보내세요 ⭐";
  }
}

updateClock();
setInterval(updateClock, 1000);

//오디오
const recommendBox = document.querySelector(".recommend-player");

function renderPlayer(track) {
  recommendBox.innerHTML = `
    <div class="player">
      <img src="../images/recommended/${track}.jpg" alt="${track}" class="cover-img">
      <div class="info">
        <h3 id="track_title">${track}</h3>
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
      </div>
    </div>
  `;

  const progress = document.getElementById("progress_bar");
  const current = document.getElementById("current_time");
  const total = document.getElementById("total_time");
  const playBtn = document.getElementById("play_btn");
  const volume = document.getElementById("volume");

  AudioPlayer.initPlayer(progress, current, total, playBtn);
  AudioPlayer.playTrack(track);

  volume.addEventListener("input", (e) => {
    window.AudioPlayer.setVolume(e.target.value);
  });
}

renderPlayer("rain");

document.querySelector(".thumbnail-buttons").addEventListener("click", (e) => {
  const t = e.target.closest(".thumb");
  if (!t) return;

  const cover = document.querySelector(".player .cover-img");
  const title = document.getElementById("track_title");

  const curr = { name: cover.alt, src: cover.src };
  const next = { name: t.dataset.track, src: t.src };

  cover.src = next.src;
  cover.alt = next.name;
  t.src = curr.src;
  t.alt = curr.name;
  t.dataset.track = curr.name;

  title.textContent = next.name;
  window.AudioPlayer.playTrack(next.name);
});
