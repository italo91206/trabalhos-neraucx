{
  "--preparacaoAcordeao": component => {
    var acordeoes = document.getElementsByClassName('se-acordion');
    for(var i=0; i<acordeoes.length; i++){
      acordeoes[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight)
          panel.style.maxHeight = null;
        else
          panel.style.maxHeight = panel.scrollHeight + "px";
      })
    }
  }
}