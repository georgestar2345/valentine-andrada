// Elemente
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".container");
const success = document.getElementById("success");
const playBtn = document.getElementById("playMusic");
const iframe = document.getElementById("music");

/* ===== Muzica ===== */
playBtn.addEventListener("click", function () {
  iframe.src =
    "https://www.youtube.com/embed/E8i32NXMxnc?autoplay=1&playsinline=1&loop=1&playlist=E8i32NXMxnc";
  playBtn.style.display = "none";
});

/* ===== Inimioare ===== */
function createHeart() {
  var heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);

/* ===== Buton NU ===== */
function moveNo() {
  var maxX = container.clientWidth - noBtn.offsetWidth;
  var maxY = container.clientHeight - noBtn.offsetHeight;

  var x = Math.random() * maxX;
  var y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

/* ===== Buton DA ===== */
yesBtn.addEventListener("click", function () {
  container.style.display = "none";
  success.classList.remove("hidden");
});
