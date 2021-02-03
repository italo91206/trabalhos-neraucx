{
    "--slide-categorias-listagem-1": component =>{
        component.$slide('#slide-categorias-listagem-1', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 30,
            grabCursor: true
          });
    },
    "--slide-categorias-listagem-2": component =>{
        component.$slide('#slide-categorias-listagem-2', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 30,
            grabCursor: true
          });
    },
    '--prepara-filtros': component => {
        var acc = document.getElementsByClassName("pwa-list-collapse");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("pwa-active");

            var panel = this.nextElementSibling;
            if (panel.style.display === "none") {
            panel.style.display = "block";
            } else {
            panel.style.display = "none";
            }
        });
        }
    },
    "on-page-search": component => {
        
        // pra esconder o filtro de marca
        component.$wait('#filtros-marca', () => {
            hideAndShowFilters('filtros-marca');
            var inputMarcas = document.getElementById('input-marcas');
            var inputMarcasLupa = document.getElementById('procurar-marca-icon');
            var inputMarcasFechar = document.getElementById('limpar-marca-icon');

            inputMarcas.addEventListener("keyup", function(){
                if(this.value == ""){
                    inputMarcasFechar.style.display = "none";
                    inputMarcasLupa.style.display = "block";
                }
                else{
                    inputMarcasFechar.style.display = "block";
                    inputMarcasLupa.style.display = "none";
                }
            })

            inputMarcasFechar.addEventListener("click", function(){
                inputMarcas.value = "";
                inputMarcasFechar.style.display = "none";
                inputMarcasLupa.style.display = "block";
                generalFilter(inputMarcas, "filtros-marca");
            })
        })

        // pra esconder o filtro de condição
        component.$wait('#filtros-condicao', () => {
            hideAndShowFilters('filtros-condicao');
        })

        // pra esconder o filtro de cor
        component.$wait('#filtros-cor', () => {
            hideAndShowFilters('filtros-cor');
        })

        // pra esconder o filtro de ano de fabricação
        component.$wait('#filtros-ano-fabricacao', () => {
            hideAndShowFilters('filtros-ano-fabricacao');
        })

        // pra esconder o filtro de modalidade
        component.$wait('#filtros-modalidade', () => {
            hideAndShowFilters('filtros-modalidade');
        })

        // pra esconder o filtro de certificado
        component.$wait('#filtros-certificado', () => {
            hideAndShowFilters('filtros-certificado');
        })

        var fadeFilter = document.getElementById("pwa-dropdown-fade2");
        var btnFilter = document.getElementById("btn-filter");
        var filtercontent = document.getElementById("modal-Filter");
        var btnFecharFilter = document.getElementsByClassName("pwa-close-modal-filter")[0];

        function controlaFiltro(){
            if(fadeFilter.style.display == "block"){
                fadeFilter.style.display = "none";
                // filtercontent.style.display = "none";
                filtercontent.classList.remove("ativo");
                btnFilter.classList.remove('pwa-btn-blue-active');
                btnFilter.style.zIndex ='0';
            }
            else{
                fadeFilter.style.display = "block";  
                // filtercontent.style.display = "block";
                filtercontent.classList.add("ativo");
                btnFilter.classList.toggle('pwa-btn-blue-active');                
                btnFilter.style.zIndex ='6';
            }
        }

        btnFilter.addEventListener("click", function(){
            controlaFiltro();
        })

        btnFecharFilter.addEventListener("click", function(){
            controlaFiltro();
        })

    },
    "result-list-on-searched": component => {
        function limparBannersListagem(){
            console.log("limpagem foi chamada");
            var elem = document.getElementsByClassName('listagem-banner');
            while(elem.length != 0){
                elem[0].remove();
            }
        }

        limparBannersListagem();
        
        setTimeout(() => {
            var containerProdutos = document.getElementsByClassName('pwa-cards-product-container')[0];
            var produtos = containerProdutos.children;
            var bannersMusthave = 2;
            var banners = [
                { // banner 1
                    textoTitulo: "Monte o seu consultório",
                    textoBotao: "Confira",
                    linkBotao: "pedras",
                    classe: "btn-branco",
                    imagem: "https://d18d1e4ae0fjeq.cloudfront.net/testenv_pwa4all_com5f772c1804f5c40b0b231ca2/resources/banner-01.png"
                },
                { // banner 2
                    textoTitulo: "Equipamentos para Implantes",
                    textoBotao: "Confira",
                    linkBotao: "pedras",
                    classe: "btn-esmeralda-dark",
                    imagem: "https://d18d1e4ae0fjeq.cloudfront.net/testenv_pwa4all_com5f772c1804f5c40b0b231ca2/resources/banner-02.png"
                }
            ];

            function novoBanner(banner){
                var node = document.createElement("DIV");
                node.classList.add("banner-w100");
                node.classList.add("listagem-banner");
                node.classList.add("relative");

                var titulo = document.createElement("H5");
                titulo.innerText = banner.textoTitulo;
                
                var link = document.createElement("A");
                link.classList.add(banner.classe);
                link.innerText = banner.textoBotao;
                link.href = window.location.href + banner.linkBotao;

                var img = document.createElement("IMG");
                img.src = banner.imagem;
                img.classList.add("w100");

                var textWrapper = document.createElement("DIV");
                textWrapper.classList.add("listagem-banner-text-wrapper");

                textWrapper.appendChild(titulo);
                textWrapper.appendChild(link);
                node.appendChild(img);
                node.appendChild(textWrapper);

                return node;
            }

            var i = 0;
            var aux = 0;
            var intervalo = 6;

            while(i < produtos.length && bannersMusthave > 0){
                if(aux != 0 && aux%(intervalo-1) == 0){
                    console.log("Inserindo no filho " + i);
                    var node = novoBanner(banners[2 - bannersMusthave]);
                    produtos[i].insertAdjacentElement("afterend", node);
                    bannersMusthave--;
                    intervalo++;
                    aux = -1;
                }
                aux++
                i++;
            }

            while(bannersMusthave > 0){
                var node = novoBanner(banners[2 - bannersMusthave]);
                containerProdutos.appendChild(node);
                bannersMusthave--;
            }

            console.log("Filhos: " + produtos.length)
        }, 500);
        
    }
}