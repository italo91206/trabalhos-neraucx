{
    "--on-product-page": component => {
        component.$slide('#summary-ad-swiper-images', {

            slidesPerView: 1,
            navigation: {
                nextEl: '#swiper-botao-next',
                prevEl: '#swiper-botao-prev',
            },

        });
    },

    "--open-finance-modal-mobile":component =>{
        var btnFinance = document.querySelector('#btn-Finance-mobile');
        var closeBtnFinance = document.querySelector(".pwat-close-modalFinance-mobile");

        btnFinance.addEventListener("click", function(){
            document.querySelector('#modalFinance-mobile').classList.add('pwat-open-modal');
            console.log('clicou');
        });

        closeBtnFinance.addEventListener('click', function(){
            document.querySelector('#modalFinance-mobile').classList.remove('pwat-open-modal');
        });

    },

        "--open-finance-modal-desktop":component =>{
        var btnFinance = document.querySelector('#btn-Finance-desktop');
        var closeBtnFinance = document.querySelector(".pwat-close-modalFinance-desktop");

        btnFinance.addEventListener("click", function(){
            document.querySelector('#modalFinance-desktop').classList.add('pwat-open-modal');
            console.log('clicou');
        });

        closeBtnFinance.addEventListener('click', function(){
            document.querySelector('#modalFinance-desktop').classList.remove('pwat-open-modal');
        });

    },

         "--products-categorias-slide": component => {
                component.$slide('#categoria-slide', {
                    slidesPerView: window.innerWidth < 1024 ? 'auto' : '3',
                    // spaceBetween: window.innerWidth < 1024 ? 0 : 20,
                    // spaceBetween: window.innerWidth < 768 ? 0 : 20,
                    spaceBetween: 20,
                    grabCursor: true
                }
            );
        }

}
