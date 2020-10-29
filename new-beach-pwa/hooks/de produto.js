{
  "--new-beach-product-page-slider": component => {
    component.$slide('#new-beach-product-page-slider', {
      slidesPerView: window.innerWidth < 1024 ? 1 : '4',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      pagination: {
        el: '#new-beach-product-page-navigation',
        clickable: true,
      }
    });
  },
  "--product-page-voce-vai-amar-slide": component => {
    component.$slide('#product-page-voce-vai-amar-slide', {
      slidesPerView: window.innerWidth < 1024 ? 1 : '4',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      pagination: {
        el: '.product-page-voce-vai-amar-navigation',
        clickable: true,
      }
    });
  },
  "--slider-description-product": component => {
    component.$slide('.slider-description-product', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      pagination: {
        el: '.slider-description-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-description-button-next',
        prevEl: '.slider-description-button-prev',
      }
    });
  }
}
  