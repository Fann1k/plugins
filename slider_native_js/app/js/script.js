let slides = document.querySelectorAll('.slide-single'),
    slide = document.querySelector('#slide'),
    slider = [],
    stepSlider = 0,
    offsetSlider = 0;

for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
}

function draw() {
    let img = document.createElement('img');
    img.src = slider[stepSlider];
    img.classList.add('slide-single');
    img.style.left = offsetSlider * 100 + '%';
    document.querySelector('#slide').appendChild(img);
    stepSlider++;
    if (stepSlider + 1 == slider.length) {
        stepSlider = 0;
    } else {
        stepSlider++;
    }
    offsetSlider = 1;
}

function left() {
    let slides2 = document.querySelectorAll('.slide-single'),
        offsetSlider2 = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offsetSlider2 * 100 - 100 + '%';
        offsetSlider2++;
    }
    slide.addEventListener("transitionend", function () {
        slides2[0].remove();
    });
}



draw();
draw();
document.onclick = left;