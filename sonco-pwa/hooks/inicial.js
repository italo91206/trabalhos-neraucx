{
  /* SLIDE 1 - HOME */
  "--sc-slider__industrial-home": component => {
    component.$slide('#sc-slider__industrial-home', {
      slidesPerView: 'auto',
      loop: true, 
      loopedSlides: 4, 
      navigation: {
        nextEl: '.sc-slide__industrial-home-next',
        prevEl: '.sc-slide__industrial-home-prev',
      }
    });
  },
  "--bulletsAnimation": component => {
    var circulos = document.getElementsByClassName('circle_bar');
    var primeiro = circulos[0];
    var selected_circle = 'one-circle';
    var continue_transactions = true;
    var atual_elemento = 0;

    function todoMundoRecebeLessCircle(){
      for(var i=0; i<circulos.length; i++)
        circulos[i].classList.add('less-circle');
    }

    for(var i=0; i<circulos.length; i++){
      circulos[i].addEventListener("click", function(){
        todoMundoRecebeLessCircle();
        this.classList.remove('less-circle');

        if (selected_circle == 'one-circle' && this.attributes.id.value == 'second-circle') /** primeiro para segundo **/ {
          document.getElementById(selected_circle).classList.remove('pass-left');
          document.getElementById(selected_circle).classList.add('pass-right');
        }
        else if (selected_circle == 'second-circle' && this.attributes.id.value == 'one-circle')/*segundo para terceiro*/ {
          document.getElementById(selected_circle).classList.remove('pass-right');
          document.getElementById(selected_circle).classList.add('pass-left');
        }
        else if (selected_circle == 'second-circle' && this.attributes.id.value == 'third-circle')/*terceiro para segundo */ {
          document.getElementById(selected_circle).classList.remove('pass-left');
          document.getElementById(selected_circle).classList.add('pass-right');
        }
        else if (selected_circle == 'third-circle' && this.attributes.id.value == 'second-circle') /** terceiro para quarto */ {
          document.getElementById(selected_circle).classList.remove('pass-right');
          document.getElementById(selected_circle).classList.add('pass-left');
        }
        else if (selected_circle == 'third-circle' && this.attributes.id.value == 'fourth-circle') /** quarto para terceiro */ {
          document.getElementById(selected_circle).classList.remove('pass-left');
          document.getElementById(selected_circle).classList.add('pass-right');
        }
        else if (selected_circle == 'fourth-circle' && this.attributes.id.value == 'third-circle') /** quarto para terceiro */ {
          document.getElementById(selected_circle).classList.remove('pass-right');
          document.getElementById(selected_circle).classList.add('pass-left');
        }
        else if (selected_circle == 'fourth-circle' && this.attributes.id.value == 'fifth-circle') /** quarto para terceiro */ {
          document.getElementById(selected_circle).classList.remove('pass-left');
          document.getElementById(selected_circle).classList.add('pass-right');
        }
        else if (selected_circle == 'fifth-circle' && this.attributes.id.value == 'fourth-circle') /** quarto para terceiro */ {
          document.getElementById(selected_circle).classList.remove('pass-right');
          document.getElementById(selected_circle).classList.add('pass-left');
        }
        
        selected_circle = this.id;
        continue_transactions = false;

        todoMundoPerdeAnimateProgress();
        makeTransitionContent(this);
      })
    }

    function resetAllTransitions(){
      document.getElementById('one-circle').classList.remove('one-circle-rightleft');
      document.getElementById('one-circle').classList.add('one-circle-leftright');

      document.getElementById('third-circle').classList.remove('third-circle-leftright');
      document.getElementById('third-circle').classList.add('third-circle-rightleft');
    }

    function makeTransitionContent(element){
      var continue_ = true;
      var key_ = -1;

      todoMundoPerdeActiveOvercircle();
      element.classList.add('active-overcircle');

      for(var i=0; i<circulos.length && continue_ == true; i++){
        if(element == circulos[i]){
          continue_ = false;
          key_ = i;
        }
      }

      if (key_ >= 0) {
        someTodosOsBanners();
        document.getElementsByClassName('content-bullet-' + key_)[0].classList.add('active-content-bullet');
      }
    }

    document.getElementsByClassName('sc-slide__home-01-next')[0].addEventListener("click", function(){
      resetAllTransitions();
      continue_transactions = false;
      if (atual_elemento == 4)
        atual_elemento = -1;
      makeTransitionContent(circulos[++atual_elemento]);
    })

    document.getElementsByClassName('sc-slide__home-01-prev')[0].addEventListener("click", function(){
      continue_transactions = false;
      if (atual_elemento == 0)
        atual_elemento = 5;
      makeTransitionContent(circulos[--atual_elemento]);
    })
    
    primeiro.classList.remove('less-circle');
    primeiro.classList.add('animate_progress');
    primeiro.classList.add('active-overcircle');

    function todoMundoPerdeAnimateProgress(){
      for(var i=0; i<circulos.length; i++)
        circulos[i].classList.remove('animate_progress');
    }

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

    function todoMundoPerdeActiveOvercircle(){
      for(var i=0; i<circulos.length; i++)
        circulos[i].classList.remove('active-overcircle');
    }

    function someTodosOsBanners(){
      var elem = document.getElementsByClassName('content-block-bullet');
      for(var i=0; i< elem.length; i++)
        elem[i].classList.remove('active-content-bullet');
    }

    function timeout_transitions(number){
      setTimeout(function(){
        if (number < 5)
          addTransitionBullet();
        else
          removeTransitionBullet();
        
        var elem = circulos[number];
        todoMundoRecebeLessCircle();

        if (number < 5 && continue_transactions) {
          elem.classList.remove('less-circle');
          todoMundoPerdeAnimateProgress();
          elem.classList.add('animate_progress');
          
          switch (number) {
            case 1: 
              document.getElementById('one-circle').classList.remove('pass-left');
              document.getElementById('one-circle').classList.add('pass-right');
              break;
            case 2: 
              document.getElementById('second-circle').classList.remove('pass-left');
              document.getElementById('second-circle').classList.add('pass-right');
              break;
            case 3: 
              document.getElementById('third-circle').classList.remove('pass-left');
              document.getElementById('third-circle').classList.add('pass-right');
              break;
            case 4:
              document.getElementById('fourth-circle').classList.remove('pass-left');
              document.getElementById('fourth-circle').classList.add('pass-right');
              break;
          }
          atual_elemento = number;
          makeTransitionContent(circulos[number]);
          timeout_transitions(++number);
        }
        else if (continue_transactions) {
          elem = circulos[0];
          todoMundoRecebeLessCircle();
          elem.classList.remove('less-circle');
          todoMundoPerdeAnimateProgress();
          elem.classList.add('animate_progress');
          document.getElementById('one-circle').classList.remove('one-circle-leftright');
          document.getElementById('one-circle').classList.add('one-circle-rightleft');
          makeTransitionContent(elem)

          resetAllTransitions();
          timeout_transitions(1);
        }
      }, 10000);
    }

    function addTransitionFor() {
      document.getElementsByClassName('forrepetition')[0].classList.add('transition-for');
    }

    function removeTransitionFor() {
      document.getElementsByClassName('forrepetition')[0].classList.remove('transition-for');
    }

    function spanTransitionDesktop(position, timer) {
      setTimeout(function () {
          addTransitionFor();
          document.getElementsByClassName('forrepetition')[0].style.transform = "translateY(-" + position + "%)";
          if (position >= 66)
            position += 11.5;
          else 
            position += 11;

          if (position >= 99) {
            setTimeout(function () {
                removeTransitionFor();
                document.getElementsByClassName('forrepetition')[0].style.transform = "translateY(0%)";
                spanTransitionDesktop(11, 1500);
            }, 500);
          }
          else 
            spanTransitionDesktop(position, 2000);
      }, timer);
    }

    function spanTransitionMobile(position, timer) {
      setTimeout(function () {
          addTransitionFor();
          document.getElementsByClassName('forrepetition')[0].style.transform = "translateY(-" + position + "%)";
          position += 10;

          if (position >= 90) {
            setTimeout(function () {
              removeTransitionFor();
              document.getElementsByClassName('forrepetition')[0].style.transform = "translateY(0%)";
              spanTransitionMobile(10, 1500);
            }, 500);
          }
          else 
            spanTransitionMobile(position, 2000);
          

      }, timer);
    }

    addTransitionFor();
    
    if (document.getElementsByTagName('HTML')[0].clientWidth <= 700)
      spanTransitionMobile(10, 2000);
    else
      spanTransitionDesktop(11, 2000);

    timeout_transitions(1)
  } 
}