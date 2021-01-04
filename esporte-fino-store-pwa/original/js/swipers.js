//SWIPER SUBMENU
var swiperSubmenu = new Swiper('.swiper-container.efs-esporte-images',{
    slidesPerView: 4,
    spaceBetween: 47,
    slidesPerGroup: 1,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 8,
            spaceBetween: 16,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 10,
            spaceBetween: 47,
            centeredSlides: false,

        },
    }
})

// SWIPER BANNER
var swiperBanner = new Swiper('.swiper-container.efs-swiper-banner', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    centeredSlides: true,
    pagination: {
        el: 'swiper-pagination-products',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// SWIPER PRODUCTS

var swiperProducts = new Swiper('.swiper-container.efs-swiper-products', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination-products',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        440: {
            slidesPerView: 2,
            spaceBetween:40,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16,
            centeredSlides: false,

        },
        1200: {
            slidesPerView:4,
            spaceBetween: 30,
            centeredSlides: false,
        },
    }
});

// SWIPER COMPRE JUNTO
var swiperCompreJunto = new Swiper('.swiper-container.efs-swiper-compre-junto', {
    slidesPerView: 3,
    spaceBetween: 16,
    slidesPerGroup: 3,
    centeredSlides: false,
    pagination: {
        el: '.swiper-pagination-compre-junto',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        440: {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 3,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 4,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
            centeredSlides: false,

        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
            centeredSlides: false,
        },
    }
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 25,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    thumbs: {
    swiper: galleryThumbs
    }
});

var swiperProducts = new Swiper('.swiper-container.efs-swiper-detalhes-mobile', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination-detalhes-mobile',
        clickable: true,
    },
    breakpoints:{
        440: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16,
            centeredSlides: false,

        },
        1200: {
            slidesPerView:4,
            spaceBetween: 30,
            centeredSlides: false,
        },
    }
});