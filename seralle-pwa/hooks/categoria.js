{
    "--se-slide-banner-categoria": component => {
        component.$slide('#se-slide-banner-categoria', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 20,
            grabCursor: true,
            pagination:{
                el: '.se-swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"><p>' + (index + 1) + '</p></span>';
                }
            },
            navigation: {
                nextEl: '.se-slide6-next',
                prevEl: '.se-slide6-prev'
            }
        });
    },
    "--se-slide-final-categoria": component => {
        component.$slide('#se-slide-final-categoria', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 20,
            grabCursor: true,
        })
    },
    "--preparar-filtros": component =>{
        var elem = document.getElementsByClassName('se-filter-parameter');

        for(var i=0; i < elem.length ; i++){
            elem[i].addEventListener("click", function(){
                if(this.classList.contains("checked"))
                    this.classList.remove("checked");
                else    
                    this.classList.add("checked");
            });
        }
    }
}