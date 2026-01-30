var noBtn = document.getElementById("no");
var yesBtn = document.getElementById("yes");
var container = document.querySelector(".container");
var success = document.getElementById("success");
var playBtn = document.getElementById("playMusic");
var iframe = document.getElementById("music");

/* MUZICA */
playBtn.onclick = function () {
  iframe.src = "https://www.youtube.com/embed/E8i32NXMxnc?autoplay=1&loop=1";
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
yesBtn.onclick = function () {
  container.style.display = "none";
  success.classList.remove("hidden");
};
