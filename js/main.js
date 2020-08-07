const audio = document.querySelector("#audio");
const imagenes = document.querySelector(".imagen-play");
const audio1 = document.querySelector("#audio1");
const imagenes1 = document.querySelector(".imagen-play1");

imagenes.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

imagenes1.addEventListener("click", function () {
  if (audio1.paused) {
    audio1.play();
  } else {
    audio1.pause();
  }
});
