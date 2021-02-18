{
  "cart-transformer": component => {
    var limite = 299.90
    var restante = (limite - component.$$cart.subtotal)

    var progression = document.getElementById('pre-header-progression');

    if(restante > 0)
      progression.children[0].innerText = "R$ " + restante.toFixed(2);
    else
      progression.innerHTML = "<span>Parabéns! Você ganhou frete grátis</span>";
  }
}