window.PWA.buildStart('any', function () {
    console.log('nova página aberta');
  });
  
  window.PWA.previewStart('any', function () {
    console.log('nova página aberta');
  });
  
  
  function openSubmenu(menuItem) {
      menuItem.classList.add("active");
      document.querySelector('.submenu-list').classList.add("active");
  }
  function toggleSubmenu(menuItem) {
      menuItem.classList.add("active");
      document.querySelector('.submenu-list').classList.toggle("active");
  }
  function closeSubmenu(menuItem) {
      document.querySelector('.submenu-list').classList.remove("active");
      // menuItem.classList.remove("active");
      document.querySelector('.header-menu .menu-list .menu-item.active').classList.remove("active");
  }
  function openSubmenuSearch() {
      document.querySelector('.submenu-search').classList.add('active');
      document.querySelector('.form-search').classList.add('active');
      document.querySelector('.header-menu-user .menu-list').style.display = 'none';
  }
  function closeSubmenuSearch() {
      document.querySelector('.submenu-search').classList.remove("active");
      document.querySelector('.form-search').classList.remove('active');
      document.querySelector('.header-menu-user .menu-list').style.display = 'flex';
  }
  
  function toggleMenuMobile() {
      document.querySelector('.menu-mobile').classList.toggle('active');
  }
  function hideMenuMobile() {
      document.querySelector('.menu-mobile').classList.remove('active');
  }
  function fazerBusca(){
      var elem = document.getElementsByClassName('btn-search')[0];
      elem.click();
  }