const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".container");
const success = document.getElementById("success");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);

let scale = 1;
let messages = [
  "Sigur nu? 🥺",
  "Gândește-te mai bine 😏",
  "Hai că știu că vrei 💕",
  "NU prea merge 😂",
  "Ultima șansă 😈"
];
let msgIndex = 0;

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();

  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // micșorare progresivă
  scale -= 0.07;
  if (scale < 0.4) scale = 0.4;
  noBtn.style.transform = scale(${scale});

  // schimbă textul
  noBtn.innerText = messages[msgIndex % messages.length];
  msgIndex++;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function confettiBoom() {
  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.width = "8px";
    confetti.style.height = "12px";
    confetti.style.backgroundColor =
      ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0"][Math.floor(Math.random() * 4)];
    confetti.style.animation = "fall 2.5s linear forwards";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

yesBtn.addEventListener("click", () => {
  container.style.display = "none";
  success.classList.remove("hidden");
  confettiBoom();
});
