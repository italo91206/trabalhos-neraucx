window.PWA.toggle = {
  //   product_modal(event) {
  //     event.stopPropagation();
  //   },
  cart(event) {
    var cart = document.getElementById('se-cart');
    if (cart) {
      if (event === undefined || event === null) {
        console.log('Não retornou nada');

        return;
      }
      //   if (event.target.classList.contains('cart--add') && cart.classList.contains('cart--open')) {
      //     return;
      //   }
      cart.classList.toggle('se-aparece');
      console.log('Qualquer coisa ae');
      if (window.innerWidth > 1024)
        // document.getElementById('darken-cart').style.display = "block";
        document.body.style.overflow = 'hidden';
    }
    if (!cart.classList.contains('se-aparece')) {
      if (window.innerWidth > 1024)
        // document.getElementById('darken-cart').style.display = "none";
        document.body.style.overflow = 'unset';
    }
    event.stopPropagation();
  }
};

window.PWA.custom = {
  hello: function () {
    console.log('Ola');
  },
  createSlide1Home: function () {
    window.PWA.createSlide('se-slide1-home', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      navigation: {
        nextEl: '.se-slide1-next',
        prevEl: '.se-slide1-prev'
      }
    });
  },
  createSlide2Home: function () {
    window.PWA.createSlide('se-slide2-home', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      navigation: {
        nextEl: '.se-slide2-next',
        prevEl: '.se-slide2-prev'
      }
    });
  },
  createSlide3Home: function () {
    window.PWA.createSlide('se-slide3-home', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      navigation: {
        nextEl: '.se-slide3-next',
        prevEl: '.se-slide3-prev'
      }
    });
  },
  createSlideGrandeHome: function () {
    window.PWA.createSlide('se-slidebanner-home', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      navigation: {
        nextEl: '.se-slidebanner-next',
        prevEl: '.se-slidebanner-prev'
      }
    });
  },
  createSlideMarcas: function () {
    window.PWA.createSlide('se-slide-brand-home', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      navigation: {
        nextEl: '.se-brand-slide-next',
        prevEl: '.se-brand-slide-prev'
      }
    });
  },
  createSlideMarcasFeminino: function () {
    window.PWA.createSlide('se-slide-brand-feminino-home', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      navigation: {
        nextEl: '.se-brand-feminino-slide-next',
        prevEl: '.se-brand-feminino-slide-prev'
      }
    });
  },
  createSlideFinalCategoria: function () {
    window.PWA.createSlide('se-slide-final-categoria-home', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true
    });
  },
  createSlide6: function () {
    window.PWA.createSlide('se-slide-banner6-home', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      navigation: {
        nextEl: '.se-slide6-next',
        prevEl: '.se-slide6-prev'
      },
      pagination: {
        el: '.se-slide6-pagination',
        type: 'bullets',
      }
    });
  },
  createSlide7: function () {
    window.PWA.createSlide('se-slide-produtos2', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true
    });
  },
  createSlide8: function () {
    window.PWA.createSlide('se-slide-produtos3', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true
    });
  },
  createSlideMarcasMasculino: function () {
    window.PWA.createSlide('se-slide-brand-masculino-home', {
      slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
      spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      grabCursor: true,
      navigation: {
        nextEl: '.se-slide-brand-masculino-next',
        prevEl: '.se-slide-brand-masculino-prev'
      }
    });
  },
  ativaFormBusca: function () {
    var elem = document.getElementById('se-busca-home');
    if (elem.classList.contains('ativado'))
      elem.classList.remove('ativado');
    else
      elem.classList.add('ativado');
  },
  ativaMenu: function () {
    var elem = document.getElementById('se-nav');
    if (elem.classList.contains('ativado'))
      elem.classList.remove('ativado');
    else
      elem.classList.add('ativado');
  },
  abreFechaFiltros: function () {
    const elem = document.querySelector("#se-opcoes-filtro");
    if (elem.classList.contains("some")) {
      elem.classList.remove("some");
      document.querySelector("#abre-fecha-handler").classList.remove("fa-bars");
      document.querySelector("#abre-fecha-handler").classList.add("fa-times");
    }
    else {
      elem.classList.add("some");
      document.querySelector("#abre-fecha-handler").classList.remove("fa-times");
      document.querySelector("#abre-fecha-handler").classList.add("fa-bars");
    }

  },
  aperteiNoAcordion: function (elem) {
    console.log(elem);
    // Este método é exclusiva da página /perguntas-frequentes
    elem.classList.toggle("active");
    var panel = elem.nextElementSibling;
    console.log(panel);
    if (panel.style.maxHeight)
      panel.style.maxHeight = null;
    else
      panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

window.PWA.buildStart('home', function () {
  window.PWA.custom.createSlideMarcas();
  window.PWA.custom.createSlide1Home();
  window.PWA.custom.createSlide2Home();
  window.PWA.custom.createSlide3Home();
  window.PWA.custom.createSlideGrandeHome();
  
});

window.PWA.previewStart('home', function () {
  window.PWA.custom.createSlideMarcas();
  window.PWA.custom.createSlide1Home();
  window.PWA.custom.createSlide2Home();
  window.PWA.custom.createSlide3Home();
  window.PWA.custom.createSlideGrandeHome();
  window.PWA.custom.createSlideMarcasMasculino();
  window.PWA.custom.createSlideMarcasFeminino();
  window.PWA.custom.createSlideFinalCategoria();
  window.PWA.custom.createSlide6();
  window.PWA.custom.createSlide7();
  window.PWA.custom.createSlide8();
});

// estão de fora porque assim são geradas fora de qualquer rota possível.
// mas o principal motivo e por nao funcionar no 'any' e por ai.
window.PWA.custom.createSlide6();
window.PWA.custom.createSlide7();
window.PWA.custom.createSlide8();
window.PWA.custom.createSlideFinalCategoria();
window.PWA.custom.createSlideMarcasMasculino();
window.PWA.custom.createSlideMarcasFeminino();