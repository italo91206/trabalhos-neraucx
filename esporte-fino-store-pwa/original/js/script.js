// variavel pra verificar se menu esta aberto
var menuOpen = false;
const body = document.querySelector('body');

//ABRIR MENU MOBILE e SUBMENU
const btnOpenMenuMobile = document.querySelector('.efs-btnOpenMenuMobile');
const btnCloseSubMenu = document.querySelectorAll('.efs-submenu-voltar');
const optionOpenSubMenu = document.querySelectorAll('.openSubmenu');
const menuMobile = document.querySelector('.efs-menu-mobile');
const subMenu = document.querySelector('.efs-submenu');
const main = document.querySelector('main');

btnOpenMenuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('efs-menu-mobile-show');
    subMenu.classList.remove('efs-submenu-show');
})


optionOpenSubMenu.forEach((item) => {
    item.addEventListener('click', () => {
        subMenu.classList.toggle('efs-submenu-show');
        menuMobile.classList.toggle('efs-menu-mobile-show');
    })
})

btnCloseSubMenu.forEach((item) => {
    item.addEventListener('click', () => {
        subMenu.classList.remove('efs-submenu-show');
        menuMobile.classList.toggle('efs-menu-mobile-show');
    })
})


// ABRIR PRODUTOS PESQUISADOS
const btnOpenProdutosSearch = document.querySelector('.efs-btnOpenProdutosSearch');
const produtosSearchBg = document.querySelector('.efs-search-produtos-bg');
const produtosSearch = document.querySelector('.efs-search-produtos');

btnOpenProdutosSearch.addEventListener('click', () => {
    produtosSearchBg.classList.add('efs-search-produtos-bg-show');
    produtosSearch.classList.add('efs-search-produtos-show');
    menuOpen = true;
    scrollTravado(menuOpen);
})

produtosSearchBg.addEventListener('click', () => {
    produtosSearchBg.classList.remove('efs-search-produtos-bg-show');
    menuOpen = false;
    scrollTravado(menuOpen);
})

// ABRIR SEARCH MOBILE
const btnOpenSearchMobile = document.querySelector('.efs-btnOpenSearchMobile');
const btnCloseSearchMobile = document.querySelector('.efs-closeSearchMobile');
const searchMobile = document.querySelector('.efs-search-mobile-wrapper');
const headerMobileOptions = document.querySelector('.efs-header-mobile-options');

btnOpenSearchMobile.addEventListener('click', () => {
    searchMobile.classList.add('efs-search-mobile-show')
    headerMobileOptions.classList.add('efs-header-mobile-options-hide');
    btnCloseSearchMobile.classList.add('efs-closeSearchMobile-show');
    openMenu = true;
    scrollTravado(openMenu);
})

btnCloseSearchMobile.addEventListener('click', () => {
    searchMobile.classList.remove('efs-search-mobile-show')
    headerMobileOptions.classList.remove('efs-header-mobile-options-hide');
    btnCloseSearchMobile.classList.remove('efs-closeSearchMobile-show');
    openMenu = false;
    scrollTravado(openMenu);
})

// // ABRIR FOOTER

const btnOpenFooterMobile = document.querySelectorAll('.efs-btnOpenFooterMobile');
const subMenuEFS = document.querySelector('.efs-footer-info-efs');
const subMenuAjuda = document.querySelector('.efs-footer-info-ajuda');

btnOpenFooterMobile.forEach((item) => {
    item.addEventListener('click', () => {
        var botaoClicado = item.innerText;

        if (botaoClicado == "EFS") {
            subMenuEFS.classList.toggle('efs-footer-open');
            item.children[1].classList.toggle('efs-arrow-rotate');
        } else {
            subMenuAjuda.classList.toggle('efs-footer-open');
            item.children[1].classList.toggle('efs-arrow-rotate');
        }
    });

    const btnNav = document.querySelectorAll('.efs-navegacao a.efs-nav-item[href^="#"]');
    btnNav.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const element = e.target; // Link menu
            const id = element.getAttribute('href'); // Link menu "id"
            const navItens = document.querySelectorAll('.efs-nav-item'); // Selecionando todos os nav itens 
            const navConteudo = document.querySelectorAll('.efs-nav-conteudo'); // Selecionando todos os itens 
            const showItem = document.querySelector(id); // Show menu by id

            removeActiveItens(navConteudo);
            removeActiveItens(navItens);
            showItem.classList.toggle('efs-active');
            element.classList.toggle('efs-active');
        });
    })
})

// Abrir lojas - QUEM SOMOS MOBILE

if(!!document.querySelector('.efs-quemsomos-lojas')){
    
    const btnOpenLojas = document.querySelector('.efs-btn-lojas-mobile');
    const lojas = document.querySelector('.efs-quemsomos-lojas')

    btnOpenLojas.addEventListener('click', () => {
        lojas.classList.add('efs-quemsomos-lojas-open');
        btnOpenLojas.classList.add('none');
    })
}

function removeActiveItens(activeItens) { activeItens.forEach(item => { item.classList.remove('efs-active'); }) }
// PG SEJA UM FRANQUEADO - ALTERNAR MODALIDADES
if (!!document.querySelector('.efs-sejafranqueado-modalidade')) {
    const modalidades = document.querySelectorAll('.efs-sejafranqueado-modalidades-list li a');
    const infoModalidades = document.querySelectorAll('.efs-sejafranqueado-modalidade-opcoes-left p');
    modalidades.forEach((item) => {
        item.addEventListener('click', (e) => {
            removeItemSelecionado();
            removeInfoModalidade();
            e.preventDefault();
            var idModalidade = item.classList[0];
            const infoModalidade = document.getElementById(idModalidade);
            infoModalidade.classList.remove('efs-modalidade-p-oculta');
            infoModalidade.classList.add('efs-modalidade-p-selecionada');
            item.classList.add('efs-modalidade-selecionada');
        })
    })

    function removeItemSelecionado() {
        modalidades.forEach((item) => {
            item.classList.remove('efs-modalidade-selecionada');
        })
    }

    function removeInfoModalidade() {
        infoModalidades.forEach((item) => {
            if (item.classList.contains('efs-modalidade-p-selecionada')) {
                item.classList.remove('efs-modalidade-p-selecionada');
                item.classList.add('efs-modalidade-p-oculta');
            }
        })
    }

}

// TAMANHO PRODUTO
const coresProduto = document.querySelectorAll('.efs-cores-produto');
var itensCoresNum = 1;
coresProduto.forEach((item) => {

    var coresPai = 'efs-cores-produto-' + itensCoresNum;
    item.setAttribute('id', coresPai);

    var elementoFilho = item.children;
    const inputCor = document.querySelectorAll('#' + coresPai + ' input');
    const labelCor = document.querySelectorAll('#' + coresPai + ' label');
    for (var i = 0; i < inputCor.length; i++) {
        inputCor[i].setAttribute('name', 'efs-cores-' + itensCoresNum);
        inputCor[i].setAttribute('id', 'efs-cor-' + itensCoresNum + '-' + i);
        labelCor[i].setAttribute('for', 'efs-cor-' + itensCoresNum + '-' + i)
    }
    itensCoresNum++;
});

/* Atendimento Modal */

if (document.getElementById('efs-btn-atendimento-franqueado')) {
    const btnAtendimento = document.getElementById('efs-btn-atendimento-franqueado');
    btnAtendimento.addEventListener('click', (e) => {
        e.preventDefault();
        var win = window,
            doc = document,
            docElem = doc.documentElement,
            body = doc.getElementsByTagName('body')[0],
            widthDocument = win.innerWidth || docElem.clientWidth || body.clientWidth;

        if (widthDocument < 769) {

            const element = e.target;
            const id = element.dataset.href;
            const showItem = document.querySelector(id);
            const svgIconArrow = document.querySelectorAll(id + ' .efs-title-right svg');
            svgIconArrow.forEach((item) => { item.classList.toggle('efs-active'); })
            showItem.classList.toggle('efs-active');
        }
    })
}

var accordions = document.getElementsByClassName("efs-accordion");
for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function (e) {
        e.preventDefault();
        this.classList.toggle('efs-is-open');

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.margin = 0;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.marginTop = "24px";
        }
    }
}


const btnNavAtendimento = document.querySelectorAll('.efs-atendimento-page a.efs-tab-item');
btnNavAtendimento.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const element = e.target;
        const id = element.dataset.href;
        const navItens = document.querySelectorAll('.efs-nav-item'); // Selecionando todos os nav itens 
        const navConteudo = document.querySelectorAll('.efs-card-atendimento'); // Selecionando todos os itens 
        const showItem = document.querySelector(id); // Show menu by id

        removeActiveItens(navConteudo);
        removeActiveItens(btnNavAtendimento);

        showItem.classList.toggle('efs-active');
        element.classList.toggle('efs-active');
    });
})

// Accordio página de Atendimento
var accordionsAtendimento = document.getElementsByClassName("efs-accordion-atendimento");
for (var i = 0; i < accordionsAtendimento.length; i++) {
    accordionsAtendimento[i].onclick = function (e) {
        e.preventDefault();
        this.classList.toggle('efs-is-open');

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.paddingBottom = "0px";
        } else {
            content.style.paddingBottom = content.scrollHeight + 40 + "px";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}





// SCRIPT ABRIR FILTROS
const btnOpenFilterOptions = document.querySelectorAll('.efs-btnOpenFilterOption');
const filterTamanho = document.querySelector('.efs-listagem-filtro-tamanhos');
const filterMarcas = document.querySelector('.efs-listagem-filtro-marcas');
const filterTimes = document.querySelector('.efs-listagem-filtro-times');
const filterPreco = document.querySelector('.efs-listagem-filtro-precos');

btnOpenFilterOptions.forEach((item) => {
    item.addEventListener('click', () => {
        var filtroClicado = item.innerText;

        if (filtroClicado == "TAMANHO") {
            filterTamanho.classList.toggle('efs-filtro-options-show');
            item.children[1].classList.toggle('efs-filtro-arrow-transition');
        } else if (filtroClicado == "MARCA") {
            filterMarcas.classList.toggle('efs-filtro-options-show');
            item.children[1].classList.toggle('efs-filtro-arrow-transition');
        } else if (filtroClicado == "TIMES") {
            filterTimes.classList.toggle('efs-filtro-options-show');
            item.children[1].classList.toggle('efs-filtro-arrow-transition');
        } else if (filtroClicado == "PREÇO") {
            filterPreco.classList.toggle('efs-filtro-options-show');
            item.children[1].classList.toggle('efs-filtro-arrow-transition');
        }
    })
})


const tamanhosProduto = document.querySelectorAll('.efs-tamanho-produto');
var itensTamanhoNum = 1;
tamanhosProduto.forEach((item) => {
    var tamanhosPai = 'efs-tamanhos-produto-' + itensTamanhoNum;
    item.setAttribute('id', tamanhosPai);

    var elementoFilho = item.children;
    const inputTamanho = document.querySelectorAll('#' + tamanhosPai + ' input');
    const labelTamanho = document.querySelectorAll('#' + tamanhosPai + ' label');
    for (var i = 0; i < inputTamanho.length; i++) {
        inputTamanho[i].setAttribute('name', 'efs-tamanhos-' + itensTamanhoNum);
        inputTamanho[i].setAttribute('id', 'efs-tamanho-' + itensTamanhoNum + '-' + i);
        labelTamanho[i].setAttribute('for', 'efs-tamanho-' + itensTamanhoNum + '-' + i)
    }
    itensTamanhoNum++;
});


const btnPassword = document.querySelectorAll('.efs-form-password a.efs-icon-passowrd[href^="#"]');

btnPassword.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        const element = e.target; // Link menu
        const id = element.getAttribute('href'); // Link menu "id"
        const inputPass = document.querySelector(id); // Show menu by id
        if (inputPass.type === 'text') {
            inputPass.type = 'password';
        } else {
            inputPass.type = 'text';
        }
    })

})

/* VERIFICAR QUANTIDADE */
const btnMenosQuantidade = document.querySelector('.efs-quantidade-produto .efs-menos-qt');
const btnMaisQuantidade = document.querySelector('.efs-quantidade-produto .efs-mais-qt');
const quantidade = document.querySelector('.efs-quantidade-produto #efs-quantidade');

function quantidadeProduto(maxProdutos) {
    const idClick = event.srcElement.id;
    const quantidadeText = quantidade.innerText;
    var quantidadeNum = parseInt(quantidadeText);

    if (idClick === 'efs-menos-qt') {
        if (quantidadeNum > 1) {
            quantidadeNum--;
            quantidade.innerText = quantidadeNum.toString();

            btnMenosQuantidade.classList.remove('efs-deactivated');
            btnMaisQuantidade.classList.remove('efs-deactivated');

            if (quantidadeNum === 1) {
                btnMenosQuantidade.classList.add('efs-deactivated');
            }
        }
    } else if (idClick === 'efs-mais-qt') {
        if (quantidadeNum < maxProdutos) {
            quantidadeNum++;
            quantidade.innerText = quantidadeNum.toString();

            if (quantidadeNum > 1) {
                btnMenosQuantidade.classList.remove('efs-deactivated');
                if (quantidadeNum === maxProdutos) {
                    btnMaisQuantidade.classList.add('efs-deactivated');
                }
            }
        }
    }
}

// const coresProduto = document.querySelectorAll('.efs-cores-produto');
// FIM TAMANHO PRODUTO

// ABRIR FILTRO E ORDENAR MOBILE
const btnOpenOrdenarMobile = document.querySelector('.efs-btnOpenOrderMobile');
const btnCloseOrdenarMobile = document.querySelector('.efs-btnCloseOrdenarMobile');
const ordenarMobile = document.querySelector('.efs-ordenar-mobile');
const btnOpenFiltroMobile = document.querySelector('.efs-btnOpenFilterMobile');
const btnCloseFiltroMobile = document.querySelector('.efs-btnCloseFiltroMobile');
const filtroMobile = document.querySelector('.efs-listagem-produto-filtro');

btnOpenOrdenarMobile.addEventListener('click', () => {
    ordenarMobile.classList.add('efs-ordenar-mobile-show');
    filtroMobile.classList.remove('efs-listagem-produto-filtro-show');
    menuOpen = true;
    scrollTravado(menuOpen);
})

btnCloseOrdenarMobile.addEventListener('click', () => {
    ordenarMobile.classList.remove('efs-ordenar-mobile-show');
    menuOpen = false;
    scrollTravado(menuOpen);
})

btnOpenFiltroMobile.addEventListener('click', () => {
    filtroMobile.classList.add('efs-listagem-produto-filtro-show');
    ordenarMobile.classList.remove('efs-ordenar-mobile-show');
    menuOpen = true;
    scrollTravado(menuOpen);
})

btnCloseFiltroMobile.addEventListener('click', () => {
    filtroMobile.classList.remove('efs-listagem-produto-filtro-show');
    menuOpen = false;
    scrollTravado(menuOpen);
})

// VERIFICA SE TEM ALGUM MENU ABERTO E TRAVA O SCROLL

function scrollTravado(menuOpen) {
    if (menuOpen) {
        body.style.overflowY = 'hidden';
    } else {
        body.style.overflowY = 'scroll';
    }
}






