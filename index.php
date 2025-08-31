<?php
$page = $_GET['page'] ?? 'home';

switch($page) {
    case 'about':
        $title = 'About - Laundry 24 Orlando';
        $content = 'pages/about.php';
        break;
    case 'services':
        $title = 'Services - Laundry 24 Orlando';
        $content = 'pages/services.php';
        break;
    case 'laundroworks':
        $title = 'Laundroworks - Laundry 24 Orlando';
        $content = 'pages/laundroworks.php';
        break;
    case 'contact':
        $title = 'Contact - Laundry 24 Orlando';
        $content = 'contact/contact.php';
        break;
    default:
        $title = 'Advance Coin Laundry - Orlando, Florida Laundrymat';
        $content = 'pages/home.php';
        break;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title><?php echo htmlspecialchars($title); ?></title>
    <meta name="description" content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL." />
    <meta name="keywords" content="laundry, laundromat, Orlando, Florida, coin-operated, wash and fold, dry cleaning" />
    <meta name="author" content="Advance Coin Laundry" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="<?php echo htmlspecialchars($title); ?>" />
    <meta property="og:description" content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="images/favicon.ico" />
    <link rel="stylesheet" href="global.css" />
    <link rel="stylesheet" href="header/header.css" />
    <link rel="stylesheet" href="footer/footer.css" />
    <link rel="stylesheet" href="footer/footer-contact.css" />
    <?php
    // Load page-specific CSS
    switch($page) {
        case 'about':
            echo '<link rel="stylesheet" href="pages/about.css" />';
            break;
        case 'services':
            echo '<link rel="stylesheet" href="pages/services.css" />';
            break;
        case 'laundroworks':
            echo '<link rel="stylesheet" href="pages/laundroworks.css" />';
            break;
        case 'contact':
            echo '<link rel="stylesheet" href="contact/contact.css" />';
            break;
        default:
            echo '<link rel="stylesheet" href="pages/home.css" />';
            echo '<link rel="stylesheet" href="carousel/carousel.css" />';
            break;
    }
    ?>
</head>
<body>
    <div class="App">
        <?php include 'header/header.php'; ?>
        <main>
            <?php include $content; ?>
        </main>
        <?php include 'footer/footer.php'; ?>
    </div>
    <script src="carousel/carousel.js"></script>
    <script src="header/navbar.js"></script>
</body>
</html>