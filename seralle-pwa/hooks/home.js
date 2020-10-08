{
    "--se-slidebanner-home": component => {
        component.$slide('#se-slidebanner-home', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 20,
            grabCursor: true,
            loop: true,
            loopedSlides: 4,
            navigation: {
                nextEl: '.se-slidebanner-next',
                prevEl: '.se-slidebanner-prev'
            }
        });
    },
    "--se-slide1-home": component => {
        component.$slide('#se-slide1-home', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 20,
            grabCursor: true,
            navigation: {
                nextEl: '.se-slide1-next',
                prevEl: '.se-slide1-prev'
            }
        });
    },
    "--se-slide2-home": component => {
        component.$slide('#se-slide2-home', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 20,
            grabCursor: true,
            navigation: {
                nextEl: '.se-slide2-next',
                prevEl: '.se-slide2-prev'
            }
        });
    },
    "--se-slide3-home": component => {
        component.$slide('#se-slide3-home', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 20,
            grabCursor: true,
            navigation: {
                nextEl: '.se-slide3-next',
                prevEl: '.se-slide3-prev'
            }
        });
    }
}