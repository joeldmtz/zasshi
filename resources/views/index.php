<!DOCTYPE html>
<html lang="en" ng-app="App"  >
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="sushi, mazatlan, comida mazatlan, rollos, zasshi, japanise, bistro">
    <meta name="description" content="Restaurant de sushi en mazatlan con los mejores sushis y japanese bistro ubicados en Av.camáron sabalo 1103 Local 05, Sabalo country, El Encanto, 82100 Mazatlán, SIN">
    <title>Zasshi</title>
    <link rel="icon" href="/page/images/favicon.ico" type="image/x-icon">
    <script type="text/javascript" src="page/js/jquery-1.12.4.min.js"></script>
    <link href="page/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="page/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="page/css/estilos.css" rel="stylesheet">
    <link rel="stylesheet" href="page/css/animate.min.css">
    <link href="page/css/lightgallery/lightgallery.min.css" rel="stylesheet">
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC09siOFjeTIcpyKb4VoMkS1cY5ryxvu_8"></script>
    <script src="page/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="page/js/index.js"></script>
    <script src="page/js/angular.min.js"></script>
    <script src="page/js/app.js"></script>
    <script src="page/js/lightgallery.min.js" ></script>
    <script>
        var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat:  23.25495219, lng: -106.45828363},
                zoom: 17
            });
            var image = 'page/images/<?= $section_contact[0]->icon_mark?>';
            var beachMarker = new google.maps.Marker({
                position: {lat: <?= $section_contact[0]->lat?>,lng:<?= $section_contact[0]->long?>},
                map: map,
                icon: image
            });
        }
        setTimeout(initMap,2000)
    </script>
</head>
<body ng-controller="menuScroll">
<section id="header" ng-style="{'background-image': 'url(page/images/backgrounds/optimized/'+background+')','background-size': 'cover'}">
    <div class="fondo-color">
        <nav class="navbar">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="col-md-3 col-sm-3">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed nav-white" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <img class="logo" src="page/images/logo_zasshi.png" alt="" width="100%"/>
                        <!--<a class="navbar-brand main-logo" href="#">ZASSHI</a>-->
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul  class="nav navbar-nav main-menu">
                        <li><a ng-click="gotoElement('header')" href="#">INICIO</a></li>
                        <li><a ng-click="gotoElement('about-us')">ACERCA</a></li>
                        <li><a ng-click="gotoElement('gallery')" href="#">GALERÍA</a></li>
                        <li><a ng-click="gotoElement('menu')" href="#">MENÚ</a></li>
                        <li><a ng-click="gotoElement('testimonials')"  href="#">TESTIMONIOS</a></li>
                        <!--<li><a href="#">NEWS</a></li>-->
                        <li><a ng-click="gotoElement('footer')" href="#">CONTACTO</a></li>
                    </ul>
                    <!--<ul class="nav navbar-nav navbar-right">
                        <li><a href="#" class="button-menu opensans-14">Tel: 176 22 48</a></li>
                    </ul>-->
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="main-center">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                        <!--<i class="fa fa-cutlery cutlery" aria-hidden="true"></i>-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                        <span class="main-text">BUENAS</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                        <span class="text-underlined"></span>
                        <span class="underline"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                        <span class="subtitle push-top">Japanese bistro</span>
                    </div>
                </div>
                <<div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                    <!--<img class="icon-main" src="page/images/shape-1.png">-->
                    <div class="icon-main">

                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
<section id="about-us">
    <div class="container">
        <div class="row">
            <!--<div class="col-md-3 hidden-sm hidden-xs">
                <div class="dishes-images">
                    <div class="fondo-circle-dark text-center">
                        <span class="about-fanshi opensans-25-bold">FANSHIFOOD</span>
                        <span class="about-fanshi opensans-12-bold">SUPER RESTORENT</span>
                    </div>
                </div>
            </div>-->
            <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                        <div class="orange-line text-center">
                            <span class="title-1">ACERCA DE NOSOTROS</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                        <p class="description">
                            Somos una empresa comprometida con la excelencia en todo lo que hacemos, logramos hacer de un platillo algo extraordinario y de nuestro servicio la mejor de las experiencias.
                        </p>
                        <?php foreach($section_aboutus as $item): ?>
                            <span class="subtitle"><?= $item->title ?></span>
                            <p class="description"><?= $item->description ?></p>

                        <?php  endforeach;?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="gallery">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                <span class="title-2">GALERÍA</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                <span class="subtitle">Descubre nuestros rollos</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-center">
                <p class="description"></p>
            </div>
        </div>
    </div>
    <div class="row row-gallery lightgallery">
        <?php foreach ($section_gallery as $item): ?>
        <a href="/storage/<?= $item->url ?>" data-sub-html="<h4><?= $item->name ?></h4><p class='dish-description'><?= $item->description ?></p>" class="col-md-3 col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0 col-md-offset-0 img-gallery">
            <img ng-src="/storage/thumbs/<?= $item->url ?>" />
        </a>
        <?php endforeach; ?>
    </div>
</section>
<section id="menu">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                <div class="orange-line text-center">
                    <span class="title-1">NUESTRO MENÚ</span>
                </div>
            </div>
        </div>
        <div  ng-controller="menu">
            <div class="row">
                <div class="col-md-10 col-md-offset-1 col-sm-12 col-xs-12 div-marco text-center">
                    <ul class="menu  menu-2">
                        <li ng-repeat="item in types"><a class="item-gallery" ng-class="{'item-gallery-selected': $index==selected}" ng-click="selectType($index)">{{item.name}}</a></li>
                    </ul>
                </div>
            </div>
            <div ng-repeat="subtype in types[selected].submenus" class="col-md-4 col-subtype">
                <p class="subtitle">{{subtype.name}}</p>
                <div ng-repeat="sushi in subtype.dishes" class="row">
                    <div class="row">
                        <div ng-show="sushi.image  != undefined" class="col-md-3 col-sm-2 col-xs-2 menu-image">
                            <!--<img src="page/images/menu-1.jpg" alt="menu">-->
                        </div>
                        <div class="col-md-12 col-sm-10 col-xs-10">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                            <span class="dish-name">{{sushi.name}}
                                <span class="no-bold">
                                <span ng-show="sushi.price"> $</span>
                                    <span class="price">{{sushi.price}}</span>
                                </span>
                            </span>
                                    <div ng-show="sushi.ingredients">
                                            <p ng-repeat="ingredient in sushi.ingredients">
                                                <span>{{ingredient.name}} </span>
                                                <span class="no-bold">$<span class="price no-bold">{{ingredient.price}}</span>
                                                </span>
                                            </p>

                                    </div>
                                </div>
                                <div ng-show ="sushi.description"class="col-md-12 col-sm-12 col-xs-12">
                                    <p class="sushi-description">{{sushi.description}}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="testimonials">
<div class="backgroundImageCVR">
    <div class="background-image"></div>
    <div class="opacity"></div>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                    <span class="title-2">TESTIMONIOS</span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                    <span class="subtitle sub-small">¿Que dicen los clientes de nosotros?</span>
                </div>
            </div>
            <?php $n = (count($section_testimonials)==0)?0:rand(0,count($section_testimonials)); if ($n>0) $n-=1; ?>
            <div class="row">
                <div class="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center">
                    <p><?= $section_testimonials[$n]->comment; ?></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                    <?php for($i=0; $i<$section_testimonials[$n]->rank; $i++): ?>
                    <i class="fa fa-star star" aria-hidden="true"></i>
                        <?php endfor; ?>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                    <span class="client"><?= $section_testimonials[$n]->user; ?></span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                    <span class="client-more">Cliente</span>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<section id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-md-offset-0 col-sm-offset-0">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <span class="footer-title">HORARIOS</span>
                    </div>
                </div>
                <div class="row away-16">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <?php foreach ($section_schedule as $item): ?>
                        <div class="opensans-14 footer-open-font">
                            <span><?= $item->days ?>..............................................................................</span>
                            <span>
                                <span>
                                    <?= $item->hours ?>
                                </span>
                                <hr>
                            </span>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-8 col-xs-offset-2 col-md-offset-0 col-sm-offset-0">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <span class="footer-title">CONTACTO</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <span class="info"><i class="fa fa-home" aria-hidden="true"></i><?= $section_contact[0]->address; ?></span>
                        <span class="info"><i class="fa fa-phone" aria-hidden="true"></i><span></span><?= $section_contact[0]->telephone; ?></span>
                        <span class="info"><i class="fa fa-envelope" aria-hidden="true"></i><?= $section_contact[0]->email; ?></span>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <span class="footer-title text-center">UBICACIÓN</span>
            </div>
        </div>
    </div>
</section>
<div id="map"></div>
<section id="copyright">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                <span class="copyright">Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2017 zazzhi sushi todos los derechos reservados</span>
            </div>
        </div>
    </div>
</section>
</body>
</html>
