{
  "cart-on-toggle": component => {
    const cart = document.getElementById("lf-cart");
    const darken = document.getElementById("lf-cart__darken");

    if (cart) {
      if (cart.classList.contains("lf-cart--open")) {
        darken.style.display = "none";
        document.body.classList.remove('lf-locked');
      } else {
        darken.style.display = "block";
        document.body.classList.add('lf-locked');
      }

      cart.classList.toggle("lf-cart--open");
    }
  },

  "on-page-home": component => {
    component.$slide('.slider-fullwidth', {
      autoplay: {
        delay: 4000,
      },
      loop: true,
      pagination: {
        el: '.slider-pagination',
        clickable: true
      },
    });

    component.$slide('.slider-grid-gallery-photos', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },

  "on-page-*": component => {
    component.$slide('.slider-products', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        720: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        420: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      }
    });

    component.$slide('.slider-products-look', {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.slider-product-pagination',
        clickable: true,
      },
      breakpoints: {
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      }
    });

    component.$slide('.slider-images-block-product-details', {
      // loop: false,
      navigation: {
        nextEl: '.next-slider-images-block-product-details',
        prevEl: '.prev-slider-images-block-product-details',
      },
    });

    const lightbox = GLightbox({
      selector: '.glightbox',
      width: '80vw',
      height: 'auto',
      videosWidth: '80vw'
    });
  },

  "on-page-product": component => {
    component.$slide('#nb-product-gallery', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      navigation: {
        nextEl: '.next-slider-images-block-product-details',
        prevEl: '.prev-slider-images-block-product-details'
      }
  });

  }
}