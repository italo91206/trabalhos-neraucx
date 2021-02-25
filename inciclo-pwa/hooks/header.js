{
    "--in-header": component => {

        // Search
        var btnHeaderSearch = document.querySelector('.pwat-header-search a')
        var btnCloseSearch = document.querySelector('.pwat-input-search a')
        var searchInput = document.querySelector('.pwat-input-search')
        var campoSeachInput = document.querySelector('.pwat-search input')

        // Menu mobile
        var btnBurguer = document.querySelector('.pwat-icon-burguer')
        var menuMobile = document.querySelector('.pwat-menu-mobile')

        // Menu hover
        var btnNossosProdutos = document.querySelector('.pwat-btn-nossos-produtos')
        var hoverMenu = document.querySelector('.pwat-hover-menu')

        // Accordion Nossos produtos
        var btnAccoNossoPro = document.querySelector(".pwat-accordion-menu")

        // Itens menu close
        var itensMenu = document.querySelectorAll(".pwat-item-menu")

        function closeClickWindow(event) {
            if (!event.target.matches('.pwat-header-search a') && !event.target.closest('.pwat-input-search')
                && !event.target.matches('.pwat-icon-burguer') && !event.target.closest('.pwat-menu-mobile')) {
                searchInput.classList.remove('pwat-active')
                menuMobile.classList.remove('pwat-active')
                // campoSeachInput.value = ""; // Isso foi comentado
                window.removeEventListener("click", closeClickWindow)
            }
        }

        for(let i = 0; i < itensMenu.length; i++) {
            itensMenu[i].addEventListener('click', function(){
                hoverMenu.classList.remove('pwat-active')
                menuMobile.classList.remove('pwat-active')
                console.log(itensMenu[i])
                return
            } )
        }

        /* START HOVER MENU */
        btnNossosProdutos.addEventListener('mouseover', function (e) {
            e.preventDefault()
            hoverMenu.classList.add('pwat-active')
            searchInput.classList.remove('pwat-active')
        })

        btnNossosProdutos.addEventListener('mouseleave', function () { hoverMenu.classList.remove('pwat-active') })

        hoverMenu.addEventListener('mouseover', function () {
            hoverMenu.classList.add('pwat-active')
            searchInput.classList.remove('pwat-active')
        })

        hoverMenu.addEventListener('mouseleave', function () { hoverMenu.classList.remove('pwat-active') })

        /* END HOVER MENU */

        // Abrir pesquisa
        btnHeaderSearch.addEventListener('click', function () {
            // e.preventDefault()
            // searchInput = document.querySelector('.pwat-input-search')
            // campoSeachInput = document.querySelector('.pwat-search input')
            if (searchInput.classList.contains('pwat-active')){
                // console.log('Retorno deu true; mas será?')
                // console.log(searchInput.classList.contains('pwat-active'))
                // console.log(searchInput);
                searchInput.classList.remove('pwat-active')
            }else {
                // console.log('Retorno deu false; mas será?')
                // console.log(searchInput.classList.contains('pwat-active'))
                // console.log(searchInput);
                searchInput.classList.add('pwat-active')
                menuMobile.classList.remove('pwat-active')
                campoSeachInput.focus()
                // window.addEventListener("click", closeClickWindow)
            }
        })

        campoSeachInput.addEventListener("keyup", function (e) {
            searchInput = document.querySelector('.pwat-input-search')
            if (e.key === "Enter" || e.key === "Escape") {
                campoSeachInput.value = "";
                searchInput.classList.remove("pwat-active");
            }
        })

        menuMobile.addEventListener("keyup", function (e) {
            if (e.key === "Escape") {
                menuMobile.classList.remove("pwat-active");
            }
        })
        // Fechar modal pelo click no "X"
        btnCloseSearch.addEventListener('click', function (e) {
            e.preventDefault()
            searchInput.classList.remove('pwat-active')
            // campoSeachInput.value = ""; // Isso foi comentado
            window.removeEventListener("click", closeClickWindow)
        })

        

        btnAccoNossoPro.addEventListener('click', function (e) {
            e.preventDefault()
            this.classList.toggle('pwat-is-open')
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null
                content.style.paddingBottom = 0 + "px"
                content.style.paddingTop = 0 + "px"
            } else {
                content.style.maxHeight = content.scrollHeight + 100 + "px"
                content.style.paddingBottom = 8 + "px"
                content.style.paddingTop = 4 + "px"
            }
        })

        btnBurguer.addEventListener('click', function (e) {
            e.preventDefault()
            // menuMobile.classList.toggle('pwat-active')
            searchInput = document.querySelector('.pwat-input-search')
            campoSeachInput = document.querySelector('.pwat-search input')
            if (menuMobile.classList.contains('pwat-active')) {
                menuMobile.classList.remove('pwat-active')
            } else {
                menuMobile.classList.add('pwat-active')
                campoSeachInput.value = "";
                searchInput.classList.remove('pwat-active')
                window.addEventListener("click", closeClickWindow)
            }

            // window.addEventListener("click", closeClickWindow)
            // searchInput.classList.remove('pwat-active')
        })

    }

}