const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".container");
const success = document.getElementById("success");
const playBtn = document.getElementById("playMusic");
const iframe = document.getElementById("music");

/* MUZICĂ */
playBtn.addEventListener("click", () => {
  iframe.src =
    "https://www.youtube.com/embed/E8i32NXMxnc?autoplay=1&playsinline=1&loop=1&playlist=E8i32NXMxnc";
  playBtn.style.display = "none";
});

/* INIMIOARE */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);

/* BUTON NU */
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

/* DA */
yesBtn.addEventListener("click", () => {
  container.style.display = "none";
  success.classList.remove("hidden");
});
