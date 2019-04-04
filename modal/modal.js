//модальное окно
    document.querySelectorAll('.modal-show').forEach(function (element) {
        element.onclick = modalShow;
    });

    document.querySelectorAll('.modal-close').forEach(function (element) {
        element.onclick = closeModalWrap;
    });

    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.onclick = closeModalWrap;
    });

    document.querySelector('.modal').onclick = function () {
        event.stopPropagation();
    }


    function modalShow() {
        let modalId = this.dataset.modal;
        document.querySelector(modalId).classList.remove('hide');
        document.querySelector(modalId).classList.add('flex');
        document.body.style.overflow = 'hidden';
        document.onkeydown = function (event) {
            if (event.keyCode == 27) {
                closeModalWrap();
            }
        }
    }

    function closeModalWrap() {
        document.querySelectorAll('.modal-wrap').forEach(function (element) {
            element.classList.add('hide');
            element.classList.remove('flex');
            document.body.style.overflow = '';
        });
        document.onkeydown = null;
    }
