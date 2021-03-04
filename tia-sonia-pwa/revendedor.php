<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="./assets/css/main.min.css?<?= time() ?>">
</head>
<body>

    <div id="app">
        <div class="header-wrap">
            <nav class="navigation-aside">
                <?php include './partials/navigation.php'; ?>
            </nav>

            <?php include './partials/header.php'; ?>

            <nav class="navigation-bar">
                <div class="container">
                    <?php include './partials/navigation.php'; ?>
                </div>
            </nav>
        </div>

        <main class="page-revendedor">
            <section class="revendedor-hero">
                <figure>
                    <img src="./assets/images/revendedor-hero.jpg" alt="">
                </figure>
            </section>

            <div class="container">
                <section class="navigation-wrap categorias-slider-wrap">
                    <div class="categorias-slider swiper-container">
                        <div class="swiper-wrapper">
                            <? for ($i=0; $i < 10; $i++): ?>
                            <div class="categoria-item swiper-slide">
                                <a href="#">
                                    <img src="./assets/images/menu-granola.jpg" alt="">
                                    Granolas
                                </a>
                            </div>
                            <? endfor; ?>
                        </div>
                    </div>
                        
                    <a href="javascript:;" class="navigation-control is-orange navigation-control-prev"></a>
                    <a href="javascript:;" class="navigation-control is-orange navigation-control-next"></a>
                </section>

                <section class="sobre">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-xl-5 col-lg-6">
                            <div class="sobre-text">
                                <div class="section-title">
                                    <h3 class="title">Alimentos naturais com sabor de saúde para fazer a diferença.</h3>
                                </div>

                                <div class="section-content">
                                    <p>Descubra como tudo começou e entenda por que a Tia Sônia faz a diferença no mundo. Prepare-se: há muitos sabores para se deliciar.</p>
                                </div>

                                <a href="#" class="button is-orange">Conheça a Tia Sônia</a>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6">
                            <figure class="sobre-img">
                                <img src="./assets/images/revendedor-sobre.jpg" alt="">
                            </figure>
                        </div>
                    </div>
                </section>
                
                <section class="banners">
                    <div class="row">
                        <div class="col-lg-6 col-banner">
                            <div class="banner banner-frete">
                                <div class="banner-wrap">
                                    <div class="banner-title">
                                        <h3 class="title">Frete econômico: apenas R$10</h3>
                                    </div>

                                    <div class="banner-content">
                                        <p>Promoção válida para todo o Brasil, em quaisquer pedidos acima de R$100.</p>
                                    </div>

                                    <a href="#" class="button is-pink">Aproveite agora</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-banner">
                            <div class="banner banner-promocao">
                                <div class="banner-wrap">
                                    <div class="banner-title">
                                        <h3 class="title">
                                            Leve 5<br> 
                                            Pague 4
                                        </h3>
                                    </div>

                                    <div class="banner-content">
                                        <p>
                                            Desconto aplicado direto no carrinho no produto de menor valor.<br>
                                            Promoção válida até 27/06/2020.
                                        </p>
                                    </div>

                                    <a href="#" class="button is-pink">Aproveite agora</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="novidades no-margin">
                    <div class="section-title text-center">
                        <h2 class="title">Novidades Tia Sônia:</h2>
                    </div>

                    <div class="navigation-wrap novidades-slider-wrap">
                        <div class="novidades-slider swiper-container">
                            <div class="swiper-wrapper">
                                <? for ($i=0; $i < 10; $i++): ?>
                                <div class="swiper-slide">
                                    <?php include './partials/produto.php'; ?>
                                </div>
                                <? endfor; ?>
                            </div>

                            <div class="pagination"></div>
                        </div>
                            
                        <a href="javascript:;" class="navigation-control is-orange navigation-control-prev"></a>
                        <a href="javascript:;" class="navigation-control is-orange navigation-control-next"></a>
                    </div>
                </section>
            </div>
        </main>

        <?php include './partials/footer.php'; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/mmenu-light@3.0.7/dist/mmenu-light.min.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="./assets/js/main.js"></script>
    <script src="./assets/js/revendedor.js"></script>
    
</body>
</html>