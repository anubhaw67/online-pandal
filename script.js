document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const darkBtn = document.getElementById("toggle-theme");
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Play/Pause Music
  const musicBtn = document.getElementById("play-music");
  const music = document.getElementById("pujo-music");

  musicBtn.addEventListener("click", () => {
    if (!music) return;
    if (music.paused) {
      music.play();
      musicBtn.textContent = "Pause Music";
    } else {
      music.pause();
      musicBtn.textContent = "Play Music";
    }
  });
});
