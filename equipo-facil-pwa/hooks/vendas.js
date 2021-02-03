{
    "--prepara-visao-anuncios": (component, el ) => {
        var items = el.children[0].children;
    
        function resetaItems(){
            for(var i=0; i<items.length; i++)
                items[i].classList.remove("active");
        }

        for(var i=0; i < items.length; i++)
            items[i].addEventListener("click", function(){
                resetaItems();
                this.classList.add("active");
            })
    },

    "--open-switch-account": component =>{
        var btnSwitchAccount = document.querySelector('.pwa-btn-switch-account');

        btnSwitchAccount.addEventListener("click", function(){
            document.querySelector("#switch-account").classList.add('open-switch-account');
        })
    },

    "--open-send-cod": component => {
        var btnOpenSendCod = document.querySelector("#pwat-btn-send-cod");
        var btnCloseSendCod = document.querySelector('#pwat-btn-close-modal-send-cod');

        btnOpenSendCod.addEventListener("click", function() {
            document.querySelector("#modal-codigo-rastreio").classList.add("open-modal-cod-rastreio");
        })

        btnCloseSendCod.addEventListener("click", function(){
            document.querySelector("#modal-codigo-rastreio").classList.remove("open-modal-cod-rastreio");
        })
    }
}