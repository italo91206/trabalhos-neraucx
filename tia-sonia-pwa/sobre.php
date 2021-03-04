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

        <main class="page-sobre">
            <section class="sobre-hero">
                <figure>
                    <img src="./assets/images/sobre-hero.jpg" alt="">
                </figure>

                <div class="sobre-hero-info-wrap">
                    <div class="container">
                        <div class="sobre-hero-info">
                            <div class="row">
                                <div class="col-lg-5">
                                    <div class="section-title">
                                        <h1 class="title">Uma história para nutrir com sabor.</h1>
                                    </div>
                                </div>

                                <div class="col-lg-4 offset-lg-1">
                                    <div class="section-content no-margin">
                                        <p>A Tia Sônia é família, uma empresa que acredita que pessoas felizes são capazes de criar alimentos saudáveis. É assim que nós crescemos e continuamos escrevendo essa história deliciosa, com aquele sabor sem igual, que faz bem mais feliz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sobre-historia">
                <div class="container">
                    <div class="sobre-historia-slider swiper-container">
                        <div class="swiper-wrapper">
                            <div class="historia-item swiper-slide">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-lg-5">
                                        <div class="historia-item-text">
                                            <div class="section-title">
                                                <h2 class="title">A viagem e o cuidado de mãe</h2>
                                            </div>

                                            <div class="section-content no-margin">
                                                <p>A viagem e o cuidado de mãe.<br>
                                                Tudo começou por apenas um motivo muito especial: preocupação de mãe. Quando o Marcos resolveu viajar às trilhas de Machu Picchu, no Peru, a dona Sônia colocou em prática a receita de granola caseira que fazia de vez em quando. O detalhe é que ela exagerou só um pouquinho, e os 6kg eram peso demais para o filho levar sozinho.</p>

                                                <p>A solução que o Marcos encontrou foi distribuir a granola entre os amigos e conhecidos que provaram e, é claro, aprovaram.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="historia-item-image">
                                            <figure>
                                                <img src="./assets/images/historia-1995.jpg" alt="">
                                            </figure>

                                            <div class="pagination-wrap">
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-prev"></a>
                                                <div class="pagination"></div>
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-next"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                            <div class="historia-item swiper-slide">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-xl-5 col-lg-6">
                                        <div class="historia-item-text">
                                            <div class="section-title">
                                                <h2 class="title">Da cozinha para a garagem</h2>
                                            </div>

                                            <div class="section-content no-margin">
                                                <p>Mal sabia o Marcos que a viagem a Machu Picchu faria a receita caseira da mãe viajar da cozinha para a garagem. Quem provou e aprovou a granola não só pediu como insistiu por mais. Com os R$40 emprestados da mãe, Marcos comprou ingredientes e a granola Tia Sônia que a gente conhece surgiu neste momento. Embalada em potinhos de 200g, sua primeira embalagem, a receita deu um trabalho que não coube na cozinha da dona Sônia e, por isso, foi parar na garagem. Amigos e pequenos mercados estavam descobrindo a melhor granola do Nordeste.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="historia-item-image">
                                            <figure>
                                                <img src="./assets/images/historia-1996.jpg" alt="">
                                            </figure>

                                            <div class="pagination-wrap">
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-prev"></a>
                                                <div class="pagination"></div>
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-next"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="historia-item swiper-slide">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-xl-5 col-lg-6">
                                        <div class="historia-item-text">
                                            <div class="section-title">
                                                <h2 class="title">Da garagem para a fábrica</h2>
                                            </div>

                                            <div class="section-content no-margin">
                                                <p>Achou que a viagem da granola Tia Sônia tinha acabado lá em Machu Picchu? Que nada! O trabalho que antes não cabia na cozinha e foi parar na garagem, agora havia crescido ainda mais e não teve jeito: só uma fábrica para dar conta desse crescimento. Nesse ponto, a primeira marca já havia surgido e a granola Tia Sônia ganhava uma nova embalagem.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="historia-item-image">
                                            <figure>
                                                <img src="./assets/images/historia-1997.jpg" alt="">
                                            </figure>

                                            <div class="pagination-wrap">
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-prev"></a>
                                                <div class="pagination"></div>
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-next"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="historia-item swiper-slide">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-xl-5 col-lg-6">
                                        <div class="historia-item-text">
                                            <div class="section-title">
                                                <h2 class="title">Uma nova linha de produtos</h2>
                                            </div>

                                            <div class="section-content no-margin">
                                                <p>Já estava mais do que na hora de expandir, não é mesmo? E não deu outra: a inovação veio com o lançamento de uma linha completa de produtos integrais. A qualidade da granola que todo mundo já conhecia chegava a novos produtos pela primeira vez.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="historia-item-image">
                                            <figure>
                                                <img src="./assets/images/historia-1999.jpg" alt="">
                                            </figure>

                                            <div class="pagination-wrap">
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-prev"></a>
                                                <div class="pagination"></div>
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-next"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="historia-item swiper-slide">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-xl-5 col-lg-6">
                                        <div class="historia-item-text">
                                            <div class="section-title">
                                                <h2 class="title">Renovação constante</h2>
                                            </div>

                                            <div class="section-content no-margin">
                                                <p>Os anos que se seguiram foram de transformação, tanto nas atualizações da marca quanto no aumento do leque de produtos. Nessa época aconteceu o lançamento da primeira barrinha de cereais, novidade que virou sucesso rápido demais.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="historia-item-image">
                                            <figure>
                                                <img src="./assets/images/historia-2006.jpg" alt="">
                                            </figure>

                                            <div class="pagination-wrap">
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-prev"></a>
                                                <div class="pagination"></div>
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-next"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="historia-item swiper-slide">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-xl-5 col-lg-6">
                                        <div class="historia-item-text">
                                            <div class="section-title">
                                                <h2 class="title">De Machu Picchu a novos sabores</h2>
                                            </div>

                                            <div class="section-content no-margin">
                                                <p>A receita que viajou a Machu Picchu e deu início a toda essa história já não era o bastante. Novidades seriam - e foram! - muito bem-vindas. Foi o momento perfeito para a granola ganhar novos sabores e continuarmos escrevendo novos capítulos dessa história que, até aqui, está sendo uma delícia! E é claro que não paramos por aí, o lançamento da linha Sublime veio com tudo e, com toda a nossa dedicação e carinho por você, não tinha como ser diferente: mais um sucesso de vendas.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="historia-item-image">
                                            <figure>
                                                <img src="./assets/images/historia-2011.jpg" alt="">
                                            </figure>

                                            <div class="pagination-wrap">
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-prev"></a>
                                                <div class="pagination"></div>
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-next"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="historia-item swiper-slide">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-xl-5 col-lg-6">
                                        <div class="historia-item-text">
                                            <div class="section-title">
                                                <h2 class="title">Mais novidades, mais cores e mais transparência</h2>
                                            </div>

                                            <div class="section-content no-margin">
                                                <p>Não daria para continuar escrevendo a nossa história sem renovação, não é mesmo? Das novas embalagens aos novos produtos, pensando em você, conquistamos também várias certificações. Dentre elas, os selos de Produto Orgânico, USDA Organic e o Certificado Produto Vegano SVB.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="historia-item-image">
                                            <figure>
                                                <img src="./assets/images/historia-2017.jpg" alt="">
                                            </figure>

                                            <div class="pagination-wrap">
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-prev"></a>
                                                <div class="pagination"></div>
                                                <a href="javascript:;" class="pagination-arrow pagination-arrow-next"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sobre-projetos">
                <div class="container">
                    <div class="sobre-projetos-slider swiper-container">
                        <div class="swiper-wrapper">
                            <?
                            for ($i=0; $i < 3; $i++):
                            ?>
                            <div class="projeto-item swiper-slide">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <figure class="projeto-item-image">
                                            <img src="./assets/images/sobre-projeto.jpg" alt="">
                                            <a href="https://www.youtube.com/watch?v=omt0ACGZQKg&ab_channel=ViversemRoteiro-AchileseMargaret" class="button-video glightbox"></a>
                                        </figure>
                                    </div>

                                    <div class="col-lg-1 col-md-2 text-center">
                                        <a href="javascript:;" class="navigation-control is-blue navigation-control-prev"></a>
                                    </div>

                                    <div class="col-lg-4 col-md-8">
                                        <div class="projeto-item-text">
                                            <div class="section-title">
                                                <h2 class="title">Projetos que fazem bem, bem mais feliz.</h2>
                                            </div>

                                            <div class="section-content no-margin">
                                                <p>Cada alimento que você coloca na sacola ajuda a fazer acontecer vários projetos. O mesmo cuidado de mãe, que nos inspirou a surgir, hoje é a nossa motivação para cuidar de quem mais amamos. E nunca se esqueça: você é parte essencial de tudo isso.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-1 col-md-2 text-center">
                                        <a href="javascript:;" class="navigation-control is-blue navigation-control-next"></a>
                                    </div>
                                </div>
                            </div>
                            <?
                            endfor;
                            ?>
                        </div>

                        <div class="pagination"></div>
                    </div>

                    <div class="text-center">
                        <a href="#" class="button is-orange">Conheça os projetos</a>
                    </div>
                </div>
            </section>

            <?php include './partials/apoio.php'; ?>
            <?php include './partials/section-produtos.php'; ?>
        </main>

        <?php include './partials/footer.php'; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/mmenu-light@3.0.7/dist/mmenu-light.min.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/tabby/dist/js/tabby.polyfills.min.js"></script>
    <script src="./assets/js/main.js"></script>
    <script src="./assets/js/home.js"></script>
    <script src="./assets/js/sobre.js"></script>
    
</body>
</html>