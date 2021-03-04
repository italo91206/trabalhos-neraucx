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
                <?php include './partials/navigation.php'; ?>
            </nav>

            <?php include './partials/header.php'; ?>

            <nav class="navigation-bar">
                <div class="container">
                    <?php include './partials/navigation.php'; ?>
                </div>
            </nav>
        </div>

        <main class="page-detalhe main-padding">
            <div class="container">
                <section class="row no-gutters justify-content-between">
                    <div class="col-lg-6">
                        <div class="produto-slider swiper-container">
                            <div class="swiper-wrapper">
                                <? for ($i=0; $i < 10; $i++): ?>
                                <div class="produto-item swiper-slide">
                                    <figure>
                                        <a href="./assets/images/produto1.jpg" class="glightbox">
                                            <img src="./assets/images/produto1.jpg" alt="">
                                        </a>
                                    </figure>
                                </div>
                                <? endfor; ?>
                            </div>
                        </div>

                        <div class="navigation-wrap produto-thumbs-slider-wrap">
                            <div class="produto-thumbs-slider swiper-container">
                                <div class="swiper-wrapper">
                                    <? for ($i=0; $i < 10; $i++): ?>
                                    <div class="produto-item swiper-slide">
                                        <figure>
                                            <a href="javascript:;">
                                                <img src="./assets/images/produto1.jpg" alt="">
                                            </a>
                                        </figure>
                                    </div>
                                    <? endfor; ?>
                                </div>
                            </div>
                                
                            <a href="javascript:;" class="navigation-control is-orange navigation-control-prev"></a>
                            <a href="javascript:;" class="navigation-control is-orange navigation-control-next"></a>
                        </div>
                    </div>

                    <div class="col-lg-5">
                        <div class="produto-detalhe">
                            <div class="produto-detalhe-head">
                                <ul class="breadcrumbs">
                                    <li><a href="#">Granola</a></li>
                                    <li><a href="#">Tradicional</a></li>
                                </ul>

                                <p class="produto-codigo">COD: PA293</p>
                            </div>

                            <div class="produto-detalhe-avaliacao">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <a href="#">Ver avaliações</a>
                            </div>

                            <div class="produto-detalhe-info">
                                <h3 class="produto-detalhe-info-title">Granola tradicional</h3>
                                <p class="produto-detalhe-info-description">400g</p>
                                <p class="produto-detalhe-info-price-old"><span>de</span> R$ 15,90</p>
                                <h3 class="produto-detalhe-info-price-special"><span>por</span> R$ 14,90</h3>
                            </div>
                            
                            <div class="produto-detalhe-action form">
                                <div class="input-group-number">
                                    <a href="javascript:;" class="input-decrement">-</a>
                                    <input type="number" class="form-control-number" value="1" min="1" max="100">
                                    <a href="javascript:;" class="input-increment">+</a>
                                </div>
                                
                                <a href="#" class="button is-orange is-large">Adicionar à sacola</a>
                            </div>

                            <div class="produto-features">
                                <div class="produto-features-item">
                                    <figure>
                                        <img src="./assets/images/feature-vegano.svg" alt="">
                                    </figure>

                                    <p>Produto vegano</p>
                                </div>

                                <div class="produto-features-item">
                                    <figure>
                                        <img src="./assets/images/feature-sem-gluten.svg" alt="">
                                    </figure>

                                    <p>Sem gluten</p>
                                </div>

                                <div class="produto-features-item">
                                    <figure>
                                        <img src="./assets/images/feature-nao-transgenico.svg" alt="">
                                    </figure>

                                    <p>Não transgênico</p>
                                </div>
                            </div>

                            <hr>

                            <div class="produto-detalhe-frete">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <p class="title">Calcule o frete:</p>

                                        <form class="form">
                                            <input type="text" name="cep" class="form-control masked" placeholder="_____-___" data-mask="#####-###">
                                            <button class="btn-search"></button>
                                        </form>
                                    </div>
                                    
                                    <div class="col-xl-9">
                                        <div class="info-frete">
                                            <p>Ganhe <strong>frete grátis</strong> comprando <strong>10 unidades</strong> ou mais de Granola tradicional.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="produto-detalhe-compartilhe">
                                <p class="title">Compartilhe:</p>

                                <ul>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="produto-conteudos">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-xl-5 col-lg-6">
                            <div class="produto-conteudos-text">
                                <div class="section-title">
                                    <h2 class="title">
                                        Por que faz<br>
                                        bem mais feliz?
                                    </h2>
                                </div>

                                <div class="section-content no-margin">
                                    <p>A granola TIA SÔNIA é sinônimo de saúde. Uma combinação perfeita de frutas desidratadas, flocos de aveia, gergelim, tapioca, flocos de milho e castanha de caju garantem uma alimentação saudável e deliciosa.</p>

                                    <p>É um complemento alimentar enriquecido por nutrientes necessários para quem tem uma rotina com alto gasto calórico. Nenhum de seus ingredientes é contraindicado para o consumo infantil, muito pelo contrário, a granola oferece diversos benefícios à saúde da criança acima de 3 (três) anos.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6">
                            <figure class="produto-conteudos-img">
                                <img src="./assets/images/home-institucional.jpg" alt="">
                            </figure>
                        </div>
                    </div>
                </section>

                <section class="produto-conteudos img-left">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-xl-6 col-lg-6">
                            <figure class="produto-conteudos-img">
                                <img src="./assets/images/home-institucional.jpg" alt="">
                                <a href="https://www.youtube.com/watch?v=omt0ACGZQKg&ab_channel=ViversemRoteiro-AchileseMargaret" class="button-video glightbox"></a>
                            </figure>
                        </div>

                        <div class="col-xl-5 col-lg-6">
                            <div class="produto-conteudos-text">
                                <div class="section-title">
                                    <h2 class="title">Ingredientes</h2>
                                </div>

                                <div class="section-content">
                                    <p>Flocos de aveia, rapadura, coco, tapioca, castanha de caju, gérmen de trigo, melaço de cana, manteiga, gergelim e sal marinho.</p>
                                </div>

                                <div class="produto-features">
                                    <div class="produto-features-item">
                                        <figure>
                                            <img src="./assets/images/feature-vegano.svg" alt="">
                                        </figure>

                                        <p>Produto vegano</p>
                                    </div>

                                    <div class="produto-features-item">
                                        <figure>
                                            <img src="./assets/images/feature-sem-gluten.svg" alt="">
                                        </figure>

                                        <p>Sem gluten</p>
                                    </div>

                                    <div class="produto-features-item">
                                        <figure>
                                            <img src="./assets/images/feature-nao-transgenico.svg" alt="">
                                        </figure>

                                        <p>Não transgênico</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="produto-informacoes">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title text-center">
                                <h4 class="title">Informações nutricionais</h4>
                            </div>

                            <div class="table-wrap table-responsive">
                                <p class="caption text-center">Quantidade por porção: 30g</p>

                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Quantidade por porção</th>
                                            <th>% VD (*)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Valor energético</th>
                                            <td>116 kcal — 486 kJ</td>
                                            <td>6%</td>
                                        </tr>
                                        <tr>
                                            <th>Carboidratos</th>
                                            <td>19g</td>
                                            <td>6%</td>
                                        </tr>
                                        <tr>
                                            <th>Proteínas</th>
                                            <td>3,2g</td>
                                            <td>4%</td>
                                        </tr>
                                        <tr>
                                            <th>Gorduras totais</th>
                                            <td>3g</td>
                                            <td>5%</td>
                                        </tr>
                                        <tr>
                                            <th>Gorduras saturadas</th>
                                            <td>1g</td>
                                            <td>4%</td>
                                        </tr>
                                        <tr>
                                            <th>Gorduras trans</th>
                                            <td>Não contém</td>
                                            <td>**%</td>
                                        </tr>
                                        <tr>
                                            <th>Fibra alimentar</th>
                                            <td>2,5g</td>
                                            <td>10%</td>
                                        </tr>
                                        <tr>
                                            <th>Sódio</th>
                                            <td>19mg</td>
                                            <td>1%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="section-content no-margin">
                                <p>*%Valores diários de referência com base em uma dieta de 2000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **VD não estabelecido.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="produto-informacoes">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title text-center">
                                <h4 class="title">Registro e validade</h4>
                            </div>
                            
                            <div class="section-content no-margin">
                                <p>Prazo de validade de 6 meses - Armazenado a temperatura ambiente e protegido contra umidade. Registro no Ministério da Saúde: Isento conforme Resolução N° 27, de 6 de agosto de 2010.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="produtos-relacionados no-margin">
                    <div class="section-title text-center">
                        <h2 class="title">Que tal se deliciar com nossos produtos?</h2>
                    </div>

                    <div class="navigation-wrap produtos-relacionados-wrap">
                        <div class="produtos-relacionados swiper-container">
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
    <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/maska@latest/dist/maska.js"></script>
    <script src="./assets/js/main.js"></script>
    <script src="./assets/js/detalhe.js"></script>
    
</body>
</html>