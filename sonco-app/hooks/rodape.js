{
    "--footer-menu": component => {
        var elem = document.getElementsByClassName('sc-footer-menu-option'); 

        function tirarTodos(){
            for(var i=0; i<elem.length; i++)
                elem[i].classList.remove("active");
        }


        for(var i=0; i<elem.length; i++)
            if(i != 2 && i != 4)
                elem[i].addEventListener("click", function(){
                    tirarTodos();
                    this.classList.add("active");
                })
    }
}