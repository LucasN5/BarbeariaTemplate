document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide-teams", {
    loop: true,
    rewind: true,
    rewindByDrag: true,
    perPage: 3,
    perMove: 1,
  }).mount();

  new Splide(".splide-testimonials", {
    loop: true,
    rewind: true,
    rewindByDrag: true,
    perPage: 2,
    perMove: 1,
  }).mount();
});
