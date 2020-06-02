window.onload = function(){
    var elem = jQuery("nav#st-main-menu ul#main-menu");
    elem.append(`<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item" style="color: grey" id="social-menu-list-item">`+
        `<i class="fa fa-instagram"></i>`+
        `<i class="fa fa-facebook-f"></i>`+
        `<i class="fa fa-whatsapp"></i>`+
        `<i class="fa fa-youtube"></i>`+
        `<i class="fa fa-google-plus"></i><i class="fa fa-skype"></i>`+
    `</li>`);
}