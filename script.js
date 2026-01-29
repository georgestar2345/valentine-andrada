const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".container");
const success = document.getElementById("success");

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

yesBtn.addEventListener("click", () => {
  container.style.display = "none";
  success.classList.remove("hidden");
});
