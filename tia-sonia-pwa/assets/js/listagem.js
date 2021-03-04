document.addEventListener('DOMContentLoaded', () => {

    // Categorias
    const categoriasSlider = new Swiper('.categorias-slider', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.categorias-slider-wrap .navigation-control-next',
            prevEl: '.categorias-slider-wrap .navigation-control-prev',
        },
        breakpoints: {
            440: {
                slidesPerView: 2,
            },
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

});