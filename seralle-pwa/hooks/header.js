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
  }
}