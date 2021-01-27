{
  "cart-on-toggle": () => {
      var cart = document.getElementById('ef-cart');
      var bkg = document.getElementById('ef-cart__darken');
      
      cart.classList.toggle('ef-aparece');
      bkg.classList.toggle('ef-aparece');
  },
  "--disable-cart": () => {
      var cart = document.getElementById('ef-cart');
      var bkg = document.getElementById('ef-cart__darken');
      
      cart.classList.remove('ef-aparece');
      bkg.classList.remove('ef-aparece');
  }
}