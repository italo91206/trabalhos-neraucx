window.onload = function(){
    jQuery(".opcao i.fa").click(function(){
        var opcao = jQuery(".opcao i.fa");
        if(jQuery(opcao).hasClass("fa-bars")){
            jQuery(opcao).removeClass("fa-bars");
            jQuery(opcao).addClass("fa-close");
            jQuery("#menu").removeClass("hidden");
        }
        else{
            jQuery(opcao).removeClass("fa-close");
            jQuery(opcao).addClass("fa-bars");
            jQuery("#menu").addClass("hidden");
        }
    });
}
