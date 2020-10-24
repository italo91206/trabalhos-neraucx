{
  "--preparador-color-swatch": component =>{
    var swatches = document.getElementsByClassName('nb-swatch');
    
    function removeTodoMundo(){
      var swatches = document.getElementsByClassName('nb-swatch');
      for(var i=0; i<swatches.length; i++)
        swatches[i].classList.remove("nb-swatch-selected");
    }
    
    for(var i=0; i<swatches.length; i++)
      swatches[i].addEventListener("click", function(){
        removeTodoMundo();
        
        if(this.classList.contains("nb-swatch-selected"))
          this.classList.remove("nb-swatch-selected");
        else
          this.classList.add("nb-swatch-selected");
      })
  }
}