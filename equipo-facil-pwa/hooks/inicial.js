{
  "--home-slide-inicial": component => {
    component.$slide('#home-slide', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      loop: true,
      loopedSlides: 4,
      pagination: {
        el: '#home-slide-pagination',
        clickable: true,
      }
    });
  },
  "--home-categorias-slide": component => {
    component.$slide('#home-categorias-slide', {
      slidesPerView: window.innerWidth < 1024 ? 1 : '3',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true
      }
    );
  }
}