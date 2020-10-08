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
        prevEl: '.se-slide-brand-masculino-prev'
      }
    });
  },
  "--ativa-busca-mobile": component =>{
    var botao = document.getElementById('se-busca-mobile');
    var busca = document.getElementById('se-busca-home');

    botao.addEventListener("click", function(){
      if(!busca.classList.contains("ativado"))
        busca.classList.add("ativado");
      else
      busca.classList.remove("ativado");
    });
  },
  "--cart-background": component =>{
    var abrir = document.getElementById('se-cart-open-button');
    var fechar = document.getElementById('se-carrinho-fechar-button');
    var bkg = document.getElementById('se-cart__darken');

    abrir.addEventListener("click", function(){
      bkg.style.display="block";
    })
    fechar.addEventListener("click", function(){
      bkg.style.display="none";
    })
    bkg.addEventListener("click", function(){
        document.getElementById('se-cart').classList.remove('se-aparece')
        bkg.style.display="none";
    })
  },
  "--menu-preparation": (component, element) => {
    var categorias = ['ESPORTE', 'FEMININO', 'MASCULINO', 'MENINA', 'MENINO']
    for( var i = 0; i < categorias.length; i++){
      component.$slide('#se-slide-brand-'+categorias[i], {
        slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
        spaceBetween: window.innerWidth < 1024 ? 0 : 20,
        loop: true,
        loopedSlides: 4,
        navigation: {
          nextEl: '.se-slide-brand-'+ categorias[i] +'-next',
          prevEl: '.se-slide-brand-'+ categorias[i] +'-next'
        }
      });
    }

    element.addEventListener("mouseover", function(){
      this.classList.add("ativo");
    });

    element.addEventListener("mouseleave", function(){
      this.classList.remove("ativo")
    });

    // element.addEventListener("click", function(){
    //     this.classList.remove("ativo");
    // });

    // element.querySelector('.submenu').addEventListener("click", function(){
    //     console.log("Entrei neste click");
    //     this.closest('.se-menu-item').classList.remove("ativo");
    // });

    var elem = document.getElementsByClassName('se-submenu-item')
    for(var i=0; i < elem.length; i++){
        elem[i].addEventListener("click", function(){
            console.log("Entrei neste click");
            this.closest('.se-menu-item').classList.remove("ativo");
        })
    }
  }
}