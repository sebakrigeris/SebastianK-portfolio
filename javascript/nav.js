const abrirMenu = document.querySelector(".abrir-menu");
const menu = document.querySelector(".menu-links");


abrirMenu.addEventListener( "click", () => {
    menu.classList.toggle("nav-visible");
});