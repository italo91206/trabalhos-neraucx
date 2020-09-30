{
  "--preparacaoAcordeao": component => {
    var acordeoes = document.getElementsByClassName('se-acordion');
    for(var i=0; i<acordeoes.length; i++){
      acordeos[i].addEventListener("click", function(){
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
      // aperteiNoAcordion: function (elem) {
      //     console.log(elem);
      //     // Este método é exclusiva da página /perguntas-frequentes
      //     elem.classList.toggle("active");
      //     var panel = elem.nextElementSibling;
      //     console.log(panel);
      //     if (panel.style.maxHeight)
      //         panel.style.maxHeight = null;
      //     else
      //         panel.style.maxHeight = panel.scrollHeight + "px";
      // }