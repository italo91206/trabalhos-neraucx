{
    "--prepara-duvidas-frequentes": component =>{
        var cards = document.getElementsByClassName('pwa-card-question-full-item');
        var topics = document.getElementsByClassName('card-question-wrapper');
        
        var title = document.getElementsByClassName('pwa-h4-title')[0];
        var breadcrumb = document.getElementById('faq-breadcrumb');

        var isCard = false;
        var isTopic = false;

        var cardAtivo;
        var topicoAtivo;

        function controlarCards(ativo){
            for(var i=0; i<cards.length; i++){
                if(cards[i] != ativo)
                    cards[i].classList.toggle("hide");
            }
        }

        function controlaTitulo(){
            title.classList.toggle("hide");
        }

        function adicionaBreadcrumb(titulo){
            var node = document.createElement("LI")
            var span = document.createElement("SPAN");
            span.innerText = titulo;

            if(isTopic){
                node.addEventListener("click", function(){
                    cardAtivo.children[1].classList.remove('ativo');
                    breadcrumb.children[breadcrumb.childElementCount-1].remove();
                })
            }

            breadcrumb.style.marginBottom = "24px";
            
            node.appendChild(span);
            breadcrumb.appendChild(node);
        }

        function reseta(){
            topicoAtivo.children[1].classList.remove('ativo');
            
            for(var i=0; i<cards.length; i++)
                cards[i].classList.remove("hide");
            
            while(breadcrumb.childElementCount > 1)
                breadcrumb.children[breadcrumb.childElementCount-1].remove();

            cardAtivo.classList.remove('someporfavor');
            cardAtivo.children[1].classList.remove('ativo');
            breadcrumb.style.marginBottom = "0px";

            isCard = false;
            isTopic = false;
        }

        breadcrumb.children[0].addEventListener("click", function(){
            reseta();
            controlaTitulo();
        })

        for(var i=0; i<cards.length; i++){
            cards[i].addEventListener("click", function(){
                if(!isCard){
                    var titulo = this.children[0].children[0].children[1].children[0].innerText;
                    adicionaBreadcrumb(titulo);

                    cardAtivo = this;
                    controlarCards(cardAtivo);
                    controlaTitulo();
                    this.children[1].classList.add('ativo');

                    console.log(cardAtivo);
                    isCard = true;
                }
            });
        }

        for(var i=0; i<topics.length; i++){
            topics[i].addEventListener("click", function(){
                if(!isTopic){
                    var titulo = this.children[0].children[0].children[0].children[0].innerText;
                    console.log(this);
                    adicionaBreadcrumb(titulo);

                    topicoAtivo = this;
                    this.children[1].classList.add('ativo');
                    cardAtivo.classList.add('someporfavor');
                    isTopic = true;
                }
                
            })
        }

    }
}