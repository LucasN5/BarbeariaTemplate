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
      1024: {
        perPage: 2, // Ajuste para tablets
      },
      768: {
        perPage: 1, // Ajuste para mobile
      },
    },
  }).mount();

  new Splide(".splide-testimonials", {
    type: "loop", // Slide simples
    perPage: 2, // Mostra 3 slides por vez
    perMove: 1, // Move 1 slide por vez

    pagination: false, // Desativa a paginação
    arrows: true, // Habilita as setas de navegação
    drag: true, // Desativa o arrasto livre
    direction: "ltr", // Permite navegação apenas da esquerda para a direita

    breakpoints: {
      1024: {
        perPage: 2, // Ajuste para tablets
      },
      768: {
        perPage: 1, // Ajuste para mobile
      },
    },
  }).mount();
});
