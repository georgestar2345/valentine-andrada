// Elemente
var noBtn = document.getElementById("no");
var yesBtn = document.getElementById("yes");
var container = document.querySelector(".container");
var success = document.getElementById("success");
var playBtn = document.getElementById("playMusic");
var iframe = document.getElementById("music");

/* ===== Muzica ===== */
playBtn.addEventListener("click", function () {
  iframe.src = "https://www.youtube.com/embed/E8i32NXMxnc?autoplay=1&playsinline=1&loop=1&playlist=E8i32NXMxnc";
  playBtn.style.display = "none";
});

/* ===== Inimioare ===== */
function createHeart() {
  var heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "H"; // simplu, simbol temporar
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
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

const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const texts = [
  "Ești sigură? 🥺",
  "Hai măcar încearcă 💔",
  "Gândește-te puțin 😏",
  "Nu te las 😈",
  "Ultima șansă 😭",
  "Ok… poate DA? 💖"
];

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  const randomText = texts[Math.floor(Math.random() * texts.length)];
  message.textContent = randomText;
});
