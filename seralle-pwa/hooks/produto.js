{
    "--se-slide-produtos2": component => {
        component.$slide('#se-slide-produtos2', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 20,
            grabCursor: true
        });
    },
    "--se-slide-produtos3": component => {
        component.$slide('#se-slide-produtos3', {
            slidesPerView: window.innerWidth < 1024 ? 1 : 'auto',
            spaceBetween: window.innerWidth < 1024 ? 0 : 20,
            grabCursor: true
        });
    }
}