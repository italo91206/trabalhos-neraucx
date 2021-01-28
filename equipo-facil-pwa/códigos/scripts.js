// function handleModalMenu() {
//     const button = document.querySelector('#menu-header-bar')
//     const modal = document.querySelector('#modal-menu-user')
//     const modalNotification = document.querySelector('.pwa-modal-notification')


//     if(button.className === 'pwa-button-action-modal close') {
//         modal.style.display = 'none'
//         modalNotification.style.display = 'none'
//         document.body.classList.remove('looked')
//         button.classList.remove('close')
//         return
//     }

//     button.classList.add('close')
//     modal.style.display = 'flex'
//     document.body.classList.add('looked')
// }

function handleModalUserAccount() {
    const modal = document.querySelector('.menu-perfil-account')
    const buttonModalAccount = document.querySelector('#btn-account')
    const modalOpenAccount = buttonModalAccount.className === 'account'

    if (!modalOpenAccount) {
        // modal.style.display = 'none'
        modal.classList.remove("ativo");
        buttonModalAccount.classList.remove('active')
        return
    }

    // modal.style.display = 'flex'
    modal.classList.add("ativo");
    buttonModalAccount.classList.add('active')
};

/////// FUNÇÃO PARA MOSTRAR AS CARACTERÍSTICAS DO PRODUTO ////////
function seeMoreChar() {
    // película transparente por cima
    var shadowChar = document.getElementById('pwa-text-shadowChar');

    // mostra os textos
    var maistextChar = document.getElementById('pwa-show-char-product');
    var maistextChar2 = document.getElementById('pwa-show-char-product2');

    //botão de ver características
    var btnSeeMoreChar = document.getElementById('ef-see-moreChar');

    // barra de compra
    var buyBar = document.getElementById('pwa-buy-action-mobile');

    if (shadowChar.style.display === 'none') {
        shadowChar.style.display = 'block'

        maistextChar.style.display = 'none'
        maistextChar2.style.display = 'none'

        btnSeeMoreChar.innerHTML = 'VER TODAS AS CARACTERÍSTICAS'

        buyBar.style.marginTop = '-50px'
        buyBar.style.top = '-150px'
        buyBar.style.marginBottom = '0px'
    } else {
        shadowChar.style.display = 'none'

        maistextChar.style.display = 'inline'
        maistextChar2.style.display = 'inline'

        btnSeeMoreChar.innerHTML = 'VER MENOS'

        buyBar.style.marginTop = '10px'
        buyBar.style.marginBottom = '-30px'
        buyBar.style.top = '0px'
    }
};

/////// FUNÇÃO PARA MOSTRAR INFORMAÇÕES SOBRE O TEMPO////////
function seeMore() {

    const shadow = document.getElementById('pwa-text-shadow');

    const maistext = document.getElementById('pwa-show-char');

    const btnSeeMore = document.getElementById('pwa-see-more');


    if (shadow.style.display === 'none') {
        shadow.style.display = 'block'

        maistext.style.display = 'none';
        btnSeeMore.innerHTML = 'VER MAIS';
    } else {
        shadow.style.display = 'none';
        maistext.style.display = 'inline';
        btnSeeMore.innerHTML = 'VER MENOS';
    }
};

////MAIS E MENOS DO INPUT/////
function mais() {
    var atual = document.getElementById("quantidade").value++;
};

function menos(atual) {
    var menos = document.getElementById("quantidade").value;
    if (menos > 0) { //evita números negativos
        atual = document.getElementById("quantidade").value--;
    }
};

function mais_mobile(atual) {
    atual = document.getElementById("quantidade-mobile").value++;
};

function menos_mobile(atual, menos) {
    menos = document.getElementById("quantidade-mobile").value;
    if (menos > 0) { //evita números negativos
        atual = document.getElementById("quantidade-mobile").value--;
    }
};

function fecharModalCodigoRastreio(){
    document.getElementById('modal-codigo-rastreio').classList.remove("ativo");
}

function abrirModalCodigoRastreio(){
    document.getElementById('modal-codigo-rastreio').classList.add("ativo");
}