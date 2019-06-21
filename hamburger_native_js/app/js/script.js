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
        disable_scroll();
        menu.classList.remove('burger-menu_active');
    } else {
        enable_scroll();
        menu.classList.add('burger-menu_active');
    }
};


function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    disable_scroll_mobile();
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    enable_scroll_mobile();
}

// My improvement

// MOBILE
function disable_scroll_mobile() {
    document.addEventListener('touchmove', preventDefault, false);
}

function enable_scroll_mobile() {
    document.removeEventListener('touchmove', preventDefault, false);
}