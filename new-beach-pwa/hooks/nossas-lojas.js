{
    "--alterarMapa": component=>{
        var mapa = document.getElementById('gmap_canvas');
        var op1 = document.getElementById("nb-mapa-opcao-1");
        var op2 = document.getElementById("nb-mapa-opcao-2");
        var op3 = document.getElementById("nb-mapa-opcao-3");

        op1.addEventListener("click", function(){
            mapa.src ="https://maps.google.com/maps?q=Av.%20Le%C3%A3o%20Machado%2C%20100&t=&z=19&ie=UTF8&iwloc=&output=embed";
        })

        op2.addEventListener("click", function(){
            mapa.src ="https://maps.google.com/maps?q=R.%20Gaspar%20Ricardo%2C%20471%20-%20Zona%2010%2C%20Maring%C3%A1%20-%20PR%2C%2087040-365&t=&z=19&ie=UTF8&iwloc=&output=embed";
        })

        op3.addEventListener("click", function(){
            mapa.src ="https://maps.google.com/maps?q=05328-020&t=&z=17&ie=UTF8&iwloc=&output=embed";
        })

        var input = document.getElementById('nb-busca-cep-mapa');
        input.addEventListener("change", function(){
            var string = "https://maps.google.com/maps?q=";
            string += input.value.split(' ').join('%20');
            string += "&t=&z=17&ie=UTF8&iwloc=&output=embed";
            console.log(typeof(string));
            console.log(string);
            mapa.src = string;
        })
    }
}