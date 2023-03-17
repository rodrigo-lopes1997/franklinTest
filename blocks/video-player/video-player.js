export default function decorate(block) {
  const c_video = document.createElement("div");
  c_video.className = "c-video";

  const video = document.createElement("video");
  video.className = "video";
  video.src += `${block.children[0].innerText}`;

  const controls = document.createElement("div");
  controls.className = "controls";
  const red_bar = document.createElement("div");
  const buttons = document.createElement("div");
  red_bar.className = "red-bar";
  buttons.className = "buttons";

  const red = document.createElement("div");
  const play_pause = document.createElement("button");
  red.className = "red";
  play_pause.setAttribute("id", "play-pause");

  red_bar.append(red);
  buttons.append(play_pause);

  controls.append(red_bar, buttons);

  c_video.append(video, controls);

  block.textContent = "";
  block.append(c_video);
}

///// PLAYER SCRIPT //////

function loadingPlayer() {
  var videoplayer = document.querySelector(".video");
  var red = document.querySelector(".red");
  var btn = document.getElementById("play-pause");

  function togglePlayPause() {
    if (videoplayer.paused) {
      btn.className = "pause";
      videoplayer.play();
    } else {
      btn.className = "play";
      videoplayer.pause();
    }
  }

  btn.onclick = function () {
    togglePlayPause();
  };
  videoplayer.onclick = function () {
    togglePlayPause();
  };

  videoplayer.addEventListener("timeupdate", function () {
    var juicePos = videoplayer.currentTime / videoplayer.duration;
    red.style.width = juicePos * 100 + "%";
    if (videoplayer.ended) {
      btn.className = "play";
    }
  });
}

const myTimeout = setTimeout(loadingPlayer, 10);

//////////
