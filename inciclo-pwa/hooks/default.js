{
  "--prepara-hover": component => {
    /* START Dropdown procuct size */

    var accordionSize = document.querySelectorAll(".pwat-accordion-size")

    for (var i = 0; i < accordionSize.length; i++) {
      accordionSize[i].addEventListener('mouseover', function (e) {
        var content = this.nextElementSibling;
        let buttonAccordion = this
        buttonAccordion.classList.add('pwat-btn-active')

        content.classList.add('pwat-content-active')

        content.addEventListener('mouseover', function (e) {
          content.style.maxHeight = content.scrollHeight + 100 + "px"
          content.classList.add('pwat-content-active')
          buttonAccordion.classList.add('pwat-btn-active')
        })

        content.addEventListener('mouseleave', function (e) {
          content.style.maxHeight = null
          content.classList.remove('pwat-content-active')
          buttonAccordion.classList.remove('pwat-btn-active')
        })
        content.style.maxHeight = content.scrollHeight + 100 + "px"

        buttonAccordion.addEventListener('click', function (e) {
          e.preventDefault();
        })

        checkBoxSize()
      })

      accordionSize[i].addEventListener('mouseleave', function (e) {
        var content = this.nextElementSibling;
        content.style.maxHeight = null
        content.classList.remove('pwat-content-active')
        this.classList.remove('pwat-btn-active')
      })
    }

    function checkBoxSize() {
      var radioSize = document.querySelectorAll('.pwat-label-kit input')
      for (var i = 0; i < radioSize.length; i++) {
        radioSize[i].addEventListener('click', function () {
          var pCheck = document.getElementsByClassName("pwat-p-" + this.id)[0].textContent
          var btnCheck = document.getElementsByClassName('pwat-btn-' + this.name)[0]
          btnCheck.innerText = pCheck
        })
      }
    }
    /* END Dropdown procuct size */
  }
}