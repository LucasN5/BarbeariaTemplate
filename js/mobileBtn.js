const menuToggle = document.getElementById("menuToggle");
const menuItems = document.getElementById("menuItems");
let menuOpen = false;

menuToggle.addEventListener("click", function () {
  menuOpen = !menuOpen;

  // Alternar visibilidade e animação
  menuItems.classList.toggle("hidden", false);
  menuItems.classList.toggle("opacity-0", !menuOpen);
  menuItems.classList.toggle("scale-y-0", !menuOpen);
  menuItems.classList.toggle("opacity-100", menuOpen);
  menuItems.classList.toggle("scale-y-100", menuOpen);

  // Alternar entre ícone de hambúrguer e "X" com rotação
  menuToggle.innerHTML = menuOpen ? "&#10005;" : "&#9776;";
  menuToggle.classList.toggle("rotate-60", menuOpen); // Rotaciona o ícone
});
