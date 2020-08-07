const audio = document.querySelector("#audio");
const imagenes = document.querySelector(".imagen-play");
const audio1 = document.querySelector("#audio1");
const imagenes1 = document.querySelector(".imagen-play1");
const audio2 = document.querySelector("#audio2");
const imagenes2 = document.querySelector(".imagen-play2");
const audio3 = document.querySelector("#audio3");
const imagenes3 = document.querySelector(".imagen-play3");


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

imagenes2.addEventListener("click", function () {
  if (audio2.paused) {
    audio2.play();
  } else {
    audio2.pause();
  }
});

imagenes3.addEventListener("click", function () {
  if (audio3.paused) {
    audio3.play();
  } else {
    audio3.pause();
  }
});