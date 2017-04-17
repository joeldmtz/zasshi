/*
SQLyog Community v12.3.3 (32 bit)
MySQL - 5.7.17 : Database - zasshi
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`zasshi` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `zasshi`;

/*Table structure for table `contact_schedules` */

DROP TABLE IF EXISTS `contact_schedules`;

CREATE TABLE `contact_schedules` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `days` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hours` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `contact_schedules` */

insert  into `contact_schedules`(`id`,`days`,`hours`,`created_at`,`updated_at`,`status`) values 
(1,'Domingo a Jueves','1:30 PM a 11:00 PM',NULL,NULL,1),
(2,'Viernes y Sabado','1:30 PM a 12:00 AM',NULL,NULL,1);

/*Table structure for table `dish_ingredients` */

DROP TABLE IF EXISTS `dish_ingredients`;

CREATE TABLE `dish_ingredients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(5,2) NOT NULL,
  `dish_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `dish_ingredients_dish_id_foreign` (`dish_id`),
  CONSTRAINT `dish_ingredients_dish_id_foreign` FOREIGN KEY (`dish_id`) REFERENCES `dishes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `dish_ingredients` */

/*Table structure for table `dishes` */

DROP TABLE IF EXISTS `dishes`;

CREATE TABLE `dishes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(5,2) NOT NULL,
  `sub_menu_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `dishes_sub_menu_id_foreign` (`sub_menu_id`),
  CONSTRAINT `dishes_sub_menu_id_foreign` FOREIGN KEY (`sub_menu_id`) REFERENCES `sub_menus` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `dishes` */

insert  into `dishes`(`id`,`description`,`price`,`sub_menu_id`,`created_at`,`updated_at`,`name`,`status`) values 
(1,'callo de hacha, atún, camarón, kanikama (200gr).',100.00,1,NULL,NULL,'CEVICHE DE MARISCOS',1),
(2,'calamares rellenos de pasta de cangrejo y bañados en salsa de anguila (según tamaño).',65.00,1,NULL,NULL,'KOIKAS',1),
(3,'',45.00,2,NULL,NULL,'Queso Chihuahua',1),
(4,'arroz frito con verduras.',50.00,7,NULL,NULL,'YAKIMESHI',1);

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`,`status`) values 
(1,'2014_10_12_000000_create_users_table',1,1),
(2,'2014_10_12_100000_create_password_resets_table',1,1),
(3,'2017_04_03_152023_create_section_about_table',1,1),
(4,'2017_04_03_152031_create_section_contact_table',1,1),
(5,'2017_04_03_152046_create_contact_schedules_table',1,1),
(6,'2017_04_03_152110_create_section_galery_table',1,1),
(7,'2017_04_03_152120_create_section_testimonials_table',1,1),
(8,'2017_04_04_134425_create_section_menu_table',1,1),
(9,'2017_04_04_134736_create_dish_table',1,1),
(10,'2017_04_04_134745_create_dish_ingredient_table',1,1),
(11,'2017_04_04_134850_create_submenu_table',1,1),
(12,'2017_04_04_142850_add_key_submenu_table',1,1),
(13,'2017_04_04_143143_add_foreignkey_dish_table',1,1);

/*Table structure for table `password_resets` */

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_resets` */

/*Table structure for table `section_abouts` */

DROP TABLE IF EXISTS `section_abouts`;

CREATE TABLE `section_abouts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `section_abouts` */

insert  into `section_abouts`(`id`,`title`,`description`,`created_at`,`updated_at`,`status`) values 
(1,'MISIÓN','Ofrecer los platillos más representativos de la comida japonesa y nikei con la mejor calidad, acompañada de un cálido y amable servicio, a un precio justo, en un ambiente que contrasta la sobriedad de la cultura con modernidad, superando las expectativas del más exigente.',NULL,NULL,1),
(2,'VISIÓN','Que nuestro restaurante sea reconocido por la originalidad, calidad de nuestros platillos y servicio para así lograr ser una de las franquicias de comida japonesa con mayor crecimiento en el país.',NULL,NULL,1);

/*Table structure for table `section_contacts` */

DROP TABLE IF EXISTS `section_contacts`;

CREATE TABLE `section_contacts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `long` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon_mark` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `section_contacts` */

insert  into `section_contacts`(`id`,`address`,`telephone`,`email`,`lat`,`long`,`icon_mark`,`created_at`,`updated_at`,`status`) values 
(1,'Av.camáron sabalo 1103 Local 05, Sabalo country, El Encanto, 82100 Mazatlán, SIN','01 669 176 2248','zasshimzt@gmail.com',' 23.25495219','-106.45828363','icon-mark.png',NULL,NULL,1);

/*Table structure for table `section_galeries` */

DROP TABLE IF EXISTS `section_galeries`;

CREATE TABLE `section_galeries` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_thumbnail` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `section_galeries` */

insert  into `section_galeries`(`id`,`name`,`description`,`url`,`url_thumbnail`,`created_at`,`updated_at`,`status`) values 
(1,'CARAMELO','envuelto en aguacate y masago por dentro philadelphia,pepino, encima spicy de camaron empanizado , callo de hacha , bañado en salsa de anguila y ajonjoli.','caramelo-min.jpg','caramelo-min.jpg',NULL,NULL,1),
(2,'CATERPILLAR','ENVUELTO EN AGUACATE, POR DENTRO PHILADLEPHIA,PEPINO, ENCIMA SPICY DE CALLO DE HACHA Y CORONADO CON ANGUILA HORNEADA (50 GR).','caterpillar-min.jpg','caterpillar-min.jpg',NULL,NULL,1),
(3,'CURRICANES','LAMINAS DE ATUN FRESCO RELLENAS DE KANIKAMA,PEPINO Y AGUACATE, SOBRE UN ESPEJO DE YUZU Y BAÑADOS EN SALSA SERRANITO.','curricanes-min.jpg','curricanes-min.jpg',NULL,NULL,1),
(4,'GOHAN HOT','ARROZ GOHAN CON SPICY DE CAMARON Y CANGREJO HORNEADO, CON AGUACATE Y BAÑADO EN SALSA DE ANGUILA.','gohanhot-min.jpg','gohanhot-min.jpg',NULL,NULL,1),
(5,'MOMOY','Rollo de mamenori , sobre un espejo de cilantro,por dentro atun,kanikama,camaron tempura,philadelphia,aguacate, por fuera mango y chile serrano , bañado en salsa serranito.','mangoroll-min.jpg','mangoroll-min.jpg',NULL,NULL,1),
(6,'TUNA SPICY','POR DENTRO, CAMARON TEMPURA ,AGUACATE,PHILADELPHIA,ENVUELTO ES SPICY TUNA , CORONADO CON AGUACATE Y BAÑADO EN SALSA DE LA CASA Y AJONJOLI.','spicytuna-min.jpg','spicytuna-min.jpg',NULL,NULL,1),
(7,'TERIYAKI CRISPY CHICKEN','POLLO TERIYAKI CRUJIENTE ACOMPAÑADO DE ZANAHORIA,PIMIENTO,BROCOLI,CEBOLLA CAMBRAY Y CACAHUATE  , ACOMPAÑADO DE ARROZ GOHAN.','teriyakicrispy-min.jpg','teriyakicrispy-min.jpg',NULL,NULL,1),
(8,'TOKAI','Rollo de mamenori,camaron tempura por dentro,aguacate,philadelphia,kanikama,por fuera pescado fresco,limon real , bañado en salsa serranito.','tokai-min.jpg','tokai-min.jpg',NULL,NULL,1),
(9,'HANA ROLL','POR DENTRO CAMARON TEMPURA, PEPINO, ENVUELTO EN ATUN,AGUACATE Y UN TOQUE DE LIMON,BAÑADO CON ACEITE DE CURRY Y SALSA PONZU.','hanaroll-min.jpg','hanaroll-min.jpg',NULL,NULL,1),
(10,'KENSAO','Por dentro aguacate,pepino ,philadelphia, envuelto en camaron , bañado en aderezo spicy y bañado en salsa de anguila.','kensao-min.jpg','kensao-min.jpg',NULL,NULL,1),
(11,'KOI','POR DENTRO CANGREJO,PHILADELPHIA,PEPINO,ENVUELTO EN MAMENORI. UN ESPEJO DE ADEREZO DE CILANTRO Y SERRANITO, CORONADO CON SPICY CAMARON TEMPURA Y AGUACATE.','koi-min.jpg','koi-min.jpg',NULL,NULL,1),
(12,'MARINA ESPECIAL','PAPEL DE SOYA POR FUERA, POR DENTRO CAMARON TEMPURA,ATUN,KANIKAMA,AGUCATE,LECHUGA , ATUN POR FUERA , BAÑADO EN ADEREZO DE YUZU Y PONZU.','yuzuroll-min.jpg','yuzuroll-min.jpg',NULL,NULL,1);

/*Table structure for table `section_menus` */

DROP TABLE IF EXISTS `section_menus`;

CREATE TABLE `section_menus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `section_menus` */

insert  into `section_menus`(`id`,`name`,`created_at`,`updated_at`,`status`) values 
(1,'ENTRADAS',NULL,NULL,1),
(2,'PLANCHA',NULL,NULL,1),
(3,'NATURALES',NULL,NULL,0),
(4,'EMPANIZADOS',NULL,NULL,0),
(5,'ESPECIALES',NULL,NULL,0),
(6,'HORNEADOS Y PREMIUM',NULL,NULL,0),
(7,'POSTRES Y BEBIDAS',NULL,NULL,0);

/*Table structure for table `section_testimonials` */

DROP TABLE IF EXISTS `section_testimonials`;

CREATE TABLE `section_testimonials` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rank` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `section_testimonials` */

insert  into `section_testimonials`(`id`,`user`,`comment`,`rank`,`created_at`,`updated_at`,`status`) values 
(1,'Ernesto','Muy bueno\r\n',4,NULL,NULL,1);

/*Table structure for table `sub_menus` */

DROP TABLE IF EXISTS `sub_menus`;

CREATE TABLE `sub_menus` (
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `section_menu_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `sub_menus_section_menu_id_foreign` (`section_menu_id`),
  CONSTRAINT `sub_menus_section_menu_id_foreign` FOREIGN KEY (`section_menu_id`) REFERENCES `section_menus` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `sub_menus` */

insert  into `sub_menus`(`name`,`section_menu_id`,`created_at`,`updated_at`,`id`,`status`) values 
('ENTRADAS',1,NULL,NULL,1,1),
('KUSHIAGE',1,NULL,NULL,2,1),
('SOPAS',1,NULL,NULL,3,1),
('NIGIRI',1,NULL,NULL,4,1),
('SASHIMI',1,NULL,NULL,6,1),
('ARROZ',2,NULL,NULL,7,1);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
