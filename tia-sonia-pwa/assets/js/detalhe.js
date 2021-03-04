document.addEventListener('DOMContentLoaded', () => {

    // Produtos
    const produtoThumbsSlider = new Swiper('.produto-thumbs-slider', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.produto-thumbs-slider-wrap .navigation-control-next',
            prevEl: '.produto-thumbs-slider-wrap .navigation-control-prev',
        },
        breakpoints: {
            400: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 3,
            },
        }
    });

    const produtoSlider = new Swiper('.produto-slider', {
        speed: 400,
        slidesPerView: 1,
        thumbs: {
            swiper: produtoThumbsSlider
        }
    });

    // Input
    const inputNumber = document.querySelector('.form-control-number');
    const inputIncrement = document.querySelector('.input-increment');
    const inputDecrement = document.querySelector('.input-decrement');

    inputIncrement.addEventListener('click', () => inputNumber.stepUp());
    inputDecrement.addEventListener('click', () => inputNumber.stepDown());

    // Produtos relacionados
    const produtosRelacionadosSlider = new Swiper('.produtos-relacionados', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.produtos-relacionados-wrap .navigation-control-next',
            prevEl: '.produtos-relacionados-wrap .navigation-control-prev',
        },
        pagination: {
            el: '.produtos-relacionados-wrap .pagination',
            clickable: true,
            bulletClass: 'pagination-control',
            bulletActiveClass: 'pagination-control-active',
            renderBullet: function (index, className) {
                return `<a href="javascript:;" class="${className}"></a>`;
            },
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 3,
            },
        }
    });


});