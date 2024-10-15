document.querySelectorAll("details").forEach((detail) => {
  const content = detail.querySelector("ul");

  // Defina o max-height como 0 quando a página carrega
  content.style.maxHeight = "0";
  content.style.overflow = "hidden";
  content.style.transition = "max-height 0.3s ease-in-out";

  detail.addEventListener("toggle", (event) => {
    if (detail.open) {
      // Define o max-height como a altura do conteúdo quando o details é aberto
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      // Quando o details é fechado, vamos esperar o final da transição
      content.style.maxHeight = content.scrollHeight + "px"; // Manter a altura para o início da transição
      setTimeout(() => {
        content.style.maxHeight = "0"; // Reseta o max-height após a transição
      }, 10); // Pequeno atraso para garantir que a transição aconteça
    }
  });

  // Garante que o max-height inicial seja 0 (para começar escondido)
  content.style.maxHeight = "0";
});
