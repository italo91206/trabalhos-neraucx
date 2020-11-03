{
  "--new-beach-uv50-plus-slider": component => {
    component.$slide('#new-beach-uv50-plus-slider', {
      slidesPerView: window.innerWidth < 1024 ? 1 : '2',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      pagination: {
        el: '#new-beach-uv50-plus-navigation',
        clickable: true,
      },
      navigation: {
        nextEl: '.new-beach-uv50-plus-next',
        prevEl: '.new-beach-uv50-plus-prev',
      }
    });
  },
  "--new-beach-lycra-black-slider": component => {
    component.$slide('#new-beach-lycra-black-slider', {
      slidesPerView: window.innerWidth < 1024 ? 1 : '2',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      pagination: {
        el: '#new-beach-lycra-black-navigation',
        clickable: true,
      },
      navigation: {
        nextEl: '.new-beach-lycra-black-next',
        prevEl: '.new-beach-lycra-black-prev',
      }
    });
  },
  "--new-beach-uv50-plus-copy-slider": component => {
    component.$slide('#new-beach-uv50-plus-copy-slider', {
      slidesPerView: window.innerWidth < 1024 ? 1 : '2',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      pagination: {
        el: '#new-beach-uv50-plus-copy-navigation',
        clickable: true,
      },
      navigation: {
        nextEl: '.new-beach-uv50-plus-copy-next',
        prevEl: '.new-beach-uv50-plus-copy-prev',
      }
    });
  },
  "--new-beach-lycra-black-copy-slider": component => {
    component.$slide('#new-beach-lycra-black-copy-slider', {
      slidesPerView: window.innerWidth < 1024 ? 1 : '2',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      pagination: {
        el: '#new-beach-lycra-black-copy-navigation',
        clickable: true,
      },
      navigation: {
        nextEl: '.new-beach-lycra-black-copy-next',
        prevEl: '.new-beach-lycra-black-copy-prev',
      }
    });
  },
}