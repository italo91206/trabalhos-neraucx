{
  /* 
  ===================
  BARRICADES CATEGORY 
  ===================
  */
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
  },
  /* 
  ===================
  CUSTOM SIGNS CATEGORY 
  ===================
  */
  "--sc-slide__category-custom-signs": component => {
    component.$slide('#sc-slide__category-custom-signs', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__category-custom-signs-next',
        prevEl: '.sc-slide__category-custom-signs-prev',
      }
    });
  },
  // THE 4 BANNERS FROM CUSTOM SIGNS CATEGORY
  "--sc-slide__banners-custom-signs": component => {
    component.$slide('#sc-slide__banners-custom-signs', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__banners-custom-signs-next',
        prevEl: '.sc-slide__banners-custom-signs-prev',
      }
    });
  },
  /* 
  ===================
  FENCE SOLUTIONS CATEGORY 
  ===================
  */
  "--sc-slide__category-fence-solutions": component => {
    component.$slide('#sc-slide__category-fence-solutions', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__category-fence-solutions-next',
        prevEl: '.sc-slide__category-fence-solutions-prev',
      }
    });
  },
  // products slider
  "--sc-slide__products-fence-solutions-02": component => {
    component.$slide('#sc-slide__products-fence-solutions-02', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__products-fence-solutions-02-next',
        prevEl: '.sc-slide__products-fence-solutions-02-prev',
      }
    });
  },
  "--sc-slide__fence-solutions-products-03": component => {
    component.$slide('#sc-slide__fence-solutions-products-03', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__fence-solutions-products-03-next',
        prevEl: '.sc-slide__fence-solutions-products-03-prev',
      }
    });
  },
  "--sc-slide__banners-fence-solutions": component => {
    component.$slide('#sc-slide__banners-fence-solutions', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__banners-fence-solutions-next',
        prevEl: '.sc-slide__banners-fence-solutions-prev',
      }
    });
  }


  
}