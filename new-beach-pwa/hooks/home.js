{
  "--new-beach-home-products-slider": component => {
    component.$slide('#new-beach-home-products-slider', {
      slidesPerView: window.innerWidth < 1024 ? 1 : '4',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      pagination: {
        el: '#new-beach-home-products-navigation',
        clickable: true,
      }
    });
  }
}
