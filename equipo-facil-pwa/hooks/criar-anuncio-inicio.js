{
    "--prepara-ano-selecao": component =>{
        var input = document.getElementById('ano-fabricacao-desconhecido');
        var select = document.getElementById('ano-fabricacao-select');

        input.addEventListener("click", function(){
            // caso ele não esteja disabilitado
            if(!select.disabled)
                select.disabled = true;
            else
                select.disabled = false;
        })
    },
    '--criar-anuncio-busca-categorias': component => {
        component.$bridge('call', async fetch => {
            const api = await fetch('/catalog/categories');
            const put = await api.get('');
            component.$setGlobalState('categorias', put.data)
        })
    },

    '--criar-anuncio-campo-busca-categoria': component => {
        const input = document.querySelector('input[name="name"]')
        input.addEventListener("keyup", function(){
            const names = input.value.split(' ').map(i => i.toLowerCase().trim()).filter(i => i !== '')

            let categories = []
            names.forEach(name => {
                if (name.length > 3) {
                    component.$$globalState.categorias.forEach(category => {
                        if (category.root.name.toLowerCase().trim().includes(name)) {
                            categories.push(category)
                        }
                    })
                }
            })

            console.log('categories', categories)

            component.$setGlobalState('categoriasVisiveis', categories)
        })
    },

    "--criar-anuncio-prepara-busca-modelo": component =>{
        component.$bridge('call', async fetch => {
            const api = await fetch('/catalog/atributos/modelo');
            const put = await api.get('');
            var modelos = put.data.map(m => m.label)
            component.$setGlobalState('modelos', put.data)

            var input = document.getElementById('product-modelo-equipo-search');
            var listaResultados = document.getElementById('modelo-preview-result-search-list');

            //imagem da lupa e do fechar
            var inputMarcasLupa = document.getElementById('procurar-modelo-lupa');
            var inputMarcasFechar = document.getElementById('procurar-modelo-fechar');

            input.addEventListener("keyup", function(){
                console.log('apertei');
                if(this.value == ""){
                    inputMarcasFechar.style.display = "none";
                    inputMarcasLupa.style.display = "block";
                }
                else{
                    inputMarcasFechar.style.display = "block";
                    inputMarcasLupa.style.display = "none";
                }
                var resultado = buscarPalavras(modelos, this.value);
                adicionarResultado(resultado, listaResultados, input);
            })

            inputMarcasFechar.addEventListener("click", function(){
                input.value = "";
                inputMarcasFechar.style.display = "none";
                inputMarcasLupa.style.display = "block";
                limparLista(listaResultados);
            })
        })
    },
    "--criar-anuncio-prepara-busca-marca": component =>{
        component.$bridge('call', async fetch => {
            const api = await fetch('/catalog/atributos/marca');
            const put = await api.get('');
            var modelos = put.data.map(m => m.label)
            component.$setGlobalState('marcas', put.data)

            var input = document.getElementById('product-marca-equipo-search');
            var listaResultados = document.getElementById('marca-preview-result-search-list');

            //imagem da lupa e do fechar
            var inputMarcasLupa = document.getElementById('procurar-marca-lupa');
            var inputMarcasFechar = document.getElementById('procurar-marca-fechar');

            input.addEventListener("keyup", function(){
                console.log('apertei');
                if(this.value == ""){
                    inputMarcasFechar.style.display = "none";
                    inputMarcasLupa.style.display = "block";
                }
                else{
                    inputMarcasFechar.style.display = "block";
                    inputMarcasLupa.style.display = "none";
                }
                var resultado = buscarPalavras(modelos, this.value);
                adicionarResultado(resultado, listaResultados, input);
            })

            inputMarcasFechar.addEventListener("click", function(){
                input.value = "";
                inputMarcasFechar.style.display = "none";
                inputMarcasLupa.style.display = "block";
                limparLista(listaResultados);
            })
        })

    }
}