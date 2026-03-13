const loveBtn = document.getElementById("loveBtn");
const floatingMessage = document.getElementById("floating-message");
const heartsContainer = document.querySelector(".background-hearts");

loveBtn.addEventListener("click", () => {
  showLoveMessage();
  burstHearts(18);
});

function showLoveMessage() {
  floatingMessage.classList.add("show");

  setTimeout(() => {
    floatingMessage.classList.remove("show");
  }, 1800);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💙";

  const size = Math.random() * 18 + 14;
  const left = Math.random() * 100;
  const duration = Math.random() * 3 + 4;

  heart.style.left = `${left}%`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

function burstHearts(count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 120);
  }
}

setInterval(() => {
  createHeart();
}, 900);
