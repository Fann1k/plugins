(function () {
    var html = document.querySelector('html'),
        menu = document.querySelector('.burger-menu'),
        button = document.querySelector('.burger-menu__button'),
        links = document.querySelectorAll('.burger-menu__link'),
        overlay = document.querySelector('.burger-menu__overlay');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu();
    });
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            toggleMenu();
        });
    }
    overlay.addEventListener('click', function () {
        toggleMenu();
    });

    var toggleMenu = function toggleMenu() {
        if (menu.classList.contains('burger-menu_active')) {
            menu.classList.remove('burger-menu_active');
            overlay.style.backgroundColor = 'transparent';
            html.style.overflow = '';
        } else {
            menu.classList.add('burger-menu_active');
            overlay.style.backgroundColor = '#fff';
            html.style.overflow = 'hidden';
        }
    };
}());