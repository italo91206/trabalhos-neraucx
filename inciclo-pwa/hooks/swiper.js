{
    "--swiper-banner-home": component => {
        component.$slide('#pwat-swiper-banner', {
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            navigation: {
                nextEl: '#pwat-swiper-banner-home-next',
                prevEl: '#pwat-swiper-banner-home-prev'
            },
            pagination: {
                el: '#pwat-swiper-banner-home-pagination',
                clickable: true,
            }
        });
    },
}