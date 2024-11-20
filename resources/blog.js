const nextButton = document.querySelector(".carousel-next");
const prevButton = document.querySelector(".carousel-prev");
const carousel = document.querySelector(".blog-carousel");

let scrollAmount = 0;

nextButton.addEventListener("click", () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
});

prevButton.addEventListener("click", () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
});
