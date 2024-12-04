const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.header-nav');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
