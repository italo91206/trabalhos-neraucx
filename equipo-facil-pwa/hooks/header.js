{
    "--prepara-header": component =>{
        var divUsuarioDesktop = document.getElementById('avatar-modal');
        var botaoNotificacao = document.getElementById('button-notification');
        var menuBarrasMobile = document.getElementById('menu-header-bar');
        
        var modaldivUsuarioDesktop = document.getElementsByClassName('modal-desktop-user')[0];
        var modalbotaoNotificacao = document.getElementsByClassName('pwa-modal-notification-container')[0];
        var modaldivUsuarioMobileDesktop = document.getElementById('modal-menu-user');
        var itemsMenu = document.getElementsByClassName('menu-item');

        // entrada de eventos
        divUsuarioDesktop.addEventListener("mouseenter", function(){
            modaldivUsuarioDesktop.classList.add("ativo");
            modalbotaoNotificacao.classList.remove("ativo");
        })
        botaoNotificacao.addEventListener('click', function(){
            modalbotaoNotificacao.classList.toggle("ativo");
            modaldivUsuarioDesktop.classList.remove("ativo");
            modaldivUsuarioMobileDesktop.classList.remove('ativo');
        })

        for(var i=0; i < itemsMenu.length; i++){
            itemsMenu[i].addEventListener("click", function(){
                forceCloseMenuMobile();
            })
        }

        menuBarrasMobile.addEventListener("click", function(){
            controlaMenudivUsuarioDesktop();
        })


        // saida de eventos
        modaldivUsuarioDesktop.addEventListener("mouseleave", function(){
            this.classList.remove("ativo");
        })
        modaldivUsuarioDesktop.addEventListener("click", function(){
            this.classList.remove("ativo");
        })
        modalbotaoNotificacao.addEventListener("mouseleave", function(){
            this.classList.remove("ativo");
        })
        modalbotaoNotificacao.addEventListener("click", function(){
            this.classList.remove("ativo");
        })


        function controlaMenudivUsuarioDesktop(){
            modaldivUsuarioMobileDesktop.classList.toggle('ativo')
            menuBarrasMobile.classList.toggle('close')

            modalbotaoNotificacao.classList.remove('ativo');
        }

        function forceCloseMenuMobile(){
            modaldivUsuarioMobileDesktop.classList.remove('ativo')
            menuBarrasMobile.classList.remove('close')
        }
    }
}