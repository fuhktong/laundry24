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
        $content = 'pages/contact.php';
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
    <link rel="stylesheet" href="css/global.css" />
    <link rel="stylesheet" href="css/header.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <link rel="stylesheet" href="css/footer-contact.css" />
    <link rel="stylesheet" href="css/home.css" />
    <link rel="stylesheet" href="css/about.css" />
    <link rel="stylesheet" href="css/services.css" />
    <link rel="stylesheet" href="css/contact.css" />
    <link rel="stylesheet" href="css/carousel.css" />
    <link rel="stylesheet" href="css/laundroworks.css" />
</head>
<body>
    <div class="App">
        <?php include 'includes/header.php'; ?>
        <main>
            <?php include $content; ?>
        </main>
        <?php include 'includes/footer.php'; ?>
    </div>
    <script src="js/carousel.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/contact-form.js"></script>
</body>
</html>