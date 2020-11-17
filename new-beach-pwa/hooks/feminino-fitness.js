{
    "--nb-feminino-fitness-slider": component => {
      component.$slide('#nb-feminino-fitness-slider', {
        slidesPerView: window.innerWidth < 1024 ? 1 : '4',
        spaceBetween: window.innerWidth < 1024 ? 0 : 20,
        pagination: {
          el: '#nb-feminino-fitness-navigation',
          clickable: true,
        }
      });
    }
  }
  