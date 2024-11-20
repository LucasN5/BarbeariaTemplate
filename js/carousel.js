document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide-teams", {
    type: "loop", // Slide simples
    perPage: 3, // Mostra 3 slides por vez
    perMove: 3, // Move 1 slide por vez

    pagination: true, // Desativa a paginação
    arrows: true, // Habilita as setas de navegação
    drag: true, // Desativa o arrasto livre
    paginationDirection: "ltr", // Permite navegação apenas da esquerda para a direita
    classes: {
      prev: "splide__arrow--prev splide__teams__arrow",
      next: "splide__arrow--next splide__teams__arrow",
    },
    breakpoints: {
      1280: {
        perPage: 2, // Ajuste para tablets
        perMove: 2,
      },

      1023: {
        perPage: 1, // Ajuste para mobile
        perMove: 1,
        pagination: false,
      },

      505: {
        arrows: false,
      },
    },
  }).mount();

  new Splide(".splide-testimonials", {
    type: "loop", // Slide simples
    perPage: 1, // Mostra 3 slides por vez
    perMove: 1, // Move 1 slide por vez

    pagination: false, // Desativa a paginação
    arrows: true, // Habilita as setas de navegação
    drag: true, // Desativa o arrasto livre
    classes: {
      prev: "splide__arrow--prev splide__testimonials__arrow",
      next: "splide__arrow--next splide__testimonials__arrow",
    },
    breakpoints: {
      1024: {
        perPage: 1, // Ajuste para tablets
      },
      768: {
        perPage: 1, // Ajuste para mobile
      },
      625: {
        arrows: false,
      },
      645: {
        gap: 20,
      },
    },
  }).mount();
});
