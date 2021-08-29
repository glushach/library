import $ from '../core';

$.prototype.modal = function() {
    let paddingOffsetNow = window.innerWidth - document.body.offsetWidth + 'px'; //ширина скролла в пикселях
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = paddingOffsetNow; //замена скролла при открытии окна
        });
    }

    const closeElements = document.querySelectorAll("[data-close]");
    closeElements.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(500);
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }, 500);
            
        });
    });

    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }, 500);
        }
    });
};

$('[data-toggle="modal"]').modal();