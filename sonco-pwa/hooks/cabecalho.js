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

        var applicationsMenu = document.getElementById('sc-applications-menu')
        var buttonShopBy = document.getElementsByClassName('sc-top-nav__item--shopby')[0];

        buttonShopBy.addEventListener("mouseover", function(){
            if(!applicationsMenu.classList.contains('ativo'))
                applicationsMenu.classList.add('ativo');
        })

        applicationsMenu.addEventListener("mouseleave", function(){
            applicationsMenu.classList.remove('ativo');
        })
        
    },
    "--menuMobilePreparation": component => {
        var menu = document.getElementById("sc-mobile-menu")
        var items = menu.children
        var submenu = document.getElementsByClassName("sc-submenu")
        var botoesRetorno = document.getElementsByClassName("sc-top-nav__getback")
        var subitem = document.getElementsByClassName('sc-top-nav__subitem')

        function qualApertei(elem){
            var resultado = 0;
            for(var i=0; i< items.length && items[i] != elem; i++){
                resultado++;
            }
            return resultado;
        }

        function abreSubMenu(num){
            menu.classList.add('sc-submenu-closed');
            submenu[num].classList.remove('sc-submenu-closed');
        }

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

        function zerarEstado(){
            for(var i=0; i<botoesRetorno.length; i++)
                botoesRetorno[i].click();
            closeMenuMobile();
        }

        for(var i=0; i<subitem.length; i++){
            subitem[i].addEventListener("click", function(){
                zerarEstado();
            })
        }
        
    },
    "--ativadorTopBar": component =>{
        var about_us = document.getElementsByClassName('sc-header-contact__about')
        var top_bar = document.getElementById('sc-about-top');
        var icone = document.getElementsByClassName('svg-inline--fa fa-angle-up fa-w-10');

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
    },
    "--ajuste-menu-ourProducts": component =>{
        var buton = document.getElementsByClassName('sc-top-nav__item--categories')[0];
        var menu = document.getElementsByClassName('sc-menu')[0];
        var links = document.getElementsByClassName('sc-menu-sub__link')

        buton.addEventListener("mouseover", function(){
            menu.classList.add("ativo");
        })
        menu.addEventListener("mouseleave", function(){
            menu.classList.remove("ativo");
        })
        for (var i=0; i<links.length; i++)
            links[i].addEventListener("click", function(){
                menu.classList.remove("ativo");
            })
    }
}