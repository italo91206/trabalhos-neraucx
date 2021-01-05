{
    "--toggle-split": component => {
        if (document.querySelector('.se-product-split')) {
            document.querySelector('.se-product-split').classList.toggle('se-product-split--active');
        }
    },
    "--se-slide-produtos2": component => {
        component.$slide('#se-slide-produtos2', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 20,
            grabCursor: true
        });
    },
    "product-list-se-slide-produtos3-loaded": component => {
        component.$slide('#se-slide-produtos3', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 20,
            grabCursor: true
        });
    },
    "--show-and-hide-details-product": (component, el) => {
        console.log('entrou..')
        el.parentElement.parentElement.classList.toggle('se-description--active');
    },
    // "on-page-product": component =>{
    //     var galleryThumbs = new Swiper('#se-product-slider', {
    //         spaceBetween: 10,
    //         slidesPerView: 4,
    //         freeMode: true,
    //         watchSlidesVisibility: true,
    //         watchSlidesProgress: true,
    //         navigation: {
    //             nextEl: '.se-thumbs-product-next',
    //             prevEl: '.se-thumbs-product-prev'
    //         }
    //     });

    //     setTimeout(() => {
    //         var galleryTop = new Swiper('#se-product-image', {
    //             spaceBetween: 10,
    //             // navigation: {
    //             //     nextEl: '.sc-next-carousel-page-product',
    //             //     prevEl: '.sc-prev-carousel-page-product',
    //             // },
    //             thumbs: {
    //                 swiper: galleryThumbs
    //             }
    //         });
    //     }, 500);
    // },
    "--hook-teste": component=>{
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: false,
            direction: 'vertical',
            navigation: {
                nextEl: '.se-gallery-product-next',
                prevEl: '.se-gallery-product-prev'
            }
            // navigation: {
            //     nextEl: '.se-thumbs-product-next',
            //     prevEl: '.se-thumbs-product-prev'
            // }
        });

        setTimeout(() => {
            var galleryTop = new Swiper('.gallery-top', {
                spaceBetween: 10,
                // navigation: {
                //     nextEl: '.sc-next-carousel-page-product',
                //     prevEl: '.sc-prev-carousel-page-product',
                // },
                thumbs: {
                    swiper: galleryThumbs
                },
                navigation: {
                    nextEl: '.se-gallery-product-next',
                    prevEl: '.se-gallery-product-prev'
                }
            });
        }, 500);
    },
    "--prepara-zoom": component =>{
        var slider = $('#se-gallery__slide-wrapper');
        var fotos = slider.children();

        for(var i=0; i < fotos.length; i++)
            $(fotos[i].children[0]).elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 750
            })
    }
}