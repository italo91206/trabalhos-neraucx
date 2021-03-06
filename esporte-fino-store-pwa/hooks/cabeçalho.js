{
  "--prepara-header": component => {
    var menuButton = document.getElementById('efs-mobilemenu');
    var menu = document.getElementById('efs-menu-mobile');

    var searchButton = document.getElementById('efs-mobilesearch');
    var fecharSearchButton = document.getElementById('efs-mobilesearch-fecha');
    var search = document.getElementsByClassName('efs-search')[0];

    var cartButton = document.getElementById('efs-mobilecart');

    menuButton.addEventListener("click", function(){
      menu.classList.toggle("active");
    })

    searchButton.addEventListener("click", function(){
      search.classList.toggle("active");
      searchButton.classList.toggle("none");
      fecharSearchButton.classList.toggle("none");
      cartButton.classList.toggle("none");
      menuButton.classList.toggle("none");
    })

    fecharSearchButton.addEventListener("click", function(){
      search.classList.toggle("active");
      searchButton.classList.toggle("none");
      fecharSearchButton.classList.toggle("none");
      cartButton.classList.toggle("none");
      menuButton.classList.toggle("none");
    })
  },
  "--efs-esporte-images-1": component =>{
    component.$slide('#efs-esporte-images-1', {
      slidesPerView: 4,
      spaceBetween: 8,
      slidesPerGroup: 1,
      navigation:{
        nextEl: '.efs-esporte-images-1-next',
        prevEl: '.efs-esporte-images-1-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 8,
          spaceBetween: 16,
            centeredSlides: false,
        },
        992: {
          slidesPerView: 10,
          spaceBetween: 47,
          centeredSlides: false,
        },
      }
    });
  },
  "--efs-esporte-images-2": component =>{
    component.$slide('#efs-esporte-images-2', {
      slidesPerView: 4,
      spaceBetween: 8,
      slidesPerGroup: 1,
      navigation:{
        nextEl: '.efs-esporte-images-2-next',
        prevEl: '.efs-esporte-images-2-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 8,
          spaceBetween: 16,
            centeredSlides: false,
        },
        992: {
          slidesPerView: 10,
          spaceBetween: 47,
          centeredSlides: false,
        },
      }
    });
  },
  "--prepara-submenu": component =>{
    var itens = document.getElementsByClassName('submenu-item');
    var submenu = document.getElementsByClassName('efs-submenu');
    var dark_background = document.getElementsByClassName('efs-submenu-darken')[0];
    var category_item  = document.getElementsByClassName('submenu-category-item');

    function qualFilho(elem){
      var pai = elem.parentElement.children;
      var i = 0;
      
      while(i < pai.length && pai[i] != elem)
        i++
        //   console.log('altero o filho ' + i);
      return i;
    }

    function trataEntrada(){
      for(var i=0; i < submenu.length; i++){
        submenu[i].classList.remove('active');
      }
    };

    for(var i=0; i < itens.length-1; i++){
      itens[i].addEventListener("mouseover", function(){
        trataEntrada();
        dark_background.classList.add('active')
        submenu[qualFilho(this)].classList.add('active');
      })
      submenu[i].addEventListener("mouseleave", function(){
        trataEntrada();
        // submenu[qualFilho(this)].classList.remove('active');
        dark_background.classList.remove('active')
        this.classList.remove('active');
      })
    }

    for(var i=0; i < category_item.length; i++){
      category_item[i].addEventListener("click", function(){
        trataEntrada();
      })
    }

    // 5 é índice do último item do menu, ou seja, o "Outlet"
    itens[5].addEventListener("mouseover", function(){
      trataEntrada();
    })
  },
  "--prepara-hover-dos-submenus": component => {
    var hover_brasileiros = document.getElementById('change-submenu-to-brasileiros');
    var hover_internacionais = document.getElementById('change-submenu-to-internacionais');
    var elementos_internacionais = document.getElementsByClassName('coluna-itens-internacionais');
    var elementos_brasileiros = document.getElementsByClassName('coluna-itens-brasileiros');

    //ativa os itens da seleção "brasileiro"
    hover_brasileiros.addEventListener("mouseover", function(){
      // remove o display do item "internacional" caso já estava sendo exibido antes
      if(hover_internacionais.classList.contains("active")){
        hover_internacionais.classList.remove("active");
        
        for(var i=0; i < elementos_internacionais.length; i++)
          elementos_internacionais[i].style.display = "none";
      }
      this.classList.add("active");
      for(var i=0; i < elementos_brasileiros.length; i++)
        elementos_brasileiros[i].style.display = "block";
    });

    //ativa os itens da seleção "internacional"
    hover_internacionais.addEventListener("mouseover", function(){
      // remove o display do item "brasileiro" caso já estava sendo exibido antes
      if(hover_brasileiros.classList.contains("active")){
        hover_brasileiros.classList.remove("active")
        for(var i=0; i < elementos_brasileiros.length; i++)
          elementos_brasileiros[i].style.display = "none";
      }
      this.classList.add("active");
      for(var i=0; i < elementos_internacionais.length; i++)
        elementos_internacionais[i].style.display = "block";
    });
  }
}