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

        <main class="page-listagem main-padding">
            <div class="container">
                <section class="section-head margin-small">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title text-center">
                                <h2 class="title">Que tal se deliciar com nossos produtos?</h2>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="section-content text-center">
                                <p>Qualidade, ingredientes nutritivos e sabor agradável. Você sempre vai encontrar tudo isso em alimentos naturais gostosos, saudáveis e feitos com a maior inspiração que existe: amor de mãe.</p>
                            </div>
                        </div>
                    </div>
                </section>

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

                <section class="margin-small">
                    <div class="resultados">
                        <p>Encontramos <strong>28 produtos</strong> fresquinhos para você</p>
                        <div class="form">
                            <select class="form-control-select-large">
                                <option>Mais vendidos</option>
                            </select>
                        </div>
                    </div>
                </section>

                <div class="row">
                    <? for ($i=0; $i < 6; $i++): ?>
                    
                    <div class="col-lg-4 col-md-6">
                        <?php include './partials/produto.php'; ?>
                    </div>

                    <? endfor; ?>
                </div>

                <section class="pagination-numbers no-margin">
                    <a href="#" class="prev"></a>
                    <a href="#" class="pagination-numbers-item">1</a>
                    <a href="#" class="pagination-numbers-item current">2</a>
                    <a href="#" class="pagination-numbers-item">3</a>
                    <a href="#" class="pagination-numbers-item">4</a>
                    <a href="#" class="pagination-numbers-item">5</a>
                    <a href="#" class="next"></a>
                </section>
            </div>
        </main>

        <?php include './partials/footer.php'; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/mmenu-light@3.0.7/dist/mmenu-light.min.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="./assets/js/main.js"></script>
    <script src="./assets/js/listagem.js"></script>
    
</body>
</html>