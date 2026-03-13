const loveBtn = document.getElementById("loveBtn");
const floatingMessage = document.getElementById("floating-message");
const heartsContainer = document.querySelector(".background-hearts");
const petalsContainer = document.querySelector(".floating-petals");

loveBtn.addEventListener("click", () => {
  showLoveMessage();
  burstHearts(18);
  burstPetals(16);
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

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  const flowers = ["🌸", "🌷", "🌼", "🪻"];
  petal.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

  const size = Math.random() * 16 + 14;
  const left = Math.random() * 100;
  const duration = Math.random() * 4 + 5;

  petal.style.left = `${left}%`;
  petal.style.fontSize = `${size}px`;
  petal.style.animationDuration = `${duration}s`;

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

function burstHearts(count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 120);
  }
}

function burstPetals(count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createPetal();
    }, i * 140);
  }
}

setInterval(() => {
  createHeart();
}, 1000);

setInterval(() => {
  createPetal();
}, 1400);
