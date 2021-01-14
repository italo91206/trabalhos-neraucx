{
    "--slide-categorias-listagem-1": component =>{
        component.$slide('#slide-categorias-listagem-1', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 30,
            grabCursor: true
          });
    },
    "--slide-categorias-listagem-2": component =>{
        component.$slide('#slide-categorias-listagem-2', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 30,
            grabCursor: true
          });
    },
    '--prepara-filtros': component => {
        var acc = document.getElementsByClassName("pwa-list-collapse");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("pwa-active");

            var panel = this.nextElementSibling;
            if (panel.style.display === "none") {
            panel.style.display = "block";
            } else {
            panel.style.display = "none";
            }
        });
        }
    }
}