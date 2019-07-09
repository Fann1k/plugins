(function () {
    var images = document.querySelectorAll('.slide'),
        current = 0,
        btnLeft = document.querySelector('.btn-slider-left'),
        btnRight = document.querySelector('.btn-slider-right'),
        sliderDots = document.querySelectorAll('.slider__dots .dot');

    function slider() {
        for (i = 0; i < images.length; i++) {
            images[i].classList.add('opacity0');
        }
        for (i = 0; i < sliderDots.length; i++) {
            sliderDots[i].classList.remove('dot-active');
        }
        images[current].classList.remove('opacity0');
        sliderDots[current].classList.add('dot-active');
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
        }

        slider();
    }

    images.forEach(function (element) {
        var start = null,
            end = null;
        element.addEventListener('touchstart', function (event) {
            start = event.touches[0].clientX;
        });
        element.addEventListener('touchmove', function (event) {
            end = event.touches[0].clientX;
        });
        element.addEventListener('touchend', function () {
            if (start < end) {
                moveLeft();
            } else {
                moveRight();
            }
        });
        sliderDots.forEach(function (element, index) {
            element.onclick = function () {
                for (i = 0; i < sliderDots.length; i++) {
                    sliderDots[i].classList.remove('dot-active');
                }

                this.classList.add('dot-active');

                for (i = 0; i < images.length; i++) {
                    images[i].classList.add('opacity0');
                }
                images[index].classList.remove('opacity0');
            };
        });
    });
}());