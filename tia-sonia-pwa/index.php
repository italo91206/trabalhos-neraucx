<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">
    <link rel="stylesheet" href="./assets/css/main.min.css?<?= time() ?>">
</head>
<body>

    <div id="app">
        <div class="header-wrap">
            <nav class="navigation-aside">
                <?php include './partials/navigation-institucional-aside.php'; ?>
            </nav>

            <?php include './partials/header-institucional.php'; ?>
        </div>

        <main class="page-home">
            <section class="home-hero no-margin">
                <figure>
                    <img src="./assets/images/home-hero.jpg" alt="">
                </figure>
            </section>

            <section class="home-sobre">
                <div class="home-sobre-content container">
                    <div class="row align-items-center">
                        <div class="col-xl-6 col-lg-6">
                            <div class="home-sobre-content-title">
                                <h1 class="title">Nascemos de um sonho, para fazer a diferença no mundo</h1>
                            </div>
                        </div>

                        <div class="col-xl-3 col-lg-3">
                            <div class="home-sobre-content-description">
                                <p>Descubra como tudo começou e entenda por que a Tia Sônia faz a diferença no mundo. Há muitos sabores para se deliciar.</p>
                            </div>
                        </div>

                        <div class="col-xl-2 col-lg-3 offset-xl-1">
                            <a href="#" class="home-sobre-content-cta">Conheça a Tia Sônia</a>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="home-sobre-social swiper-container">
                        <div class="swiper-wrapper">
                            <div class="home-sobre-social-item swiper-slide">
                                <figure>
                                    <img src="./assets/images/home-sobre-projetos.jpg" alt="">
                                </figure>

                                <div class="home-sobre-social-item-content">
                                    <div class="icon">
                                        <img src="./assets/images/icon-sobre-projetos.svg" alt="">
                                    </div>

                                    <p>Tia Sônia Transforma: projetos que fazem bem, bem mais feliz.</p>
                                </div>
                            </div>

                            <div class="home-sobre-social-item swiper-slide">
                                <figure>
                                    <img src="./assets/images/home-sobre-produtor.jpg" alt="">
                                </figure>

                                <div class="home-sobre-social-item-content">
                                    <div class="icon">
                                        <img src="./assets/images/icon-sobre-produtor.svg" alt="">
                                    </div>

                                    <p>Matéria-prima direto do pequeno produtor com todo o carinho que você merece.</p>
                                </div>
                            </div>

                            <div class="home-sobre-social-item swiper-slide">
                                <figure>
                                    <img src="./assets/images/home-sobre-reciclagem.jpg" alt="">
                                </figure>

                                <div class="home-sobre-social-item-content">
                                    <div class="icon">
                                        <img src="./assets/images/icon-sobre-reciclagem.svg" alt="">
                                    </div>

                                    <p>Reciclar as embalagens Tia Sônia é um dos ingredientes da nossa receita de sucesso.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pagination"></div>
                </div>
            </section>

            <section class="home-institucional">
                <div class="container">
                    <div class="home-institucional-content">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-xl-5 col-lg-6">
                                <div class="home-institucional-text">
                                    <div class="section-title">
                                        <h2 class="title">
                                            Energia que<br>
                                            nutre o esporte.
                                        </h2>
                                    </div>

                                    <div class="section-content">
                                        <p>Quando você coloca suas granolas e alimentos favoritos na sacola, tenha certeza de que o seu pedido está ajudando a fazer acontecer algum projeto no esporte.</p>

                                        <p>Nos nossos mais de 20 anos de história, apoiamos grupos esportivos e atletas de várias modalidades: triathlon, mountain bike, ciclismo, corrida, jiu-jitsu, canoagem, stand up paddle, judô e corrida de aventura, por exemplo.</p>

                                        <p>É assim que a Tia Sônia nutre o esporte com toda a energia que ele merece. Fazemos questão de estar presentes sempre. E lembre-se: você é parte importante dessa saudável relação.</p>
                                    </div>

                                    <a href="#" class="button is-orange">Saiba Mais</a>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6">
                                <figure>
                                    <img src="./assets/images/home-institucional.jpg" alt="">
                                    <a href="https://www.youtube.com/watch?v=omt0ACGZQKg&ab_channel=ViversemRoteiro-AchileseMargaret" class="button-video glightbox"></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <?php include './partials/section-produtos.php'; ?>

            <section class="home-blog">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="home-blog-content">
                                <div class="section-title">
                                    <h2 class="title">É a sua vez de fazer bem + feliz!</h2>
                                </div>

                                <div class="section-content">
                                    <p>Os melhores sabores se misturam em várias publicações imperdíveis. Já conferiu? Fique por dentro de tudo que fazemos: acompanhe projetos que apoiamos, dicas, receitas e muito mais!</p>
                                </div>

                                <a href="#" class="button is-yellow">Fique ligado</a>
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="posts">
                                <div class="navigation-wrap posts-slider-wrap">
                                    <a href="javascript:;" class="navigation-control is-orange navigation-control-prev"></a>

                                    <div class="posts-slider swiper-container">
                                        <div class="swiper-wrapper">
                                            <? for ($i=0; $i < 8; $i++): ?>
                                            
                                            <div class="swiper-slide">
                                                <?php include './partials/article.php'; ?>
                                            </div>
                                                
                                            <? endfor; ?>
                                        </div>
                                    </div>

                                    <a href="javascript:;" class="navigation-control is-orange navigation-control-next"></a>

                                    <div class="pagination"></div>
                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-instagram">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="home-instagram-content">
                                <div class="section-title no-margin">
                                    <i class="fab fa-instagram"></i>
                                    <h2 class="title">O que faz bem mais feliz é feito pra compartilhar.</h2>
                                    <h6 class="subtitle">#tiasonia</h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="feed">
                                <div class="navigation-wrap feed-slider-wrap">
                                    <a href="javascript:;" class="navigation-control is-purple navigation-control-prev"></a>

                                    <div class="feed-slider swiper-container">
                                        <ul id="instagram-feed" class="swiper-wrapper"></ul>
                                    </div>

                                    <a href="javascript:;" class="navigation-control is-purple navigation-control-next"></a>

                                    <div class="pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <?php include './partials/apoio.php'; ?>

            <section class="home-faca-parte no-margin">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="section-title">
                                <h2 class="title">Seja nosso parceiro</h2>
                            </div>

                            <div class="section-content">
                                <p>Produtos saudáveis com o melhor sabor: Felicidade. Além de deixarem seus clientes felizes, os sabores da Tia Sônia têm tudo para te ajudar a vender mais.</p>
                            </div>

                            <a href="#" class="button is-orange-alt">Quero revender</a>
                        </div>

                        <div class="col-lg-6 col-md-6 offset-lg-1">
                            <figure class="text-center">
                                <img src="./assets/images/img-faca-parte.png" alt="Seja nosso parceiro">
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <a href="#" class="btn-loja">Loja</a>
        <?php include './partials/footer.php'; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/mmenu-light@3.0.7/dist/mmenu-light.min.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/tabby/dist/js/tabby.polyfills.min.js"></script>
    <script src="./assets/js/main.js"></script>
    <script src="./assets/js/home.js"></script>
    
</body>
</html>