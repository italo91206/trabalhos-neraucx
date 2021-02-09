{
  "--nv-nav-menu": component => {
    var PRIMARY_ACTIVE_CLASSNAME = "".concat("nv-", "is-active");
    var NAV_MENU_ITEM_CLASSNAME = "".concat("nv-", "nav-menu__item");
    var overlayElement = document.querySelector(".".concat("nv-", "overlay"));
    var headerElement = document.getElementById('Header');
    // var superSelector = ".".concat("nv-", "nav-menu");
    // var superSelector = ".nv-nav-menu";
    // var superElement = document.querySelector(superSelector);
    var superElement = document.querySelector(".nv-nav-menu");
    var helpButtonElement = document.querySelector(".js-button-help");
    var helpSubmenuElement = document.getElementById('HelpSubmenu');
    if (superElement === null) return;
    // superElement.addEventListener('click', handler);

    function handler(evt) {
      var target = evt.target;
      var parent = target.closest(".".concat(NAV_MENU_ITEM_CLASSNAME));
      if (parent.classList.contains(PRIMARY_ACTIVE_CLASSNAME) && target !== parent && target.tagName !== 'A') return;
      if (!parent.classList.contains("".concat("nv-", "has-submenu"))) return;
      if (evt) evt.stopPropagation();
      superElement.querySelectorAll(".".concat(NAV_MENU_ITEM_CLASSNAME)).forEach(closeItem.bind(parent));
      openItem(parent);
      toggleHeaderState(parent);
      toggleOverlayState(parent);
      toggleHelpSubmenuState(parent);
    }

    function closeItem(item) {
      var currentItem = this || {};
      if (item === currentItem) return;
      item.classList.remove(PRIMARY_ACTIVE_CLASSNAME);
    }

    function openItem(item) {
      item.classList.toggle(PRIMARY_ACTIVE_CLASSNAME);
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

    function toggleHelpSubmenuState(target) {
      if (target.classList.contains(PRIMARY_ACTIVE_CLASSNAME)) {
        helpSubmenuElement.classList.remove("".concat("nv-", "is-active"));
        helpButtonElement.classList.remove("".concat("nv-", "is-active"));
      }
    }
  }
}