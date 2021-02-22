{
    "--listagem-card-options": component => {
        var options = document.getElementById('column-options');
        var cards = document.getElementsByClassName('nv-product-card-pesquisa');
            
        function force_clean(){
            var elems = document.getElementsByClassName('column-options-divider');
            
            for(var i=0; i<elems.length; i++)
                elems[i].classList.remove("active");
        }

        function options_ativar(num){
            var width;
            force_clean();

            if(num == 2){
                options.children[0].classList.add("active");
                width = 49.00;
            }
            else if(num == 3){
                options.children[1].classList.add("active");
                width = 33.33;
            }
            else{
                options.children[2].classList.add("active");
                width = 25;
            }

            for(var i=0; i < cards.length; i++)
                cards[i].style.maxWidth = `${width}%`
        }

        options.children[0].addEventListener("click", function(){
            options_ativar(2);
        })

        options.children[1].addEventListener("click", function(){
            options_ativar(3);
        })

        options.children[2].addEventListener("click", function(){
            options_ativar(4);
        })
    }
}