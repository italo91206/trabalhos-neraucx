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
    jQuery("a").click(function () { // Use all anchor tags with an href that starts with #
        var href = $(this).attr('href'); // Get the href for the clicked anchor.
        jQuery(href).addClass( "animated swing" ); // The href is the same as the id.
        jQuery('html, body').animate({
            scrollTop: jQuery(href).offset().top
        }, 500);
        return false;
    });
}
