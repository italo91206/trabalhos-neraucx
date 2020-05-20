window.onload = function(){
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

    console.log(param.href);
}