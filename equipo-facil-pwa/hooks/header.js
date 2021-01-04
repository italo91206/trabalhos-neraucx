{
    "--prepara-header": component =>{
        var usuario = document.getElementById('avatar-modal');
        var modalUsuario = document.getElementsByClassName('modal-desktop-user')[0];

        usuario.addEventListener("mouseover", function(){
            modalUsuario.classList.add("ativo");
        })

        modalUsuario.addEventListener("mouseleave", function(){
            this.classList.remove("ativo");
        })
        modalUsuario.addEventListener("click", function(){
            this.classList.remove("ativo");
        })
    }
}