const track = document.querySelector(".carrossel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const cards = document.querySelectorAll(".cardC");

let index = 0;
const cardWidth = cards[0].offsetWidth;
const gap = parseInt(getComputedStyle(track).gap) || 20;
const totalCards = cards.length;

const updateTransform = () => {
  const visibleWidth = document.querySelector(".carrossel-servicos").offsetWidth;
  const totalWidth = (cardWidth + gap) * totalCards - gap;
  const maxIndex = Math.max(
    0,
    Math.ceil((totalWidth - visibleWidth) / (cardWidth + gap)),
  );
  if (index > maxIndex) index = maxIndex;
  track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
};

nextBtn.addEventListener("click", () => {
  index++;
  updateTransform();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = 0;
  updateTransform();
});

window.addEventListener("resize", updateTransform);
updateTransform();
