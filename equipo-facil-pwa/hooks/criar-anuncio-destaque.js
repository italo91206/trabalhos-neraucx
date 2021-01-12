{
  '--criar-anuncio-prepara': component => {
    const cardFree = document.querySelector('#card-type-ad-free')

    cardFree.addEventListener('click', () => {

      const cardSelcect = cardFree

      cardPostPaid.classList.add('deselected')
      cardPostPaid.classList.remove('selected')
      cardFree.classList.remove('deselected')

      cardSelcect.classList.add('selected')

      const modalCardSelect = document.querySelector('.bg-super-destaque')
      const modalCardSelectPostPaid = document.querySelector('.pwa-post-paid-container')
      modalCardSelectPostPaid.style.display = 'none'


      if (cardSelcect.className === 'card-type-ad selected') {
        modalCardSelect.style.display = 'flex'

      }

      const inputPagCartao = document.querySelector('#pay-cartao')

      inputPagCartao.addEventListener('click', () => {
        const modalPayBoleto = document.querySelector('.d-pay-boleto')
        modalPayBoleto.style.display = 'none'
        const modalPayCard = document.querySelector('.pay-card')

        modalPayCard.style.display = 'block'
      })

      const inputPayBoleto = document.querySelector('#pay-boleto')
      inputPayBoleto.addEventListener('click', () => {
        const modalPayCard = document.querySelector('.pay-card')
        modalPayCard.style.display = 'none'


        const modalPayBoleto = document.querySelector('.d-pay-boleto')
        modalPayBoleto.style.display = 'block'
      })
    })


    function paymentCardConcluid() {
      const modalPayment = document.querySelector('.pwa-s-pay-ad')

      modalPayment.style.display = 'none'

      const modalConfirmPaymentCard = document.querySelector('.d-pay-confirmed')
      modalConfirmPaymentCard.style.display = 'flex'
    }


    const cardPostPaid = document.querySelector('#card-type-ad-post-paid')

    cardPostPaid.addEventListener('click', () => {

      cardFree.classList.add('deselected')
      cardFree.classList.remove('selected')
      cardPostPaid.classList.remove('deselected')


      cardPostPaid.classList.add('selected')

      const modalCardSelect = document.querySelector('.pwa-post-paid-container')
      const modalCardSelectFree = document.querySelector('.bg-super-destaque')
      modalCardSelectFree.style.display = 'none'


      if (cardPostPaid.className === 'card-type-ad selected') {
        modalCardSelect.style.display = 'block'

      }


    })

    // Abrir modal de endereço da page 07create-ad
    function modalSelectAddresVistoria() {
      const modalAddress = document.querySelector('.modal-select-address-bg')

      if (modalAddress.style.display === 'flex')
        return modalAddress.style.display = 'none'


      modalAddress.style.display = 'flex'
      window.scrollBy(0, -1000)

    }
  }
}