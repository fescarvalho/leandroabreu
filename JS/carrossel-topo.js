const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const carousel = document.getElementById("carousel");
let currentIndex = 0;
let interval;

function goToSlide(index, resetTimer = false) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentIndex = index;

  if (resetTimer) {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  goToSlide(nextIndex);
}

function startInterval() {
  interval = setInterval(nextSlide, 5000);
}

function stopInterval() {
  clearInterval(interval);
}

carousel.addEventListener("mouseenter", stopInterval);
carousel.addEventListener("mouseleave", startInterval);

startInterval();
