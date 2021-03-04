document.addEventListener('DOMContentLoaded', () => {

    // Categorias
    const categoriasSlider = new Swiper('.categorias-slider', {
        speed: 400,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.categorias-slider-wrap .navigation-control-next',
            prevEl: '.categorias-slider-wrap .navigation-control-prev',
        },
        breakpoints: {
            600: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 4,
            },
            1100: {
                slidesPerView: 5,
            },
            1280: {
                slidesPerView: 6,
            },
        }
    });

    // Novidades
    const novidadesSlider = new Swiper('.novidades-slider', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.novidades-slider-wrap .navigation-control-next',
            prevEl: '.novidades-slider-wrap .navigation-control-prev',
        },
        pagination: {
            el: '.novidades-slider-wrap .pagination',
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