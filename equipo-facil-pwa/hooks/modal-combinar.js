{
    "--abrir-modal-combinar": component => {
        const modalMatch = document.getElementById("modal-match");

        const btnModal = document.getElementById("btnOpenModalMatch");

        const cancelModal = document.getElementById("cancelModalMatch");


        btnModal.onclick = function () {
            modalMatch.style.display = "block";
        }

        cancelModal.onclick = function () {
            modalMatch.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modalMatch) {
                modalMatch.style.display = "none";
            }
        }
    }
}