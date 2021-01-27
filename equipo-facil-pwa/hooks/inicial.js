{
  "--home-slide-inicial": component => {
    component.$slide('#home-slide', {
      slidesPerView: 1,
      centeredSlides: true,
      grabCursor: true,
      pagination: {
        el: '#home-slide-pagination',
        clickable: true,
      }
    });
  },
  "--home-categorias-slide": component => {
    component.$slide('#home-categorias-slide', {
      slidesPerView: window.innerWidth < 1024 ? 'auto' : '3',
      // spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      // spaceBetween: window.innerWidth < 768 ? 0 : 20,
      spaceBetween: 20,
      grabCursor: true
      }
    );
  },
  "--produtos-mais-buscados-slide": component => {
    component.$slide('#produtos-mais-buscados-slide', {
      slidesPerView: 'auto',
      spaceBetween: 20
      }
    );
  },
  "--super-destaques-slide": component => {
    component.$slide('#super-destaques-slide', {
      slidesPerView: window.innerWidth < 1024 ? 'auto' : '3',
      // spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      // spaceBetween: window.innerWidth < 768 ? 0 : 20,
      spaceBetween: 20,
      grabCursor: true,
      navigation: {
        nextEl: '#super-destaques-slide-next',
        prevEl: '#super-destaques-slide-prev'
      }
    });
  },
  "--home-marcas-slide": component => {
    component.$slide('#home-marcas-slide', {
      slidesPerView: window.innerWidth < 1024 ? 'auto' : '6',
      // spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      spaceBetween: 20,
      grabCursor: true,
      // loop: true,
      // loopedSlides: 4,
      navigation: {
        nextEl: '#home-marcas-slide-next',
        prevEl: '#home-marcas-slide-prev'
      }
    });
  },
  "--home-depoimentos-slide": component => {
    component.$slide('#home-depoimentos-slide', {
      slidesPerView: 1,
      spaceBetween: 0,
      grabCursor: true,
      navigation: {
        nextEl: '#home-depoimentos-slide-next',
        prevEl: '#home-depoimentos-slide-prev'
      },
      pagination:{
        el: '#home-depoimentos-pagination',
        clickable: true,
      }
    });
  },
  "--prepara-modal-busca": component => {
    var button = document.getElementsByClassName('pwa-search-adv')[0];
    var modal = document.getElementsByClassName('pwa-modal-advanced-search-wrapper')[0];
    var fecharModal = document.getElementById('modal-search-button');

    button.addEventListener("click", function(){
      modal.classList.add("ativo");
    })

    fecharModal.addEventListener("click", function(){
      modal.classList.remove("ativo");
    })
  },
  "--busca-categoria-slide": component =>{
    component.$slide('#card-group-marca-modal-search-header', {
      slidesPerView: 'auto',
      spaceBetween: 20
    });
  }
}