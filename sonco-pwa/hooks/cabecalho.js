{
    "--ajuste-menu": component => {
        var submenu = document.getElementsByClassName('sc-menu');
        
        var crowdcontrol_buttton = document.getElementsByClassName('sc-menu-main__item sc-menu-main__item--barricades');
        var customsigns_button = document.getElementsByClassName('sc-menu-main__item sc-menu-main__item--signs');
        var fencesolutions_button = document.getElementsByClassName('sc-menu-main__item sc-menu-main__item--fences');
        var stanchions_button = document.getElementsByClassName('sc-menu-main__item sc-menu-main__item--stanchions');
        var traffic_button = document.getElementsByClassName('sc-menu-main__item sc-menu-main__item--traffic');

        submenu = submenu[0];

        crowdcontrol_buttton = crowdcontrol_buttton[0];
        customsigns_button = customsigns_button[0];
        fencesolutions_button = fencesolutions_button[0];
        stanchions_button = stanchions_button[0];
        traffic_button = traffic_button[0];

        crowdcontrol_buttton.addEventListener("mouseover", function () {
            submenu.style.width = "1130px"
        })
        crowdcontrol_buttton.addEventListener("mouseleave", function () {
            submenu.style.width = "256px"
        })

        customsigns_button.addEventListener("mouseover", function () {
            submenu.style.width = "1130px"
        })
        customsigns_button.addEventListener("mouseleave", function () {
            submenu.style.width = "256px"
        })

        fencesolutions_button.addEventListener("mouseover", function () {
            submenu.style.width = "1130px"
        })
        fencesolutions_button.addEventListener("mouseleave", function () {
            submenu.style.width = "256px"
        })

        stanchions_button.addEventListener("mouseover", function () {
            submenu.style.width = "1262px"
        })
        stanchions_button.addEventListener("mouseleave", function () {
            submenu.style.width = "256px"
        })

        traffic_button.addEventListener("mouseover", function () {
            submenu.style.width = "1325px"
        })
        traffic_button.addEventListener("mouseleave", function () {
            submenu.style.width = "256px"
        })

        var applicationsMenu = document.getElementById('sc-applications-menu');
        var buttonShopBy = document.querySelector('.sc-top-nav__item--shopby');

        applicationsMenu.addEventListener("mouseleave", function(){
            applicationsMenu.classList.remove('ativo');
        })

        /**
         * Especifico para Shop By Application 
         * */
        buttonShopBy.addEventListener("mouseover", function(){
            if(!buttonShopBy.classList.contains('ativo'))
                buttonShopBy.classList.add('ativo');
        });

        buttonShopBy.addEventListener("mouseleave", function(){
            if(buttonShopBy.classList.contains('ativo'));
                buttonShopBy.classList.remove('ativo');
        });

        document.querySelector('#sc-menu-container ul').addEventListener("click", () => {
            if (window.innerWidth > 1024) {
                document.querySelector('.sc-menu').classList.remove('ativo');
                buttonShopBy.classList.remove('ativo');
                applicationsMenu.classList.remove('ativo');
            }
        });
    },
    "--menuMobilePreparation": component => {
        let menu = document.getElementById("sc-mobile-menu")
        let items = menu.children
        let submenu = document.getElementsByClassName("sc-submenu")
        let botoesRetorno = document.getElementsByClassName("sc-top-nav__getback")
        let subitem = document.querySelectorAll('.sc-top-nav__subitem a')
        /* vars two submenu */
        let twoNivelSubmenu = document.getElementById("sc-submenu-three")
        let items02 = twoNivelSubmenu.children
        let submenutwo = document.getElementsByClassName("sc-submenu-two-list")

        /* function define link clicked */
        function qualApertei(elem){
            var resultado = 0;
            for(var i=0; i< items.length && items[i] != elem; i++){
                resultado++;
            }
            return resultado;
        }

        /* function open submenu */
        function abreSubMenu(num){
            menu.classList.add('sc-submenu-closed');
            submenu[num].classList.remove('sc-submenu-closed');
        }

        /* function close submenu */
        function fechaSubMenu(){
            for(var i=0; i< items.length; i++){
                if(!submenu[i].classList.contains('sc-submenu-closed'))
                    submenu[i].classList.add('sc-submenu-closed');
            }
            menu.classList.remove('sc-submenu-closed');
        }

        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener("click", function () {
                var num = qualApertei(this);
                abreSubMenu(num);
            });
        }

        for (var i = 0; i < botoesRetorno.length; i++) {
            botoesRetorno[i].addEventListener("click", function () {
                fechaSubMenu();
            })
        }
        
        /* SUBMENU 02 */
        function elementClick(elem){
            let resultado = 0;
            for(let i=0; i< items02.length && items02[i] != elem; i++){
                resultado++;
            }
            return resultado;
        }

        function abreSubMenuTwo(num02){
            twoNivelSubmenu.classList.add('sc-submenu-closed');
            submenutwo[num02].classList.remove('sc-submenu-closed');
        }

        function fechaSubMenuTwo(){
            for(let i=0; i< items02.length; i++){
                if(!submenutwo[i].classList.contains('sc-submenu-closed'))
                submenutwo[i].classList.add('sc-submenu-closed');
            }
            twoNivelSubmenu.classList.remove('sc-submenu-closed');
        }

        for (let i = 0; i < items02.length; i++) {
            items02[i].addEventListener("click", function () {
                let num02 = elementClick(this);
                abreSubMenuTwo(num02 - 1);
            });
        }

        for (let i = 0; i < botoesRetorno.length; i++) {
            botoesRetorno[i].addEventListener("click", function () {
                fechaSubMenuTwo();
            })
        }

        // for(var i=0; i<subitem.length; i++){
        //     if (!subitem[i].classList.contains("sc-top-nav__getback")) {
        //         subitem[i].addEventListener("click", function(){
        //                 closeMenuMobile();
        //         })
        //     }
        // }

        for(var i=0; i<subitem.length; i++){
            subitem[i].addEventListener("click", function(){
                    closeMenuMobile();
            })
        }
    },
    "--ativadorTopBar": component =>{
        var about_us = document.getElementsByClassName('sc-header-contact__about')
        var top_bar = document.getElementById('sc-about-top');
        var icone = document.getElementsByClassName('svg-inline--fa fa-angle-down fa-w-10');
        //var linksSelect = document.querySelectorAll(".sc-about_box a");

        about_us = about_us[0];

        about_us.addEventListener("click", function(){
            if (!top_bar.classList.contains('active')){
                icone[0].classList.add('girar');
                top_bar.classList.add('active');
            }
            else{
                icone[0].classList.remove('girar');
                top_bar.classList.remove('active');  
            }
        })

        top_bar.addEventListener("click", () => {
            top_bar.classList.remove("active");
        })

        // for(var i = 0; i < linksSelect.length; i++) {
        //     linksSelect[i].addEventListener("click", () => {
        //         top_bar.classList.remove("active");
        //     })
        // }
    },
    "--ajuste-menu-ourProducts": component =>{
        var buton = document.getElementsByClassName('sc-top-nav__item--categories')[0];
        var menu = document.getElementsByClassName('sc-menu')[0];
        var links = document.getElementsByClassName('sc-menu-sub__link')

        buton.addEventListener("mouseover", function(){
            menu.classList.add("ativo");
        })

        buton.addEventListener("mouseleave", function(){
            menu.classList.remove("ativo");
        })

        menu.addEventListener("mouseleave", function(){
            menu.classList.remove("ativo");
        })
        for (var i=0; i<links.length; i++)
            links[i].addEventListener("click", function(){
                menu.classList.remove("ativo");
            })
    },

    "--close-menu-items": component => {
        let menuNavHover = document.querySelectorAll('.sc-item-especifit');
        let menuItem = document.querySelectorAll('.sc-items-menu-nav');
        let subItemsList = document.querySelectorAll('.sc-sonco-header-list');

        // Percorrer por todos os elementos selecionados
        for(let i = 0; i < menuNavHover.length; i++) {
            // Evento de hover para adicionar a class responsável por exibir o menu com as opções
            menuNavHover[i].addEventListener("mouseover", function(){
                menuItem[i].classList.add('ativo-menu-items');
            });

            // Evento responsável por remover a class responsável por exibir menu
            menuItem[i].addEventListener("mouseleave", function(){
                menuItem[i].classList.remove('ativo-menu-items');
            });

            // Evento de clique responsável por remover a class responsável por exibir menu
            subItemsList[i].addEventListener("click", function(){
                menuItem[i].classList.remove('ativo-menu-items');
            });
        }
    }
}