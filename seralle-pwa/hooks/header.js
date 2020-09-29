{
  // Slider do submenu masculino
  "--se-slide-brand-masculino-home": component => {
    component.$slide('#se-slide-brand-masculino-home', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      loop: true, 
      loopedSlides: 4, 
      navigation: {
        nextEl: '.se-slide-brand-masculino-next',
        prevEl: '.se-slide-brand-masculino-prev',
      }
    });
  }
}