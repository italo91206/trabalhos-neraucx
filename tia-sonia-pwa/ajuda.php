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

        <main class="page-ajuda main-padding">
            
        </main>

        <?php include './partials/footer.php'; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/mmenu-light@3.0.7/dist/mmenu-light.min.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="./assets/js/main.js"></script>
    
</body>
</html>