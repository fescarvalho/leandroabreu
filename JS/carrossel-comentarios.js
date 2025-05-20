const track = document.querySelector(".depoimentos-track");
const cards = document.querySelectorAll(".depoimento-card");
const btnProximo = document.getElementById("proximo");
const btnAnterior = document.getElementById("anterior");

let index = 0;

function getCardsPerView() {
  const containerWidth = document.querySelector(".depoimentos-container").offsetWidth;
  const cardWidth = cards[0].offsetWidth + 30; // inclui o gap
  return Math.floor(containerWidth / cardWidth);
}

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 30;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

btnProximo.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();
  const maxIndex = cards.length - cardsPerView;

  if (index < maxIndex) {
    index++;
    updateCarousel();
  }
});

btnAnterior.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

window.addEventListener("resize", () => {
  // Garante que o index não ultrapasse o novo limite em telas menores
  const cardsPerView = getCardsPerView();
  const maxIndex = cards.length - cardsPerView;
  index = Math.min(index, maxIndex);
  updateCarousel();
});
