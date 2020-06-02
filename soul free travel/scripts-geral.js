window.onload = function(){

    // ========================
    // pra adicionar troca de idioma e consequentemente da moeda
    // ========================

    var ToEnglish = jQuery(".st-list").children()[3];
    var ToPortuguese = jQuery(".st-list").children()[4];
    
    jQuery(ToEnglish).addClass("toEnglish");
    jQuery(ToPortuguese).addClass("toPortuguese");

    var atual = window.location.href;
    var tem = atual.includes("/en/");
    var final = "";
    var param = "";

    if(tem){
        // quero poder ir pra português
        jQuery(".st-list").children()[3].remove()
        var partes = atual.split(".com.br/en/");
        final = partes[0];
        final = final.concat(".com.br/");
        final = final.concat(partes[1]);
        param = new URL(final);
        param.searchParams.set("currency", "BRL");
        this.console.log("Tinha!");
    }
    else{
        // quero poder ir pra inglês
        var partes = atual.split(".com.br/");
        final = partes[0];
        final = final.concat(".com.br/en/");
        final = final.concat(partes[1]);
        param = new URL(final);
        param.searchParams.set("currency", "EUR");
        jQuery(".st-list").children()[4].remove()
        this.console.log("Não tinha!");
    }
    
    var link = jQuery(".st-list").children()[3];
    link = jQuery(link).children()[0];
    jQuery(link).attr("href", param.href);

    // ========================
    // pra adicionar os icones mobile
    // ========================

    var elem = jQuery("nav#st-main-menu ul#main-menu");
    elem.append(`<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item mobile" style="color: grey" id="social-menu-list-item">`+
        `<i class="fa fa-instagram"></i>`+
        `<i class="fa fa-facebook-f"></i>`+
        `<i class="fa fa-whatsapp"></i>`+
        `<i class="fa fa-youtube"></i>`+
        `<i class="fa fa-google-plus"></i><i class="fa fa-skype"></i>`+
    `</li>`);
}