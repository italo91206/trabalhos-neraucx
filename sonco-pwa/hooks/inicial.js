{
  /* SLIDE 1 - HOME */
  "--sc-slide__home-01": component => {
    component.$slide('#sc-slide__home-01', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.sc-slide__home-01-next',
        prevEl: '.sc-slide__home-01-prev',
      }
    });
  },
  "--bulletsAnimation": component => {
    var circulos = document.getElementsByClassName('circle_bar');
    var primeiro = circulos[0];

    for(var i=0; i<circulos.length; i++)
      circulos[i].classList.add('less-circle');
    
    primeiro.classList.remove('less-circle');
    primeiro.classList.add('animate_progress');
    primeiro.classList.add('active-overcircle');

    function removeTransitionBullet(){
      var elem;

      elem = document.getElementsByClassName('sc-icons-top__home'); 
      elem = elem[0];

      elem.classList.remove('transition-option');
      
      elem = document.getElementsByClassName('withoutransition');
      for(var i=0; i<elem.length; i++)
        elem[i].classList.add('withoutransition');
    }

    function addTransitionBullet(){
      var elem;

      elem = document.getElementsByClassName('sc-icons-top__home');
      elem = elem[0];
      elem.classList.add('transition-option');

      elem = document.getElementsByClassName('circle_bar')
      for(var i=0; i<elem.length; i++)
        elem[i].classList.remove('withoutransition');
    }

    function hello(){
      console.log('Hello foi chamado!');
    }

    hello();
  } 
}