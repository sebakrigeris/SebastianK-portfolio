const abrirMenu = document.querySelector(".abrir-menu");
const menu = document.querySelector(".menu-links");
const enlaces = document.querySelectorAll('ul a');


// ABRIR NAV

abrirMenu.addEventListener( "click", () => {
    menu.classList.toggle("nav-visible");
});


// LA NAV SE CIERRA CUANDO DOY CLICK EN LOS ENLACES

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
    const nav = document.querySelector('ul');
    nav.classList.remove('nav-visible');
    });
});