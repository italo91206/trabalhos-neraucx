window.__lo_site_id = 95276;

(function () {
  var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
  wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
})();



document.cookie = "store=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


require([
  'jquery'
], function (jQuery) {

  jQuery(document).ready(function () {
    for (var i = 0; i < jQuery('.product-item-inner').length; i++) {
      var elem = jQuery('.product-item-inner')[i];
      var price = jQuery(elem).find('.price');
      var value = jQuery(price).html();
      value = value.length;
      if (value == 7) {
        jQuery(elem).addClass('amount-three-aitoc');
      } else if (value == 6) {
        jQuery(elem).addClass('amount-two-aitoc');

      } else if (value == 9) {
        jQuery(elem).addClass('amount-nine-aitoc');
      } else if (value == 5) {
        jQuery(elem).addClass('amount-four-aitoc');
      }
      if (jQuery(elem).find('.aitoc-puq-units').length == 1) {

        jQuery(elem).addClass('just-one-unit');
      }
      else if (jQuery(elem).find('.aitoc-puq-units').length == 2) {

        jQuery(elem).addClass('just-two-unit');
      }
    };
  })


});

require([
  'jquery'
], function (jQuery) {
  jQuery('.content-search-mobile .magnifying-glass').on('click', function () {
    jQuery('.content-search-mobile form').submit();
  })
  /****** ====================
          JS MENU MOBILE

  ************/
  jQuery('.span-new-menu').on('click', function () {
    if (jQuery(".search-new-menu").hasClass("new-height-search")) {
      jQuery('.search-new-menu').removeClass('new-height-search');

    } else {
      jQuery('.search-new-menu').addClass('new-height-search');
    }
  });

  jQuery('.openMobileMenu').click(function () {
    if (jQuery(".menuMobile-new").hasClass("menuClosed")) {

      jQuery('body').addClass('overflow-hidden');
      jQuery('.menuMobile-new').removeClass('menuClosed');
    } else {
      jQuery('.menuMobile-new').addClass('menuClosed');
      jQuery('body').removeClass('overflow-hidden');
    }
  });
  var elemOpened = false;
  jQuery('.main-conteudo-menu .main-option-menu').click(function () {

    for (var i = 0; i < jQuery('.content-menu-mobile ul').children().length; i++) {
      if (jQuery('.content-menu-mobile ul').children()[i] == this) {

        jQuery('.backtomain-conteudo').html(jQuery(this).find('span').html());
        var element = jQuery('.lista_menu_mobile')[++i];
        jQuery('.content-menu-mobile').addClass('aberto-sub');
        elemOpened = element;
        if (jQuery(element).hasClass('closed-newmenu'))
          jQuery(element).removeClass('closed-newmenu');
        else
          jQuery(element).addClass('closed-newmenu');
      }
    }
  });

  var sublast_opened = false;
  jQuery('.backtomain-conteudo').on('click', function () {

    if (sublast_opened) {
      jQuery(sublast_opened).removeClass('closed-newmenu');
      jQuery('.aftersub-content .sublista_menu_mobile').addClass('closed-newmenu');
      sublast_opened = false;
    } else {
      jQuery('.content-menu-mobile').removeClass('aberto-sub');
      jQuery('.subcontent-menu').addClass('closed-newmenu');
      jQuery(elemOpened).addClass('closed-newmenu');
      elemOpened = false;

    }

  });

  jQuery('.withsubmenu div').on('click', function () {
    for (var i = 0; i < jQuery(this).parent().children().length; i++) {
      var isof = jQuery(jQuery(this).parent()).attr('isof');
      if (jQuery(this).parent().children()[i] == this) {
        sublast_opened = jQuery(this).parent();
        jQuery(sublast_opened).addClass('closed-newmenu');


        jQuery('.aftersub-content.' + isof).addClass('closed-newmenu');
        var elem = jQuery('.aftersub-content.' + isof).children()[i];

        jQuery(elem).removeClass('closed-newmenu');

      }

    }
  });

  jQuery(document).click(function (event) {
    var qtd = jQuery(event.target).parents('.menuMobile-new').length;

    if (qtd < 1 && !jQuery(event.target).is('.menuMobile-new') && !jQuery(event.target).is('.openMobileMenu') && !jQuery(event.target).is('.content-mobile')) {

      jQuery('.menuMobile-new').addClass("menuClosed");
      jQuery('body').removeClass('overflow-hidden');
    }
  });
  jQuery('.close-menu-mobile').on('click', function () {
    jQuery('.menuMobile-new').addClass("menuClosed");
    jQuery('body').removeClass('overflow-hidden');
  })

  jQuery("body").on('DOMSubtreeModified', ".showquote .counter-number", function () {
    var count = jQuery('.showquote .counter-number').html().length;
    if (count == 54) {
      jQuery('.showquote .counter.qty.empty').css({ "left": "-6px" })
    } else if (count == 53) {
      jQuery('.showquote .counter.qty.empty').css({ "left": "-2px" })
    } else if (count == 52) {
      jQuery('.showquote .counter.qty.empty').css({ "left": "2px" })
    } else if (count == 55) {
      jQuery('.showquote .counter.qty.empty').css({ "left": "-10px" })
    }
  });

  /*** ON CLICK TO SEARCH MOBILE  *****/
  jQuery('.lupa-mobile').on('click', function () {
    if (jQuery('.content-search-mobile').hasClass('esconde-search')) {
      jQuery('.content-search-mobile').removeClass('esconde-search');
      jQuery('.content-search-mobile').addClass('mostra-search');
    } else {
      jQuery('.content-search-mobile').removeClass('mostra-search');
      jQuery('.content-search-mobile').addClass('esconde-search');
    }
  });
});