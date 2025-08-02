const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

let isPlaying = false;

// Auto-pause if page not in focus (optional)
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    music.pause();
    toggle.textContent = "🔇";
    isPlaying = false;
  }
});

// Toggle music on button click
toggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggle.textContent = "🔇";
  } else {
    music.play();
    toggle.textContent = "🎵";
  }
  isPlaying = !isPlaying;
});