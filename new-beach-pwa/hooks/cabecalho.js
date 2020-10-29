{
  "--ativaMenuMobile": component => {
    var botao = document.getElementsByClassName('nb-mobile-menu-bar')[0];
    var menu = document.getElementsByClassName('menu-mobile')[0];
    
    botao.addEventListener("click", function(){
      if(menu.classList.contains("active"))
        menu.classList.remove("active");
      else
      menu.classList.add("active");
    })
  },
  "--preparaMenu": component => {
    var listas = document.getElementsByClassName('list-subitens list');
    var submenu = document.getElementsByClassName('submenu-list')[0];
    var menu = document.getElementsByClassName('nav-menu')[0];
    var menuBusca = document.getElementsByClassName('submenu-search')[0];

    for(var i=0; i < 3; i++){
      var sublista = listas[i].children;
      for(var j=0; j < sublista.length; j++){
        sublista[j].children[0].addEventListener("click", function(){
          submenu.classList.remove("active");
        })
      }
    }

    submenu.addEventListener("mouseleave", function(){
      this.classList.remove("active");
    });

    menu = menu.children[0];
    for(var i=1; i<menu.childElementCount; i++){
      menu.children[i].addEventListener("mouseover", function(){
        if(submenu.classList.contains("active")){
          menu.children[0].classList.remove("active");
          submenu.classList.remove("active");
        }
        if(menuBusca.classList.contains("active"))
          menuBusca.classList.remove("active");
      })
    }
  },
  "--preparaMenuMobile": component => {
    var lista = document.getElementsByClassName('menu-list-mobile'); // tenho duas listas no menu mobile
    
    lista = lista[0]; // mas só quero a primeira
    lista = lista.children; // peguei o <ul> dessa lista
    lista = lista[0].children; // agora tenho os <li> dentro desse <ul>

    // Tem que começar do 1 pra não pegar o "Feminino" que só ativa outra visualização.
    for(var i=1; i<lista.length; i++)
      lista[i].addEventListener("click", function(){
        hideMenuMobile();
      })
  }
}
