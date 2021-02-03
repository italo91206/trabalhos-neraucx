{
    /*=============
    * HOOOK CATEGORIES CREATE ANUNCY
    =============*/
    "--slide-categories-create-anuncy":component => {
        component.$slide('#slide-categories-create-anuncy', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })
    },

    /*=============
    * HOOOK CATEGORIES CREATE ANUNCY
    =============*/
    "--slide-depoiments-create-anuncy":component => {
        component.$slide('#inpect-slides-swiper', {
            // slidesPerView: window.innerWidth > 750 && window.innerWidth < 980 ? 2 : 'auto',
            slidesPerView: 'auto',
            centered: true,
            speed: 300,
            loop: true,

            autoplay: {
                delay: 5500,
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    },

    /*=============
    * HOOOK REVISION ANUNCY
    =============*/
    "--slides-product-revision-anuncy":component => {
        component.$slide('#summary-ad-swiper', {
            slidesPerView: 1,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        })
    },

    /*=============
    * HOOOK OPEN MODE CONFIRMATION ADDRESS   
    =============*/
    "--modal-select-address":component => {
        const modalAddress = document.querySelector('.modal-select-address-bg')

        event.preventDefault();

        if(modalAddress.style.display === 'flex') 
            return modalAddress.style.display = 'none'

        modalAddress.style.display = 'flex'
        window.scrollBy(0, -1000)
    },

    /*=============
    * HOOOK CLOSE MODE ADDRESS  
    =============*/
    "--close-modal-address":component => {
        let modalAddress = document.getElementById("modal-select-address"); // Select element

        // Close modal
        if(modalAddress.style.display == "flex")
            modalAddress.style.display = "none";
    },

    /*================
        HOOK SHOW SELECT FORM PAYMENT
    ================ */
    "--open-form-payment":component => {
        let formPayment = document.querySelector(".pwa-s-pay-ad");

        if(formPayment) {
            formPayment.classList.toggle("eqf-d-block");
        }
    },

    /*===============
    HOOK ACTIVE CARD MODALITY
    ================*/
    "--active-card-modality":(component, el) => {
        let cardStar = document.querySelector("#d-post-card-destaque");
        let cardSuperStar = document.querySelector("#d-post-card-superdestaque");

        // Verify if element is cardStar
        if(el.classList.contains("eqs-card-post-01")) {
            desabilityElement(cardSuperStar); // Desability super star
            abilityElement(cardStar); // Active star

        } else {
            abilityElement(cardSuperStar); // Active super star
            desabilityElement(cardStar); // Desability star
        }

        // Activit item
        function abilityElement(element) {
            element.classList.add("selected");
            element.classList.remove("deselected");
        }

        // Desability item
        function desabilityElement(element) {
            element.classList.remove("selected");
            element.classList.add("deselected")
        }
    }
}