{
    "--prepara-header": component =>{
        var usuario = document.getElementById('avatar-modal');
        var notificacao = document.getElementById('button-notification');
        
        var modalUsuario = document.getElementsByClassName('modal-desktop-user')[0];
        var modalNotificacao = document.getElementsByClassName('pwa-modal-notification-container')[0];

        // entrada de eventos
        usuario.addEventListener("mouseenter", function(){
            modalUsuario.classList.add("ativo");
            modalNotificacao.classList.remove("ativo");
        })
        notificacao.addEventListener('click', function(){
            modalNotificacao.classList.add("ativo");
            modalUsuario.classList.remove("ativo");
        })

        // saida de eventos
        modalUsuario.addEventListener("mouseleave", function(){
            this.classList.remove("ativo");
        })
        modalUsuario.addEventListener("click", function(){
            this.classList.remove("ativo");
        })
        modalNotificacao.addEventListener("mouseleave", function(){
            this.classList.remove("ativo");
        })
        modalNotificacao.addEventListener("click", function(){
            this.classList.remove("ativo");
        })
    }
}