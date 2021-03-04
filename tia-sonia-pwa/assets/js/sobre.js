document.addEventListener('DOMContentLoaded', () => {

    // História
    const historiaSlider = new Swiper('.sobre-historia-slider', {
        speed: 400,
        slidesPerView: 1,
        navigation: {
            nextEl: '.sobre-historia-slider .pagination-arrow-next',
            prevEl: '.sobre-historia-slider .pagination-arrow-prev',
        },
        pagination: {
            el: '.sobre-historia-slider .pagination',
            clickable: true,
            bulletClass: 'pagination-control',
            bulletActiveClass: 'pagination-control-active',
            renderBullet: function (index, className) {
                return `<a href="javascript:;" class="${className}"></a>`;
            },
        },
    });

    // Projetos
    const projetosSlider = new Swiper('.sobre-projetos-slider', {
        speed: 400,
        slidesPerView: 1,
        navigation: {
            nextEl: '.sobre-projetos-slider .navigation-control-next',
            prevEl: '.sobre-projetos-slider .navigation-control-prev',
        },
        pagination: {
            el: '.sobre-projetos-slider .pagination',
            clickable: true,
            bulletClass: 'pagination-control',
            bulletActiveClass: 'pagination-control-active',
            renderBullet: function (index, className) {
                return `<a href="javascript:;" class="${className}"></a>`;
            },
        },
    });

});