{
    "--openModalVistoriado": component => {
        var btnOpenVistoriado = document.getElementById('modal-vistoriado');
        var btnCloseVistoriado = document.getElementById('modal-close-button');

        btnOpenVistoriado.addEventListener("click", function () {
            document.querySelector('.bg-modal-msg-equipo-vistoriado').classList.add('modal-open-equipo-vistoriado');
        })

        btnCloseVistoriado.addEventListener('click', function () {
            document.querySelector('.bg-modal-msg-equipo-vistoriado').classList.remove('modal-open-equipo-vistoriado');
        }) 

        /* btnOpenVistoriado.onclick = function () {
            btnOpenVistoriado.classList.add('bg-modal-msg-equipo-vistoriado');
        }

        btnCloseVistoriado.onclick = function () {
            btnOpenVistoriado.style.classList.remove('modal-close-button');
        } */
    }
}