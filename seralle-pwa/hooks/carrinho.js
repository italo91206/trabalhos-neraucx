{
  "cart-transformer": component => {
    var progression = document.getElementsByClassName('se-frete-preenchimento')[0];
    var total = (component.$$cart.subtotal*100)/199.00;
    progression.style.width = total + "%";
  }
}