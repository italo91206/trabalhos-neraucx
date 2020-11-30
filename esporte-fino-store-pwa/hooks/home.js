{
  "product-list-ofertas-loaded": component => {
    component.$slide('#efs-home-products', {
    slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
    spaceBetween: window.innerWidth < 1024 ? 0 : 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    pagination: {
      el: '.efs-home-products-paginacao',
      clickable: true
    },
    navigation: {
      nextEl: '.efs-home-products-next',
      prevEl: '.efs-home-products-prev'
    },
    breakpoints:{
      440: {
        slidesPerView: 2,
        spaceBetween:40,
        centeredSlides: false
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: false
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: false
      },
      1200: {
        slidesPerView:4,
        spaceBetween: 30,
        centeredSlides: false
      }
    }
  });
  },
  "product-list-ofertas-2-loaded": component => {
    component.$slide('#efs-home-products-2', {
    slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
    spaceBetween: window.innerWidth < 1024 ? 0 : 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    pagination: {
      el: '.efs-home-products-2-paginacao',
      clickable: true
    },
    navigation: {
      nextEl: '.efs-home-products-2-next',
      prevEl: '.efs-home-products-2-prev'
    },
    breakpoints:{
      440: {
        slidesPerView: 2,
        spaceBetween:40,
        centeredSlides: false
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: false
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: false
      },
      1200: {
        slidesPerView:4,
        spaceBetween: 30,
        centeredSlides: false
      }
    }
  });
  },
  "product-list-ofertas-3-loaded": component => {
    component.$slide('#efs-home-products-3', {
    slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
    spaceBetween: window.innerWidth < 1024 ? 0 : 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    pagination: {
      el: '.efs-home-products-3-paginacao',
      clickable: true
    },
    navigation: {
      nextEl: '.efs-home-products-3-next',
      prevEl: '.efs-home-products-3-prev'
    },
    breakpoints:{
      440: {
        slidesPerView: 2,
        spaceBetween:40,
        centeredSlides: false
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: false
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: false
      },
      1200: {
        slidesPerView:4,
        spaceBetween: 30,
        centeredSlides: false
      }
    }
  });
  },
  "--efs-home-banner": component =>{
    component.$slide('#efs-home-banner', {
      slidesPerView: 1,
      loop: true,
      loopedSlides: 2,
      spaceBetween: 0,
      slidesPerGroup: 1,
      centeredSlides: true,
      pagination: {
        el: '.efs-home-banner-paginacao',
        clickable: true,
      },
      navigation: {
        nextEl: '.efs-home-banner-next',
        prevEl: '.efs-home-banner-prev',
      },
    });
  },
  "--seletor-home-slider": component =>{
    var sports = document.getElementById('efs-marca-efs');
    var new_era = document.getElementById('efs-marca-newera');
    var menor_preco = document.getElementById('efs-marca-mitchellness');

    var sliders = document.getElementsByClassName('home-slider-holder');

    sports.addEventListener("click", function(){
      if(sports.checked && !new_era.checked && !menor_preco.checked){
        sliders[0].classList.remove("none");
        sliders[1].classList.add("none");
        sliders[2].classList.add("none");
      }
    //   console.log("entrei aqui!")
    //   console.log(sports.checked && !new_era.checked && !menor_preco.checked)
    });

    new_era.addEventListener("click", function(){
      if(!sports.checked && new_era.checked && !menor_preco.checked){
        sliders[0].classList.add("none");
        sliders[1].classList.remove("none");
        sliders[2].classList.add("none");
      }
    //   console.log("entrei aqui!")
    //   console.log(!sports.checked && new_era.checked && !menor_preco.checked)
    });

    menor_preco.addEventListener("click", function(){
      if(!sports.checked && !new_era.checked && menor_preco.checked){
        sliders[0].classList.add("none");
        sliders[1].classList.add("none");
        sliders[2].classList.remove("none");
        // console.log("entrei aqui!")
        // console.log(!sports.checked && !new_era.checked && menor_preco.checked)
      }
    });

  }
}