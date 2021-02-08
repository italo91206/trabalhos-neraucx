{
  "--nv-help-submenu": component => {
    var PRIMARY_ACTIVE_CLASSNAME = "".concat("nv-", "is-active");
    var NAV_MENU_CLASSNAME = "".concat("nv-", "nav-menu");
    var NAV_MENU_ITEM_CLASSNAME = "".concat(NAV_MENU_CLASSNAME, "__item");
    var overlayElement = document.querySelector(".".concat("nv-", "overlay"));
    var superElement = document.getElementById('HelpSubmenu');
    var headerElement = document.getElementById('Header');
    var navMenuElement = document.querySelector(".".concat("nv-", "nav-menu"));
    if (superElement === null) return;
    var button = document.querySelector('.js-button-help');
    button.addEventListener('click', handler);

    function handler(evt) {
      var target = evt.target;
      var parent = target.closest(".".concat("nv-", "button__help"));
      if (parent === null) return;
      button.classList.toggle(PRIMARY_ACTIVE_CLASSNAME);
      superElement.classList.toggle(PRIMARY_ACTIVE_CLASSNAME);
      toggleHeaderState(superElement);
      toggleOverlayState(superElement);
      toggleNavMenuItemsState();
    }

    function toggleHeaderState(target) {
      if (target.classList.contains(PRIMARY_ACTIVE_CLASSNAME)) {
        headerElement.classList.add("".concat("nv-", "has-overlay"));
      } else {
        headerElement.classList.remove("".concat("nv-", "has-overlay"));
      }
    }

    function toggleOverlayState(target) {
      if (target.classList.contains(PRIMARY_ACTIVE_CLASSNAME)) {
        overlayElement.setAttribute('data-current-layer', 'header');
        overlayElement.classList.remove("".concat("nv-", "is-hidden"));
      } else {
        overlayElement.removeAttribute('data-current-layer');
        overlayElement.classList.add("".concat("nv-", "is-hidden"));
      }
    }

    function toggleNavMenuItemsState() {
      navMenuElement.querySelectorAll(".".concat(NAV_MENU_ITEM_CLASSNAME)).forEach(function (item) {
        return item.classList.remove("".concat("nv-", "is-active"));
      });
    }

    var modal = document.getElementById('SearchModal');
    var input_busca = document.getElementById('search-input');

    input_busca.addEventListener("keyup", function(e){
      if(e.key === "Enter"){
        input_busca.value = "";
        modal.classList.remove("nv-is-active");
      }
    })
  }
}