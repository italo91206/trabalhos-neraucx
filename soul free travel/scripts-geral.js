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

    var signup = jQuery("a.signup");
    var login = jQuery("a.login");

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
        signup.html("sign up +");
        login.html("login +");
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
        signup.html("cadastrar +");
        login.html("entrar +");
    }
    
    var link = jQuery(".st-list").children()[3];
    link = jQuery(link).children()[0];
    jQuery(link).attr("href", param.href);

    // ========================
    // pra adicionar os icones mobile
    // ========================

    var elem = jQuery("nav#st-main-menu ul#main-menu");
    elem.append(`<li class="mobile" style="color: grey;" id="social-menu-list-item">`+
        `<a href="https://www.instagram.com/soulfreetravels/" class="margin-left-fix" target="_blank"><i class="fa fa-instagram"></i></a>`+
        `<a href="https://www.facebook.com/soulfreetravelss/" target="_blank"><i class="fa fa-facebook-f"></i></a>`+
        `<a href="https://wa.me/393477578178" target="_blank"><i class="fa fa-whatsapp"></i></a>`+
        `<a href="mailto:info@soulfreetravel.com.br" target="_blank"><i class="fa fa-envelope"></i></a>` +
        `<a href="https://www.youtube.com/channel/UCVBD7V2Etnpjphd-0lhRGGQ/" target="_blank"><i class="fa fa-youtube"></i></a>`+
        `<a href="" target="_blank"><i class="fa fa-skype"></i></a>`+
    `</li>`);

    var loginLink = jQuery("a.login");
    var botaoFechar = jQuery("div.modal-header button.close");

    loginLink.click(function(){
        var modal = jQuery("#st-login-form");
        modal.addClass('modal-aberto');
    });

    botaoFechar.click(function(){
        var modal = jQuery("#st-login-form");
        modal.removeClass('modal-aberto');
    });

    jQuery("#fecharMenu").click(function(){
        jQuery("#abrirMenu").removeClass("hidden");
        jQuery("#fecharMenu").addClass("hidden");
        jQuery("nav#st-main-menu").removeClass("open");
    });

    jQuery("#abrirMenu").click(function(){
        jQuery("#abrirMenu").addClass("hidden");
        jQuery("#fecharMenu").removeClass("hidden");
    });

    // ==================
    // pra adicionar filtros
    // ==================

    jQuery("#input_st_phone").mask('+000 (00) 00000-0000');
    jQuery("#telephone-8962").mask('+000 (00) 00000-0000');
}