// js/audio.js

let audio = null;
let progressBar = null;
let currentTimeEl = null;
let totalTimeEl = null;
let playBtn = null;

// 시간 분:초 단위 변경
function formatTime(sec) {
  if (!sec || isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

// 초기화 (DOM 연결)
function initPlayer(progressEl, currentEl, totalEl, playButton) {
  progressBar = progressEl;
  currentTimeEl = currentEl;
  totalTimeEl = totalEl;
  playBtn = playButton;

  // 진행바 조작 → 위치 변경
  progressBar.addEventListener("input", () => {
    if (audio && audio.duration) {
      audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
  });

  // 토글 버튼
  playBtn.addEventListener("click", togglePlay);
}

// 특정 곡 재생
function playTrack(trackName) {
  // 기존 오디오 멈추기
  if (audio) {
    audio.pause();
  }

  // 새 오디오 로드
  audio = new Audio(`/mp3/${trackName}.mp3`);
  audio.volume = 0.5;
  audio.play();

  // 총 길이 업데이트
  audio.addEventListener("loadedmetadata", () => {
    totalTimeEl.textContent = formatTime(audio.duration);
  });

  // 시간/진행바 업데이트
  audio.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  });

  // 재생 끝나면 버튼 리셋
  audio.addEventListener("ended", () => {
    playBtn.textContent = "▶";
  });

  playBtn.textContent = "⏸";
}

// 재생/일시정지 토글
function togglePlay() {
  if (!audio) return;

  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
}

// 볼륨 조절
function setVolume(value) {
  if (audio) {
    audio.volume = value;
  }
}

// 전역 내보내기
window.AudioPlayer = {
  initPlayer,
  playTrack,
  setVolume,
};
