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
                <section class="banner margin-small">
                    <img src="./assets/images/banner-granolas.jpg" alt="">
                </section>

                <section class="row margin-small">
                    <div class="col-lg-8 offset-lg-4">
                        <div class="resultados">
                            <p>Encontramos <strong>28 produtos</strong> fresquinhos para você</p>
                            <div class="form">
                                <select class="form-control-select-large">
                                    <option>Mais vendidos</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="row">
                    <aside class="col-lg-4">
                        <details class="accordion" open>
                            <summary>
                                <h5 class="accordion-title">Tipos de granola</h5>
                            </summary>
                            
                            <div class="accordion-content">
                                <ul>
                                    <li><a href="#">Tradicional</a></li>
                                    <li><a href="#">Castanha do pará</a></li>
                                    <li><a href="#">Chocolate</a></li>
                                    <li><a href="#">Light</a></li>
                                    <li><a href="#">Low carb</a></li>
                                    <li><a href="#">Orgânica</a></li>
                                    <li><a href="#">Premium</a></li>
                                    <li><a href="#">Sem glúten</a></li>
                                    <li><a href="#">X-pin</a></li>
                                </ul>
                            </div>
                        </details>

                        <details class="accordion" open>
                            <summary>
                                <h5 class="accordion-title">Mais buscadas</h5>
                            </summary>
                            
                            <div class="accordion-content">
                                <ul>
                                    <li><a href="#">Tradicional</a></li>
                                    <li><a href="#">Castanha do pará</a></li>
                                    <li><a href="#">Chocolate</a></li>
                                    <li><a href="#">Light</a></li>
                                    <li><a href="#">Low carb</a></li>
                                    <li><a href="#">Orgânica</a></li>
                                    <li><a href="#">Premium</a></li>
                                    <li><a href="#">Sem glúten</a></li>
                                    <li><a href="#">X-pin</a></li>
                                </ul>
                            </div>
                        </details>

                        <img src="./assets/images/banner-frete.png" alt="">
                    </aside>

                    <div class="col-lg-8">
                        <div class="row">
                            <? for ($i=0; $i < 6; $i++): ?>
                            
                            <div class="col-md-6">
                                <?php include './partials/produto.php'; ?>
                            </div>

                            <? endfor; ?>
                        </div>

                        <section class="pagination-numbers margin-small">
                            <a href="#" class="prev"></a>
                            <a href="#" class="pagination-numbers-item">1</a>
                            <a href="#" class="pagination-numbers-item current">2</a>
                            <a href="#" class="pagination-numbers-item">3</a>
                            <a href="#" class="pagination-numbers-item">4</a>
                            <a href="#" class="pagination-numbers-item">5</a>
                            <a href="#" class="next"></a>
                        </section>

                        <section class="section-content no-margin">
                            <p><strong>Granolas</strong></p>

                            <p>As granolas Tia Sônia são ideais para quem quer mais energia. Com uma combinação perfeita de frutas desidratadas e cereais, elas são ricas em nutrientes e podem ser consumidas como você desejar. Precisa consumir menos carboidratos? A granola Low carb é perfeita para o seu caso. Já conferiu a granola Light? Ela tem 30% menos gorduras e, se você prefere ingredientes ainda mais diferenciados, confira a linha Premium e delicie-se. Fazer bem, essa é a nossa paixão.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>

        <?php include './partials/footer.php'; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/mmenu-light@3.0.7/dist/mmenu-light.min.js"></script>
    <script src="./assets/js/main.js"></script>
    
</body>
</html>