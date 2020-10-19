{
  "cart-transformer": component => {
      var progression = document.getElementsByClassName('se-frete-preenchimento');
      var total = (component.$$cart.subtotal*100)/199.00;

      for(var i=0; i<progression.length;i++)
        progression[i].style.width = total + "%";
  }
}