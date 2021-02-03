function addToInput(texto, input, listaResultados){
    input.value = texto;
    limparLista(listaResultados);
}

function limparLista(lista){
    while(lista.childElementCount > 0)
        lista.children[0].remove()
}

function adicionarResultado(resultado, lista, input){
    limparLista(lista);

    if(resultado.length != 0){
        for(var i=0; i < resultado.length; i++){
            var node = document.createElement('LI')
            var p = document.createElement("P")
            p.innerText = resultado[i]
            node.appendChild(p);
            node.addEventListener("click", function(){
                addToInput(p.innerText, input, lista)
            });
            lista.appendChild(node);
        }
    }
}

function buscarPalavras(colecao, atual){
    var resultado = [];
    
    for(var i=0; i < colecao.length; i++)
        if( colecao[i].localeCompare(atual) == 0 )
            resultado.push(colecao[i])

    return resultado;
}