let images = document.querySelectorAll('.slide'),
    current = 0,
    btnLeft = document.querySelector('.btn-slider-left'),
    btnRight = document.querySelector('.btn-slider-right');

function slider() {
    images.forEach(element => {
        element.classList.add('opacity0');
    });
    images[current].classList.remove('opacity0');
}

slider();

btnLeft.onclick = function () {
    if (current - 1 == -1) {
        current = images.length - 1;
    } else {
        current--;
    }
    slider();
};

btnRight.onclick = function () {
    if (current + 1 == images.length) {
        current = 0;
    } else {
        current++;
        slider();
    }
};