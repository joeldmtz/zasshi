<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <base href="/">
    <title>Zasshi Admin Panel</title>
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon">

    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="/vendor/css/angular-material.min.css">
    <link rel="stylesheet" href="/vendor/css/md-data-table.min.css">
    <link rel="stylesheet" href="/vendor/css/md-expansion-panel.min.css">
    <link rel="stylesheet" href="/css/main.css">
</head>
<body ng-app="MyApp" ng-cloak layout="column" flex>

     <?php echo $__env->yieldContent('toolbar'); ?>

     <div layout="column" ng-cloak flex>
        <?php echo $__env->yieldContent('body'); ?>
     </div>

 <script src="/vendor/js/angular/1.6.2/angular.min.js"></script>
 <script src="/vendor/js/angular/1.6.2/angular-route.min.js"></script>
 <script src="/vendor/js/angular/1.6.2/angular-animate.min.js"></script>
 <script src="/vendor/js/angular/1.6.2/angular-aria.min.js"></script>
 <script src="/vendor/js/angular/1.6.2/angular-messages.min.js"></script>
 <script src="/vendor/js/angular/1.6.2/angular-resource.min.js"></script>
 <script src="/vendor/js/angular/1.6.2/angular-material.min.js"></script>
 <script src="/vendor/js/angular/1.6.2/angular-local-storage.min.js"></script>
 <script src="/vendor/js/md-expansion-panel.min.js"></script>
<script src="/vendor/js/ui-bootstrap-tpls-2.5.0.min.js"></script>
 <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0rWIe6whIh0Ktzu3W6srvDRCrkOimnlc"></script>
 <script src="/vendor/js/angular-google-maps-geocoder.js"></script>
 <script src="/js/main.js"></script>
 <script src="/js/login.js"></script>
 <script src="/js/modules/about.js"></script>
 <script src="/js/modules/testimonial.js"></script>
 <script src="/js/modules/menu.js"></script>
 <script src="/js/modules/submenu.js"></script>
 <script src="/js/modules/contact.js"></script>
 <script src="/js/modules/dishes.js"></script>
 <script src="/js/modules/variants.js"></script>
 <script src="/js/modules/schedule.js"></script>
 <script src="/js/modules/gallery.js"></script>
</body>
</html>
