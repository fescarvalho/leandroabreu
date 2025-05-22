const track2 = document.querySelector(".depoimentos-track");
const cards2 = document.querySelectorAll(".depoimento-card");
const btnProximo = document.getElementById("proximo");
const btnAnterior = document.getElementById("anterior");

let index2 = 0;

function getCardsPerView() {
  const containerWidth = document.querySelector(".depoimentos-container").offsetWidth;
  const cardWidth = cards2[0].offsetWidth + 30; // inclui o gap
  return Math.floor(containerWidth / cardWidth);
}

function updateCarousel() {
  const cardWidth = cards2[0].offsetWidth + 30;
  track2.style.transform = `translateX(-${index2 * cardWidth}px)`;
}

btnProximo.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();
  const maxIndex = cards2.length - cardsPerView;

  if (index2 < maxIndex) {
    index2++;
    updateCarousel();
  }
});

btnAnterior.addEventListener("click", () => {
  if (index2 > 0) {
    index2--;
    updateCarousel();
  }
});

window.addEventListener("resize", () => {
  // Garante que o index não ultrapasse o novo limite em telas menores
  const cardsPerView = getCardsPerView();
  const maxIndex = cards.length - cardsPerView;
  index2 = Math.min(index, maxIndex);
  updateCarousel();
});
