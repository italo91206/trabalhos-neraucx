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
  },
  "--super-destaques-slide": component => {
    component.$slide('#super-destaques-slide', {
      slidesPerView: window.innerWidth < 1024 ? 1 : '3',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      navigation: {
        nextEl: '#super-destaques-slide-next',
        prevEl: '#super-destaques-slide-prev'
      }
    });
  },
  "--home-marcas-slide": component => {
    component.$slide('#home-marcas-slide', {
      slidesPerView: window.innerWidth < 1024 ? 1 : '6',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      loop: true,
      loopedSlides: 4,
      navigation: {
        nextEl: '#home-marcas-slide-next',
        prevEl: '#home-marcas-slide-prev'
      }
    });
  },
  "--home-depoimentos-slide": component => {
    component.$slide('#home-depoimentos-slide', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      loop: true,
      loopedSlides: 4,
      navigation: {
        nextEl: '#home-depoimentos-slide-next',
        prevEl: '#home-depoimentos-slide-prev'
      },
      pagination:{
        el: '#home-depoimentos-pagination',
        clickable: true,
      }
    });
  }
}