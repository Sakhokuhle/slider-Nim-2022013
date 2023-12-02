var myAudio = document.getElementById("myAudio");
var playimg = document.getElementById("playimg");

playimg.onclick = function () {
  if (myAudio.paused) {
    myAudio.play();
    playimg.src = "pause.png";
  } else {
    myAudio.pause();
    playimg.src = "play.png";
  }
};
