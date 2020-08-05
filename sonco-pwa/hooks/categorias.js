{
    /* BARRICADES CATEGORY */
    "--sc-slide__category-barricades": component => {
        component.$slide('#sc-slide__category-barricades', {
           slidesPerView: 1,
            navigation: {
                nextEl: '.sc-slide__category-barricades-next',
                prevEl: '.sc-slide__category-barricades-prev',
            }
        });
    },
    /* THE 4 BANNERS FROM BARRICADES CATEGORY */
    "--sc-slide__banners-barricades": component => {
        component.$device.$isMobile('#sc-slide__banners-barricades', {
            slidesPerView: 1,
            centeredSlides: true,
            navigation: {
                nextEl: '.sc-slide__banners-barricades-next',
                prevEl: '.sc-slide__banners-barricades-prev',
            },
        });
    },
    /* BARRICADES CAROUSEL 1 - PRODUCTS */
    "--sc-slide__barricades-products-01": component => {
        component.$slide('#sc-slide__barricades-products-01', {
            slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
            navigation: {
                nextEl: '.sc-slide__barricades-products-01-next',
                prevEl: '.sc-slide__barricades-products-01-prev',
            }
        });
    },
    /* BARRICADES CAROUSEL 2 - PRODUCTS */
    "--sc-slide__barricades-products-02": component => {
        component.$slide('#sc-slide__barricades-products-02', {
            slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
            navigation: {
                nextEl: '.sc-slide__barricades-products-02-next',
                prevEl: '.sc-slide__barricades-products-02-prev',
            }
        });
    }
    
}