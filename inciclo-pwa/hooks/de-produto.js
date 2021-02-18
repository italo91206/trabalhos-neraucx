{
  "--product-page-slide": component => {
    component.$slide('#product-page-slide', {
      slidesPerView: 1,
      spaceBetween: 0,
      grabCursor: true,
      navigation: {
        nextEl: '#product-page-slide-next',
        prevEl: '#product-page-slide-prev'
      },
      pagination: {
        el: '#product-page-slide-pagination',
        clickable: true,
      }
    });
  },
  "product-list-product-kits-loaded": component =>{
    component.$slide('#pwat-swiper-kits-de-produto-slide', {
      slidesPerView: window.innerWidth < 1024 ? 'auto' : '4',
      spaceBetween: 20,
      slidesPerGroup: 1,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '#pwat-swiper-kits-de-produto-next',
          prevEl: '#pwat-swiper-kits-de-produto-prev',
      },
  });
  }
}