let body = document.querySelector('body'),
    menu = document.querySelector('.burger-menu'),
    button = document.querySelector('.burger-menu__button'),
    links = document.querySelectorAll('.burger-menu__link'),
    overlay = document.querySelector('.burger-menu__overlay');

button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
});

links.forEach(element => {
    element.addEventListener('click', () => {
        toggleMenu();
    });
});

overlay.addEventListener('click', () => {
    toggleMenu();
});

let toggleMenu = () => {
    if (menu.classList.contains('burger-menu_active')) {
        menu.classList.remove('burger-menu_active');
        body.style.overflow = '';
    } else {
        menu.classList.add('burger-menu_active');
        body.style.overflow = 'hidden';
    }
};