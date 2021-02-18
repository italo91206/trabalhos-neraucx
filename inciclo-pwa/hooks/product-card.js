{
    "--verifica-novo": (component, el) => {
        var produto = el.dataset["datetime"];

        console.log("data: " + data);
        console.log(el);
        console.log('------')

        if(produto !== undefined){
            var data = new Date();
            
            var dia = zeroPad(data.getUTCDate(), 2);
            var mes = zeroPad(data.getUTCMonth()+1, 2);
            var ano = data.getUTCFullYear();

            data = `${ano}-${mes}-${dia}`;
            produto.split(' ');
            if(data < produto[0]){
                var node = document.createElement("P");
                node.innerText = "novo";
                node.classList.add('pwat-baginda');
                el.appendChild(node);
            }
        }
    }
}