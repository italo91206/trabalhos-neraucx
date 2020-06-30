window.__lo_site_id = 95276;

(function() {
  var wa = document.createElement('script');
  wa.type = 'text/javascript';
  wa.async = true;
  wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wa, s);
})();

document.cookie = "store=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

require([
  'jquery'
], function(jQuery) {

  jQuery(document).ready(function() {
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
      } else if (jQuery(elem).find('.aitoc-puq-units').length == 2) {

        jQuery(elem).addClass('just-two-unit');
      }
    };
  })


});

require([
  'jquery'
], function(jQuery) {
  jQuery('.content-search-mobile .magnifying-glass').on('click', function() {
    jQuery('.content-search-mobile form').submit();
  })
  /****** ====================
          JS MENU MOBILE

  ************/
  jQuery('.span-new-menu').on('click', function() {
    if (jQuery(".search-new-menu").hasClass("new-height-search")) {
      jQuery('.search-new-menu').removeClass('new-height-search');

    } else {
      jQuery('.search-new-menu').addClass('new-height-search');
    }
  });

  jQuery('.openMobileMenu').click(function() {
    if (jQuery(".menuMobile-new").hasClass("menuClosed")) {

      jQuery('body').addClass('overflow-hidden');
      jQuery('.menuMobile-new').removeClass('menuClosed');
    } else {
      jQuery('.menuMobile-new').addClass('menuClosed');
      jQuery('body').removeClass('overflow-hidden');
    }
  });
  var elemOpened = false;
  jQuery('.main-conteudo-menu .main-option-menu').click(function() {

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
  jQuery('.backtomain-conteudo').on('click', function() {

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

  jQuery('.withsubmenu div').on('click', function() {
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

  jQuery(document).click(function(event) {
    var qtd = jQuery(event.target).parents('.menuMobile-new').length;

    if (qtd < 1 && !jQuery(event.target).is('.menuMobile-new') && !jQuery(event.target).is('.openMobileMenu') && !jQuery(event.target).is('.content-mobile')) {

      jQuery('.menuMobile-new').addClass("menuClosed");
      jQuery('body').removeClass('overflow-hidden');
    }
  });
  jQuery('.close-menu-mobile').on('click', function() {
    jQuery('.menuMobile-new').addClass("menuClosed");
    jQuery('body').removeClass('overflow-hidden');
  })

  jQuery("body").on('DOMSubtreeModified', ".showquote .counter-number", function() {
    var count = jQuery('.showquote .counter-number').html().length;
    if (count == 54) {
      jQuery('.showquote .counter.qty.empty').css({
        "left": "-6px"
      })
    } else if (count == 53) {
      jQuery('.showquote .counter.qty.empty').css({
        "left": "-2px"
      })
    } else if (count == 52) {
      jQuery('.showquote .counter.qty.empty').css({
        "left": "2px"
      })
    } else if (count == 55) {
      jQuery('.showquote .counter.qty.empty').css({
        "left": "-10px"
      })
    }
  });

  /*** ON CLICK TO SEARCH MOBILE  *****/
  jQuery('.lupa-mobile').on('click', function() {
    if (jQuery('.content-search-mobile').hasClass('esconde-search')) {
      jQuery('.content-search-mobile').removeClass('esconde-search');
      jQuery('.content-search-mobile').addClass('mostra-search');
    } else {
      jQuery('.content-search-mobile').removeClass('mostra-search');
      jQuery('.content-search-mobile').addClass('esconde-search');
    }
  });



});

//start Mixpanel
(function(c, a) {
  if (!a.__SV) {
    var b = window;
    try {
      var d, m, j, k = b.location,
        f = k.hash;
      d = function(a, b) {
        return (m = a.match(RegExp(b + "=([^&]*)"))) ? m[1] : null
      };
      f && d(f, "state") && (j = JSON.parse(decodeURIComponent(d(f, "state"))), "mpeditor" === j.action && (b.sessionStorage.setItem("_mpcehash", f), history.replaceState(j.desiredHash || "", c.title, k.pathname + k.search)))
    } catch (n) {}
    var l, h;
    window.mixpanel = a;
    a._i = [];
    a.init = function(b, d, g) {
      function c(b, i) {
        var a = i.split(".");
        2 == a.length && (b = b[a[0]], i = a[1]);
        b[i] = function() {
          b.push([i].concat(Array.prototype.slice.call(arguments,
            0)))
        }
      }
      var e = a;
      "undefined" !== typeof g ? e = a[g] = [] : g = "mixpanel";
      e.people = e.people || [];
      e.toString = function(b) {
        var a = "mixpanel";
        "mixpanel" !== g && (a += "." + g);
        b || (a += " (stub)");
        return a
      };
      e.people.toString = function() {
        return e.toString(1) + ".people (stub)"
      };
      l = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
      for (h = 0; h < l.length; h++) c(e, l[h]);
      var f = "set set_once union unset remove delete".split(" ");
      e.get_group = function() {
        function a(c) {
          b[c] = function() {
            call2_args = arguments;
            call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
            e.push([d, call2])
          }
        }
        for (var b = {}, d = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < f.length; c++) a(f[c]);
        return b
      };
      a._i.push([b, d, g])
    };
    a.__SV = 1.2;
    b = c.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ?
      MIXPANEL_CUSTOM_LIB_URL : "file:" === c.location.protocol && "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";
    d = c.getElementsByTagName("script")[0];
    d.parentNode.insertBefore(b, d)
  }
})(document, window.mixpanel || []);
mixpanel.init("e74ae2f394d2129d9c7492ce8cc18fea");
// end Mixpanel

require(['jquery', 'jquery/ui'], function($) {
  var insertall = 0;
  var urlpath = window.location.pathname;
  var backtocart = `
      <div class="w-100 backtocart" style="position: relative;">
          <a href="/checkout/cart" style="
          position: absolute;
          top: 11px;
          z-index: 20;
      ">&lt; Back to cart</a>
      </div>
  `;
  var backtoship = `
  <div class="w-100 backtoship"  style="position: relative;">
          <a style="
          position: absolute;
          top: 11px;
          z-index: 20;
      ">&lt; Back to Shipping</a>
      </div>
  `;
  jQuery(document).ajaxComplete(function() {
    if (urlpath.includes('checkout') && urlpath.includes('cart') == false) {
      var myvar = setInterval(function() {
        console.log('numero = ' + insertall);
        if (jQuery('.customBread').length == 0 && jQuery('.opc-progress-bar').length > 0) {
          console.log('insert customBread')
          var item = jQuery(jQuery('.opc-progress-bar-item')[0]).clone();
          jQuery(item).find('span').html('Cart');
          jQuery(item).addClass('customBread');
          jQuery(item).removeClass('_active');
          jQuery(item).prependTo('ul.opc-progress-bar');
          insertall++;
        }

        if (!jQuery('.security-layer').length) {
          jQuery('#maincontent.page-main').prepend(
            `
                      <div class="w-100 security-layer">
                              <div class="security container page-main">
                               <div style="float: right;position: relative;">
                                  <span style="
                                      top: 37px;
                                      position: absolute;
                                      left: -117px;
                                      margin-top: -20px;
                                  ">Secure Checkout</span><img src="/media/wysiwyg/security-checkout.png">
                                  </div>
                              </div>
                          </div>
                  `);
          insertall++;
        }
        if (jQuery('.newbutton-total').length == 0 && jQuery('.grand.totals span.price').length > 0) {
          jQuery('.opc-block-summary').append(`
                      <div class="primary">
                          <button style="float:right" class="action primary checkout newbutton-total" type="submit" title="Order Total">
                              <span data-bind="i18n: 'Place Order'">` + jQuery('.grand.totals span.price').html() + `</span>
                          </button>
                      </div>
                  `);
          insertall++;
        }

        if (window.location.href.includes('#payment') == false && jQuery('.backtocart').length == 0) {
          clearBack();
          jQuery(backtocart).insertBefore('.opc-progress-bar');
          insertall++;
        } else if (jQuery('.backtoship').length == 0 && window.location.href.includes('#payment') == true) {
          clearBack();
          jQuery(backtoship).insertBefore('.opc-progress-bar');
          insertall++;
        }

        if (!jQuery('.contactus-tel').length) {
          jQuery('#about-div-link').prepend(
            `
                      <div class="w-100 contactus-tel" style="
                          text-align: right;
                          font-weight: 600;
                          color: white;
                          padding-top: 7px;
                          padding-right: 8%;
                      ">Need help ? Contact us 888 766-2615</div>
                  `);
          insertall++;
        }

        if (!jQuery('.opc-block-summary .items-in-cart').hasClass('active')) {
          jQuery('.opc-block-summary .items-in-cart > .title').click();
          jQuery('.opc-block-summary .items-in-cart .product .toggle').each(function(item) {
            jQuery(this).click();
          });
        }

        if (insertall > 5) {
          console.log('clearInterval');
          clearInterval(myvar);
        }

      }, 100);
    }
    jQuery('.backtoship').on('click', function() {
      console.log('backtopship')
      var elem = jQuery(jQuery('.opc-progress-bar').children()[1]).find('span');
      jQuery(elem).click();
      clearBack();
      jQuery(backtocart).insertBefore('.opc-progress-bar');
    })
  });

  function clearBack() {
    jQuery('.backtocart').remove();
    jQuery('.backtoship').remove();
  }

  window.onhashchange = function() {
    var newurl = window.location.pathname;
    if (window.location.href.includes('#payment')) {
      if (window.location.href.includes('#payment') == false && jQuery('.backtocart').length) {
        clearBack();
        jQuery(backtocart).insertBefore('.opc-progress-bar');
      } else if (jQuery('.backtoship').length == 0 && window.location.href.includes('#payment') == true) {
        clearBack();
        jQuery(backtoship).insertBefore('.opc-progress-bar');
      }
    }
  }

  var checkMiniCartQuote = setInterval(function() {
    var cartQty = jQuery('.minicart-wrapper .counter-number').text();
    var quoteQty = jQuery('.miniquote-wrapper .counter-number').text();
    if (jQuery('.cart-mobile .counter').length == 0) {
      jQuery('.cart-mobile').append('<span class="counter">(<span class="counter-number">' + cartQty + '</span>)</span>');
      jQuery('.quote-mobile').append('<span class="counter">(<span class="counter-number">' + quoteQty + '</span>)</span>');
    } else {
      var cartMobileQty = jQuery('.cart-mobile .counter-number').text();
      if (cartQty != cartMobileQty) {
        jQuery('.cart-mobile .counter').remove();
        jQuery('.cart-mobile').append('<span class="counter">(<span class="counter-number">' + cartQty + '</span>)</span>');
      }

      var quoteMobileQty = jQuery('.quote-mobile .counter-number').text();
      if (quoteQty != quoteMobileQty) {
        jQuery('.quote-mobile .counter').remove();
        jQuery('.quote-mobile').append('<span class="counter">(<span class="counter-number">' + quoteQty + '</span>)</span>');
      }
    }
  }, 100);
});

// POS GO LIVE FIXES - ANDERSON
require(['jquery', 'jquery/ui'], function($) {
  var htmlLabel = '<div class="label-winter-buy"><img src="/media/amasty/amlabel/badge_open_for_business.png" /></di>';
  jQuery('.category-524 .product-image-container').each(function(elm) {
    jQuery(this).append(htmlLabel);
  });
  jQuery('.categorypath-open-for-business .product.media').each(function(elm) {
    jQuery(this).append(htmlLabel);
  });
});

(function() {

  window.ldfdr = window.ldfdr || {};
  (function(d, s, ss, fs) {
    fs = d.getElementsByTagName(s)[0];

    function ce(src) {
      var cs = d.createElement(s);
      cs.src = src;
      setTimeout(function() {
        fs.parentNode.insertBefore(cs, fs)
      }, 1);
    }

    ce(ss);
  })(document, 'script', 'https://sc.lfeeder.com/lftracker_v1_X0n7aEZ4446gNpPG.js');
})();

! function() {
  var analytics = window.analytics = window.analytics || [];
  if (!analytics.initialize)
    if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
    else {
      analytics.invoked = !0;
      analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"];
      analytics.factory = function(t) {
        return function() {
          var e = Array.prototype.slice.call(arguments);
          e.unshift(t);
          analytics.push(e);
          return analytics
        }
      };
      for (var t = 0; t < analytics.methods.length; t++) {
        var e = analytics.methods[t];
        analytics[e] = analytics.factory(e)
      }
      analytics.load = function(t, e) {
        var n = document.createElement("script");
        n.type = "text/javascript";
        n.async = !0;
        n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(n, a);
        analytics._loadOptions = e
      };
      analytics.SNIPPET_VERSION = "4.1.0";
      analytics.load("AQSY8nGokC1orEV1oL6Z7A1jfZ3cN6Cv");
      analytics.page();
    }
}();