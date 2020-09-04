{
  /* 
  ===================
  BARRICADES CATEGORY 
  ===================
  */
  // slider principal
  "--sc-slide__category-barricades": component => {
    component.$slide('#sc-slide__category-barricades', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__category-barricades-next',
        prevEl: '.sc-slide__category-barricades-prev',
      }
    });
  },
  // Slider do Free Shipping
  "--sc-slide__products-barricades-01": component => {
    component.$slide('#sc-slide__products-barricades-01', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__products-barricades-01-next',
        prevEl: '.sc-slide__products-barricades-01-prev',
      }
    });
  },
  // Slider do Hot Deals
  "--sc-slide__products-barricades-02": component => {
    component.$slide('#sc-slide__products-barricades-02', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__products-barricades-02-next',
        prevEl: '.sc-slide__products-barricades-02-prev',
      }
    });
  },
  /* BARRICADES CAROUSEL 1 - PRODUCTS */
  "--sc-slide__barricades-products-01": component => {
    component.$slide('#sc-slide__barricades-products-01', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
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
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
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
  // Slider principal
  "--sc-slide__category-custom-signs": component => {
    component.$slide('#sc-slide__category-custom-signs', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__category-custom-signs-next',
        prevEl: '.sc-slide__category-custom-signs-prev',
      }
    });
  },
  // Best sellers
  "--sc-slide__products-custom-signs-01": component => {
    component.$slide('#sc-slide__products-custom-signs-01', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__products-custom-signs-01-next',
        prevEl: '.sc-slide__products-custom-signs-01-prev',
      }
    });
  },
  // Hot deals
  "--sc-slide__products-custom-signs-02": component => {
    component.$slide('#sc-slide__products-custom-signs-02', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__products-custom-signs-02-next',
        prevEl: '.sc-slide__products-custom-signs-02-prev',
      }
    });
  },
  // Free Shipping
  "--sc-slide__products-custom-signs-03": component => {
    component.$slide('#sc-slide__products-custom-signs-03', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__products-custom-signs-03-next',
        prevEl: '.sc-slide__products-custom-signs-03-prev',
      }
    });
  },
  /* 
  ===================
  FENCE SOLUTIONS CATEGORY 
  ===================
  */
  // Slider principal
  "--sc-slide__category-fence-solutions": component => {
    component.$slide('#sc-slide__category-fence-solutions', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__category-fence-solutions-next',
        prevEl: '.sc-slide__category-fence-solutions-prev',
      }
    });
  },
  // Hot Deals
  "--sc-slide__products-fence-solutions-01": component => {
    component.$slide('#sc-slide__products-fence-solutions-01', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__products-fence-solutions-01-next',
        prevEl: '.sc-slide__products-fence-solutions-01-prev',
      }
    });
  },
  // Custom Printed
  "--sc-slide__products-fence-solutions-02": component => {
    component.$slide('#sc-slide__products-fence-solutions-02', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__products-fence-solutions-02-next',
        prevEl: '.sc-slide__products-fence-solutions-02-prev',
      }
    });
  },
  // Popular accessories
  "--sc-slide__products-fence-solutions-03": component => {
    component.$slide('#sc-slide__products-fence-solutions-03', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__products-fence-solutions-03-next',
        prevEl: '.sc-slide__products-fence-solutions-03-prev',
      }
    });
  },
  // New Aged Products
  "--sc-slide__products-fence-solutions-04": component => {
    component.$slide('#sc-slide__products-fence-solutions-04', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__products-fence-solutions-04-next',
        prevEl: '.sc-slide__products-fence-solutions-04-prev',
      }
    });
  },

  /* 
  ===================
  STANCHIONS CATEGORY 
  ===================
  */
  // Slider principal
  "--sc-slide__category-stanchions": component => {
    component.$slide('#sc-slide__category-stanchions', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__category-stanchions-next',
        prevEl: '.sc-slide__category-stanchions-prev',
      }
    });
  },
  // popular accessories
  "--sc-slide__category-stanchions-01": component => {
    component.$slide('#sc-slide__category-stanchions-01', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__category-stanchions-01-next',
        prevEl: '.sc-slide__category-stanchions-01-prev',
      }
    });
  },
  // custom belts
  "--sc-slide__category-stanchions-02": component => {
    component.$slide('#sc-slide__category-stanchions-02', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__category-stanchions-02-next',
        prevEl: '.sc-slide__category-stanchions-02-prev',
      }
    });
  },
  // rope styles
  "--sc-slide__category-stanchions-03": component => {
    component.$slide('#sc-slide__category-stanchions-03', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__category-stanchions-03-next',
        prevEl: '.sc-slide__category-stanchions-03-prev',
      }
    });
  },
  // elegance line
  "--sc-slide__category-stanchions-04": component => {
    component.$slide('#sc-slide__category-stanchions-04', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__category-stanchions-04-next',
        prevEl: '.sc-slide__category-stanchions-04-prev',
      }
    });
  },
  /* 
  ===================
  TRAFFIC SAFETY CATEGORY 
  ===================
  */
  // Slider principal
  "--sc-slide__category-traffic-safety": component => {
    component.$slide('#sc-slide__category-traffic-safety', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__category-traffic-safety-next',
        prevEl: '.sc-slide__category-traffic-safety-prev',
      }
    });
  },
  // barricades
  "--sc-slide__category-traffic-saffety-01": component => {
    component.$slide('#sc-slide__category-traffic-saffety-01', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__category-traffic-saffety-01-next',
        prevEl: '.sc-slide__category-traffic-saffety-01-prev',
      }
    });
  },
  // popular accessories
  "--sc-slide__category-traffic-saffety-02": component => {
    component.$slide('#sc-slide__category-traffic-saffety-02', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__category-traffic-saffety-02-next',
        prevEl: '.sc-slide__category-traffic-saffety-02-prev',
      }
    });
  },
  // highway safety
  "--sc-slide__category-traffic-saffety-03": component => {
    component.$slide('#sc-slide__category-traffic-saffety-03', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__category-traffic-saffety-03-next',
        prevEl: '.sc-slide__category-traffic-saffety-03-prev',
      }
    });
  },
  // safety screens
  "--sc-slide__category-traffic-saffety-04": component => {
    component.$slide('#sc-slide__category-traffic-saffety-04', {
      slidesPerView: window.innerWidth <= 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth <= 1024 ? 0 : 30,
      navigation: {
        nextEl: '.sc-slide__category-traffic-saffety-04-next',
        prevEl: '.sc-slide__category-traffic-saffety-04-prev',
      }
    });
  },
  
}