document.addEventListener('DOMContentLoaded', () => {

    // Sobre
    const sobreSlider = new Swiper('.home-sobre-social', {
        speed: 400,
        slidesPerView: 1,
        pagination: {
            el: '.home-sobre .pagination',
            clickable: true,
            bulletClass: 'pagination-control',
            bulletActiveClass: 'pagination-control-active',
            renderBullet: function (index, className) {
                return `<a href="javascript:;" class="${className}"></a>`;
            },
        },
        breakpoints: {
            800: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 3,
            },
        }
    });


    // Apoio
    const apoioSlider = new Swiper('.apoio-slider', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.apoio-slider-wrap .navigation-control-next',
            prevEl: '.apoio-slider-wrap .navigation-control-prev',
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
            },
        }
    });


    // Posts
    const postsSlider = new Swiper('.posts-slider', {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.posts-slider-wrap .navigation-control-next',
            prevEl: '.posts-slider-wrap .navigation-control-prev',
        },
        pagination: {
            el: '.posts-slider-wrap .pagination',
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
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 2.5,
            },
            1600: {
                slidesPerView: 3.2,
            }
        }
    });


    // Instagram
    const user = 'tiasoniaoficial';
    const totalImages = 10;

    fetch(`https://www.instagram.com/tiasoniaoficial/channel/?__a=1`)
        .then(res => res.json())
        .then(response => {
            
            let items = response.graphql.user.edge_owner_to_timeline_media.edges;

            items.forEach(function (item, n) {
                if ((n + 1) <= totalImages) {

                    let li = `
                        <li class="swiper-slide">
                            <a href="https://www.instagram.com/p/${item.node.shortcode}" target="_blank">
                                <img src="${item.node.thumbnail_src}">
                            </a>
                        </li>
                    `;
                    
                    document.querySelector('#instagram-feed').innerHTML += li;

                    const feedSlider = new Swiper('.feed-slider', {
                        speed: 400,
                        slidesPerView: 1.5,
                        centeredSlides: true,
                        loop: true,
                        spaceBetween: 30,
                        navigation: {
                            nextEl: '.feed-slider-wrap .navigation-control-next',
                            prevEl: '.feed-slider-wrap .navigation-control-prev',
                        },
                        pagination: {
                            el: '.feed-slider-wrap .pagination',
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
                                centeredSlides: false,
                                loop: false,
                            },
                            800: {
                                slidesPerView: 3,
                                centeredSlides: false,
                                loop: false,
                            },
                            1100: {
                                slidesPerView: 2,
                                centeredSlides: false,
                                loop: false,
                            },
                            1280: {
                                slidesPerView: 2.5,
                                centeredSlides: false,
                                loop: false,
                            },
                            1600: {
                                slidesPerView: 3.2,
                                centeredSlides: false,
                                loop: false,
                            }
                        }
                    });
                }
            });
        })
        .catch(error => console.error('Error:', error));

});