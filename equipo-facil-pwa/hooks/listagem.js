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

    }
}