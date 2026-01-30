var noBtn = document.getElementById("no");
var yesBtn = document.getElementById("yes");
var container = document.querySelector(".container");
var success = document.getElementById("success");
var playBtn = document.getElementById("playMusic");
var iframe = document.getElementById("music");

/* MUZICA */
playBtn.onclick = function () {
 iframe.src = "https://www.youtube.com/embed/E8i32NXMxnc?autoplay=1&playsinline=1&controls=0&mute=0";
  playBtn.style.display = "none";
};

/* INIMIOARE */
function createHeart() {
  var heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(function () {
    document.body.removeChild(heart);
  }, 6000);
}

setInterval(createHeart, 500);

/* BUTON NU */
noBtn.onmouseenter = moveNo;
noBtn.onclick = moveNo;

function moveNo() {
  var maxX = container.clientWidth - noBtn.offsetWidth;
  var maxY = container.clientHeight - noBtn.offsetHeight;
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

/* BUTON DA */
function confettiBoom() {
  var colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0"];

  for (var i = 0; i < 120; i++) {
    var confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration =
      (2 + Math.random() * 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(function () {
      if (confetti.parentNode) {
        confetti.parentNode.removeChild(confetti);
      }
    }, 3000);
  }
}

yesBtn.onclick = function () {
  container.style.display = "none";
  success.classList.remove("hidden");
  confettiBoom();
};
