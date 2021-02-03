{
    "--select-account-type": component => {
        var accountJustBuy = document.querySelector('.pwat-account-just-buy');
        var accountBuyAndSell = document.querySelector('.pwat-account-buy-and-sell');
        var formAccountType = document.querySelector('.pwat-form-account-type');

        accountJustBuy.addEventListener('click', function () {
            typeSelected(accountJustBuy, accountBuyAndSell);
            formAccountType.classList.remove('show-form-account-type');
        });
        accountBuyAndSell.addEventListener('click', function () {
            typeSelected(accountBuyAndSell, accountJustBuy);
            formAccountType.classList.add('show-form-account-type');
        });

        function typeSelected(type, removeType) {
            type.classList.add('pwat-tipo-conta-selecionado');
            removeType.classList.remove('pwat-tipo-conta-selecionado');
            document.querySelector('.pwat-btn-avancar-passo-3').disabled = false;
        }
    },

     "--create-account-categorias-slide": component => {
    component.$slide('#categoria-slide', {
      slidesPerView: window.innerWidth < 1024 ? 'auto' : '3',
      // spaceBetween: window.innerWidth < 1024 ? 0 : 20,
      // spaceBetween: window.innerWidth < 768 ? 0 : 20,
      spaceBetween: 20,
      grabCursor: true
      }
    );
  },
 
    "--abrir-modal-pf-passo-3": component => {
        const modalPhoto = document.getElementById("modal-photo");

        const btnModalPhoto = document.querySelector(".pwa-add-photo");

        const fechaModal = document.getElementById("fecharModalPhoto");


        btnModalPhoto.onclick = function () {
            modalPhoto.style.display = "block";
            console.log('clicou');
        }

        fechaModal.onclick = function () {
            modalPhoto.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modalPhoto) {
                modalPhoto.style.display = "none";
            }
        }
    }
}