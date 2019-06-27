let images = document.querySelectorAll('.slide'),
    current = 0,
    btnLeft = document.querySelector('.btn-slider-left'),
    btnRight = document.querySelector('.btn-slider-right');

function slider() {
    images.forEach(element => {
        element.classList.add('opacity0');
        element.ontouchmove = function (event) {
            let x = event.touches[0].clientX,
                y = event.touches[0].clientY;
            if (x--) {
                moveLeft();
            } else {
                moveRight();
            }
        };
    });
    images[current].classList.remove('opacity0');

}

slider();

btnLeft.onclick = moveLeft;
btnRight.onclick = moveRight;

function moveLeft() {
    if (current - 1 == -1) {
        current = images.length - 1;
    } else {
        current--;
    }
    slider();
}

function moveRight() {
    if (current + 1 == images.length) {
        current = 0;
    } else {
        current++;
        slider();
    }
}