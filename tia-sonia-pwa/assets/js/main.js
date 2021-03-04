document.addEventListener('DOMContentLoaded', () => {

    const containerSideWidth = (document.body.clientWidth - 1242) / 2;
    document.body.style.setProperty("--containerSideWidth", `${containerSideWidth}px`);
    document.body.style.setProperty("--containerSideWidthNegative", `-${containerSideWidth}px`);

    // Navegação
    const menu = new MmenuLight(
        document.querySelector('.navigation-aside')
    );

    const navigator = menu.navigation();
    const drawer = menu.offcanvas();
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', (e) => {

        e.preventDefault();
        drawer.open();
    });

    const headerInstitucional = document.querySelector('.header-institucional');

    headerInstitucional.addEventListener('mouseenter', () => document.body.classList.add('overlay'));
    headerInstitucional.addEventListener('mouseleave', () => document.body.classList.remove('overlay'));

    // Plugins
    const lightbox = GLightbox({
        openEffect: 'fade',
        closeEffect: 'fade',
    });

    if(document.querySelector('[data-tabs]')) {
        const tabs = new Tabby('[data-tabs]');
    }
    
    if(document.querySelector('.masked')) {
        const mask = Maska.create('.masked');
    }

});