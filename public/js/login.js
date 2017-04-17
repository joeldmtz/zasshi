(function() {
    var app = angular.module('MyApp')

    app.controller('login', function($scope, $http) {
        $scope.login = function() {
            $http.post('/login', $scope.user)
                .then(function (response) {
                    window.location = '/admin'
                })
                .catch(function(error) {
                })
        }
    })
})()



var x = [
        [
        {
            name:'ENTRADAS',
            dishes:[
                {
                    name:'CEVICHE DE MARISCOS',
                    description:'Callo de hacha, atún, camarón, kanikama (200gr)',
                    price:100
                },
                {
                    name:'KOIKAS',
                    description:'Calamares rellenos de pasta de cangrejo y bañados en salsa de anguila (según tamaño)',
                    price:65
                },
                {
                    name:'CONCHA DE MARISCOS',
                    description:'Spicy de maricos gratinados (200gr) de marisco',
                    price:105
                },
                {
                    name:'CAMARONES ESPECIALES 3 PZAS',
                    description:'Camarones capeados (60gr), rellenos de spicy kanikama, envueltos en alga y bañados en salsa de anguila ',
                    price:95
                },
                {
                    name:'TOSTADA TUNA 2 PZAS',
                    description:'Laminas de atún fresco (30gr), sobre una hoja de won ton, encima cebolla morada, aguacate y bañadas en salsa especial',
                    price:80
                },
                {
                    name:'MANGO HOT',
                    description:'Pollo capeado (100gr), servido sobre una cama de arroz blanco, bañado en salsa de mango',
                    price:80
                },
                {
                    name:'CURRICANES',
                    description:'Laminas de atún fresco rellenas de kanikam, pepino y aguacate, sobre un espejo de yuzu y bañados en salsa serranito',
                    price:95
                },
                {
                    name:'SUSHILIS 3 PZAS',
                    description:'Chile caribe relleno de tampico o queso philadelphia',
                    price:55
                },
                {
                    name:'VERDURAS TEMPURA',
                    description:'Verduras tempura, acompañadas de arroz gohan',
                    price:80
                },
                {
                    name:'EDAMAME',
                    description:'Vaina de soya al vapor',
                    price:60
                },
            ]
        },
        {
            name:'KUSHIAGE',
            dishes:[
                {
                    name:'Queso Chihuahua',
                    price:45
                },
                {
                    name:'Plátano',
                    price:45
                },
                {
                    name:'Queso philadelphia con plátano ',
                    price:55
                },
                {
                    name:'Camarón con philadelphia',
                    price:65
                },
            ]

        },
        {
            name:'NIGIRI',
            dishes:[
                {
                    name:'EBY-CAMARÓN',
                    price:20
                },
                {
                    name:'TAKO-PULPO',
                    price:20
                },
                {
                    name:'MAGURO-ATÚN',
                    price:20
                },
                {
                    name:'MASAGO- HUEVA DE PEZ VOLADOR',
                    price:30
                },
                {
                    name:'SAKE-SALMÓN',
                    price:30
                },
                {
                    name:'UNAGUI-ANGUILA',
                    price:30
                },
                {
                    name:'PESCA DEL DIA',
                    price:35
                },
            ]
        },
        {
            name:'SOPAS',
            dishes:[
                {
                    name:'MISOSHIRO',
                    description:'Sopa de soya, cebollin, champiñon, fideo y tofu',
                    price:40
                },
                {
                    name:'UDON',
                    description:'Pasta udon, verduras de pollo',
                    price:70
                },
                {
                    name:'UDON',
                    description:'Pasta udon, verduras de camarón',
                    price:80
                }
            ]
        },
        {
            name:'SASHIMI',
            dishes:[
                {
                    name:'SASHIMI SERRANITO',
                    description:'120gr de pescado bañado en salsa especial, chile serrano, ajonjolí y un toque de limón',
                    price:110
                },
                {
                    name:'SASHIMI CILANTRO',
                    description:'120gr de atún sellado bañado en salsa de la casa y ajonjolí',
                    price:110
                }
            ]
        }
    ],
        [
            {
                name:'ARROZ',
                dishes:[
                    {
                        name:'YAKIMESHI',
                        description:'ARROZ FRITO CON VERDURAS',
                        price:50

                    },
                    {
                        name:'YAKIMESHI ESPECIAL',
                        description:'ARROZ FRITO CON VERDURAS, TAMPICO,AGUACATE,PHILADELPHIA , BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:70
                    },
                    {
                        name:'YAKIMESHI MIXTO',
                        description:'ARROZ FRITO  CON CAMARON,POLLO Y RES ( 100 GR DE PROTEINA)',
                        price:75
                    },
                    {
                        name:'ARROZ CULICHI',
                        description:'ARROZ FRITO CON PHILADELPHIA,AGUACATE,BAÑADO EN SALSA DE ANGUILA Y AJONJOLI CAMARON (100 GR)',
                        price:85

                    },
                    {
                        name:'ARROZ CULICHI',
                        description:'ARROZ FRITO CON PHILADELPHIA,AGUACATE,BAÑADO EN SALSA DE ANGUILA Y AJONJOLI POLLO O RES (100 GR)',
                        price:75

                    },
                    {
                        name:'ARROZ CULICHI',
                        description:'ARROZ FRITO CON PHILADELPHIA,AGUACATE,BAÑADO EN SALSA DE ANGUILA Y AJONJOLI MIXTO ( 100 GR DE PROTEINA)',
                        price:90

                    },
                    {
                        name:'GOHAN CAKE',
                        description:'ARROZ  GOHAN EN CAPAS CON TAMPICO,CAMARON(60 GR),AGUACATE,QUESO PHILADELPHIA,BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:80
                    },
                    {
                        name:'GOHAN HOT',
                        description:'ARROZ GOHAN CON SPICY DE CAMARON Y CANGREJO HORNEADO, CON AGUACATE Y BAÑADO EN SALSA DE ANGUILA',
                        price:90
                    },
                    {
                        name:'GOHAN CRUJIENTE',
                        description:'ARROZ GOHAN ,PHILADELPHIA,POLLO CRUJIENTE,CEBOLLA TEMPURA, FURIKAKE , TAMPICO Y SALSA DE ANGUILA',
                        price:80
                    },    {
                        name:'EBIDON',
                        description:'ARROZ GOHAN,KANIKAMA,MASAGO, CON AGUACATE ,QUESO PHILADELPHIA, CAMARON EMPANIZADO (30 GR) ,BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:85
                    },
                ]
            },
            {
                name:'PLANCHA',
                dishes:[
                    {
                        name:'TEPANYAKI',
                        ingredients:[
                            {name:'CAMARON (100 GR)', price:120},
                            {name:'POLLO O RES (100 GR)',price:100},
                            {name:'MIXTO ( 100 GR DE PROTEINA)', price:110}
                        ],
                        description:'VERDURAS AL VAPOR SAZONADAS ACOMPAÑADAS DE ARROZ GOHAN'
                    },
                    {
                        name:'TERIYAKI CRISPY CHICKEN',
                        description:'POLLO TERIYAKI CRUJIENTE ACOMPAÑADO DE ZANAHORIA,PIMIENTO,BROCOLI,CEBOLLA CAMBRAY Y CACAHUATE  , ACOMPAÑADO DE ARROZ GOHAN',
                        price:100
                    },
                    {
                        name:'SPICY NOODLE',
                        description:'BROCOLI, MORRON,CEBOLLA CAMBRAY,CILANTRO,CHILE DE ARBOL Y  NOODLE  ACOMPAÑADO DE ARROZ GOHAN',
                        price:105
                    },
                    {
                        name:'TERIYAKI',
                        description:'VERDURAS AL VAPOR SAZONADAS , BAÑADAS CON SALSA TERIYAKI Y ACOMPAÑADAS DE ARROZ GOHAN',
                        ingredients:[
                            {name:'CAMARON (150 GR)',price:120},
                            {name:'POLLO O RES (150 GR)',price:100},
                            {name:'MIXTO ( 100 GR DE PROTEINA)',price:105},
                        ]
                    },
                    {
                        name:'YAKI UDON',
                        description:'VERDURAS AL VAPOR , PASTA UDON , ACOMPAÑADAS DE ARROZ GOHAN',
                        ingredients:[
                            {name:'CAMARON (150 GR)',price:120},
                            {name:'POLLO O RES (100 GR)',price:110},
                            {name:'MIXTO ( 150GR DE PROTEINA)',price:110},
                        ]
                    },
                    {
                        name:'YAKI SOBA',
                        description:'VERDURAS ASADAS ,PASTA YAKISOBA , ACOMPAÑADAS DE ARROZ GOHAN',
                        price:120
                    },
                    {
                        name:'SEULAKI',
                        description:'VERDURAS  AL VAPOR ,FIDEO HARUSAMEN, CON UN TOQUE PICANTE Y DE LIMON',
                        ingredients:[
                            {name:'SALMON (150 GR)',price:130},
                            {name:'CAMARON (150 GR)',price:120},
                            {name:'MIXTO POLLO,RES Y CAMARON ( 100 GR DE PROTEINA)',price:110},
                            {name:'MIXTO POLLO,RES Y CAMARON ( 100 GR DE PROTEINA)',price:110},
                        ]
                    }
                ]
            },
        ],
        [
            {
                name:'MAKI NATURAL',
                dishes:[
                    {
                        name:'CALIFORNIA',
                        description:'AJONJOLI POR FUERA, CAMARON, AGUACATE, PHULADELPHIA POR DENTRO',
                        price:70
                    },
                    {
                        name:'PHILADELPHIA',
                        description:'QUESO PHILADELPHIA  Y AJONJOLI POR FUERA , CANGREJO ,AGUACATE,PEPINO POR DENTRO',
                        price:75
                    },
                    {
                        name:'ABOCADO',
                        description:'AGUACATE Y SPICY MAYO , CANGREJO  ,PEPINO Y QUESO PHILADELPHIA POR DENTRO',
                        price:75
                    },
                    {
                        name:'MEXICO',
                        description:'SALMON,QUESO PHILADELPHIA  Y AGUACATE POR FUERA , CANGREJO,AGUACATE,PEPINO POR DENTRO',
                        price:80
                    },
                    {
                        name:'GUAMUCHLITO',
                        description:'TAMPICO Y LAMINAS DE AGUACATE POR FUERA, CAMARON,QUESO PHILADELPHIA  POR DENTRO',
                        price:80
                    },
                    {
                        name:'TAMPICO',
                        description:'TAMPICO Y BAÑADO CON ADEREZO SPICY Y SALSA DE ANGUILA POR FUERA, CAMARON,AGUACATE,QUESO PHILADELPHIA POR DENTRO',
                        price:82
                    }
                ]
            },
            {
                dishes:[
                    {
                        name:'TUNA SPICY',
                        description:'POR DENTRO, CAMARON TEMPURA ,AGUACATE,PHILADELPHIA,ENVUELTO ES SPICY TUNA , CORONADO CON AGUACATE Y BAÑADO EN SALSA DE LA CASA Y AJONJOLI.',
                        price:90
                    },
                    {
                        name:'SENZO ROLL',
                        description:'CAMARON TEMPURA POR DENTRO ,AGUACATE,PHILADELPHIA,CANGREJO,ENVUELTO EN SALMON Y ATUN , BAÑADO EN ADEREZO SPICY Y ANGUILA CORONADO CON MASAGO',
                        price:90
                    },
                    {
                        name:'SAKANA',
                        description:'ENVUELTO EN ATUN ,POR DENTRO TAMPICO ,AGUACATE Y PHILADELPHIA , POR FUERA ADEREZO SPICY Y UN TOQUE DE SRIRACHA.',
                        price:90
                    },
                    {
                        name:'SAKURA',
                        description:'POR DENTRO CANGREJO TEMPURA , AGUACATE, SPICY TUNA , ENVUELTO EN AGUACATE , UN TROZO DE ATUN, AGUACATE Y ADEREZO SPICY',
                        price:95
                    },
                    {
                        name:'TAMPICO ESPECIAL',
                        description:'POR DENTRO CANGREJO EMPANIZADO,AGUACATE,PEPINO,PHILADELPHIA,ENVUELTO EN PASTA TAMPICO Y CAMARON , BAÑADO EN ADEREZO DE LA CASA Y SALSA DE ANGUILA',
                        price:90
                    },
                    {
                        name:'SUKI',
                        description:'POR DENTRO  AGUACATE,PHILADELPHIA,PEPINO , POR FUERA  ENVUELTO EN SALMON Y TAMPICO , BAÑADO EN ADEREZO YUZU',
                        price:95
                    }
                ]
            }
        ],
        [
            {
                name:'MAKI EMPANIZADO O CAPEADO',
                dishes:[
                    {
                        name:'TAKEMI',
                        description:'ROLLO EMPANIZADO DE CAMARON(30GR) ,AGUACATE,PHILADELPHIA POR DENTRO  ( AGREGAR C/TAMPICO Y COSTO)',
                        price:70
                    },
                    {
                        name:'TAKEMI ESPECIAL',
                        description:'CANGREJO ,PHILADELPHIA POR DENTRO, SPICY DE CAMARON TEMPURA POR FUERA , BAÑADO EN ADEREZO CHIPOTLE  Y SALSA DE ANGUILA',
                        price:95
                    },
                    {
                        name:'MAR Y TIERRA',
                        description:'RES(15 GR),CAMARON(15 GR),AGUACATE,PEPINO Y PHILADELPHIA POR DENTRO , TAMPICO ENCIMA',
                        price:80
                    },
                    {
                        name:'GUAPO',
                        description:'PHILADELPHIA ,CHILE SERRANO Y QUESO GOUDA POR FUERA, POR DENTRO CAMARON EMPANIZADO(30 GR), ENCIMA ENSALADA KANI',
                        price:85
                    },
                    {
                        name:'FAVORITO ESPECIAL',
                        description:'CANGREJO ,AGUACATE,PHILADELPHIA POR DENTRO, TAMPICO Y AGUACATE POR FUERA , BAÑADO EN SALSA DE ANGUILA',
                        price:75
                    },
                    {
                        name:'TRES QUESOS',
                        description:'CAMARON,AGUACATE,PEPINO POR DENTRO, POR FUERA QUESO AMARILLO,GOUDA,Y PHILADELPHIA , ENCIMA TAMPICO',
                        price:80
                    },
                ]
            },
            {
                dishes:[
                    {
                        name: 'TORI TORI',
                        description:'AGUACATE,CAMARON Y RES POR DENTRO,PHILADELPHIA,CANGREJO Y QUESO GRATINADO POR FUERA',
                        price:75
                    },
                    {
                        name:'GRAN FUTOMAKI',
                        description:'ALGA CAPEADA POR FUERA , POR DENTRO CANGREJO,AGUACATE,PHIADELPHIA , ADEREZO SPICY Y POLLO CRISPY ENCIMA , BAÑADO EN SALSA DE ANGUILA ',
                        price:85
                    },
                    {
                        name:'NORI ROLL',
                        description:'ALGA POR FUERA CAPEADA , POR DENTRO AGUACATE,PHILADELPHIA PEPINO , ENCIMA SPICY DE CANGREJO CAPEADO Y UNA LAMINA DE AGUACATE',
                        price:95
                    },
                    {
                        name:'ROCK  ROLL',
                        description:'POR DENTRO ,AGUACATE,PHILADELPHIA,CANGREJO , CORONADO CON  PALOMITAS DE CAMARON SPICY',
                        price:95
                    },
                    {
                        name:'FUTOMAKI',
                        description:'ROLLO CAPEADO ENVUELTO EN ALGA , POR DENTRO SALMON (20 GR)CAMARON(30 GR)CANGREJO,CORONADO CON ENSALADA KANIKAMA, Y BAÑADO ENS ALSA DE ANGUILA',
                        price:95
                    }
                ]
            }
        ],
        [
            {
                name:'MAKI ESPECIAL',
                dishes:[
                    {
                        name:'ABOCADO MAKI',
                        description:'ENVUELTO EN AGUACATE,ENCIMA SPICY DE CALLO DE HACHA Y CORONADO CON CAMARON EMPANIZADO,BAÑADO EN SALSA DE ANGUILA,POR DENTRO PHILADELPHIA,PEPINO',
                        price:120
                    },
                    {
                        name:'EBI MAKI ESPECIAL',
                        description:'ENVUELTO EN CAMARON Y AGUACATE ,POR DENTRO PHILADELPHIA,PEPINO, ENCIMA ADEREZO DE MASAGO CORONADO CON CAMARON EMPANIZADO , BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:100
                    },
                    {
                        name:'GREÑUDO',
                        description:'ENVUELTO EN AGUACATE,PULPO  20 GR , POR DENTRO PEPINO,QUESO PHILADELPHIA, ENCIMA ENSALADA KANIKAMA , CAMARON EMPANIZADO ( 40 GR) , BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:105
                    },
                    {
                        name:'ARRASTRADO',
                        description:'ENVUELTO EN SALMON (20 GR) ATUN (20GR) AGUACATE, POR DENTRO PHILADLEPHIA,PEPINO,ENCIMA ENSALADA KANIKAMA,CAMARON EMPANIZADO (40GR),BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:105
                    },
                    {
                        name:'CATERPILLAR',
                        description:'ENVUELTO EN AGUACATE, POR DENTRO PHILADLEPHIA,PEPINO, ENCIMA SPICY DE CALLO DE HACHA Y CORONADO CON ANGUILA HORNEADA (50 GR)',
                        price:120
                    },
                    {
                        name:'MELISA ROLL',
                        description:'POR FUERA SHISHIMI, POR DENTRO CAMARON TEMPURA (40GR) AGUACATE,PHILADELPHIA,PEPINO, CORONADO CON SPICY DE CAMARON CRUJIENTE',
                        price:108
                    },
                    {
                        name:'CALAMAR CRISPY',
                        description:'MASAGO Y AJONJOLI POR FUERA , POR DENTRO AGUACATE , PHILADELPHIA,PEPINO , CORONADO CON SPICY DE CALAMAR CRUJIENTE, BAÑADO EN SALSA DE ANGUILA',
                        price:90
                    },
                    {
                        name:'TOMATITOS',
                        description:'ENVUELTO EN ATUN (40 GR) POR DENTRO AGUACATE,PHILADELPHIA,PEPNO , POR FUERA SPICY  DE CAMARON TEMPURA , BAÑADO EN ADEREZO DE CILANTRO',
                        price:105
                    }
                ]
            },
            {
                dishes:[
                    {
                        name:'BUDA ROLL',
                        description:'ENVUELTO EN SALMON(40GR)POR DENTRO CAMARON TEMPURA ,AGUACATE,PHILADELPHIA, SOBRE UN ESPEJO DE CILANTRO BAÑADO EN SALSA DE LA CASA',
                        price:105
                    },
                    {
                        name:'CARAMELO',
                        description:'ENVUELTO EN AGUACATE Y MASAGO  POR DENTRO PHILADELPHIA,PEPINO, ENCIMA SPICY DE CAMARON EMPANIZADO , CALLO DE HACHA , BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:110
                    },
                    {
                        name:'VESTIDITA',
                        description:'ENVUELTO EN PULPO (20GR) CAMARON (20 GR)  Y AGUACATE , POR DENTRO PEPINO Y PHILADELPHIA , ENCIMA ENSALADA KANIKAMA , CAMARON EMPANIZADO ((30 GR) , BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:110
                    },
                    {
                        name:'VENADOS ROLL',
                        description:'ENVUELTO EN CAMARON (30 GR) MASAGO,AGUACATE, POR DENTRO CAMARON TEMPURA ( 30 GR ) ENCIMA ENSALADA KANIKAMA,CANGREJO EMPANIZADO (30 GR )BAÑADO EN SALSA DE ANGUILA',
                        price:110
                    },
                    {
                        name:'DRAGON',
                        description:'ENVUELTO EN PASTA DE CANGREJO , AGUACATE Y MASAGO (10 GR) POR DENTRO CAMARON TEMPURA ,PHILADELPHIA Y PEPINO , BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:100
                    },
                    {
                        name:'IMPERIAL ROLL',
                        description:'SIN ARROZ , ENVUELTO EN ATUN (100 GR)POR DENTRO PASTA DE CANGREJO,CALLO DE HACHA,AGUACATE,PEPINO ,CORONADO CON SPICY TUNA Y BAÑADO EN SALSA SERRANITO',
                        price:130
                    },
                    {
                        name:'TOKIO',
                        description:'POR DENTRO CAMARON TEMPURA (30GR)  AGUACATE,PHLADELPHIA,PEPINO, POR FUERA ATUN ( 20 GR) SALMON (20GR) AGUACATE ,BAÑADO EN ADEREZO DE LA ACSA , SALSA DE ANGUILA Y MASAGO',
                        price:95
                    }
                ]
            }
        ],
        [
            {
                name:'MAKI HORNEADO',
                dishes:[
                    {
                        name:'BELUMA',
                        description:'ENVUELTO EN SALMON (40 GR) POR DENTRO CAMARON ( 30 GR)  AGUACATE , PHILADELPHIA,PEPINO , BAÑADO CON ADEREZO ESPECIAL,SALSA DE ANGUILA Y AJONJOLI',
                        price:105
                    },
                    {
                        name:'SYY ROLL',
                        description:'ENVUELTO EN SALMON ( 40GR)  POR DENTRO AGUACATE,PHILADELPHIA ,PEPINO, ENCIMA SPICY DE CAMARON , ADEREZO DE CILANTRO ,BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:110
                    },
                    {
                        name:'ZASSHI IMPERIAL',
                        description:'ENVUELTO EN CAMARON (15 GR) ATUN (20GR)PULPO (20 GR)SALMON (20GR)CALLO DE HACHA (20 GR) , POR DENTRO AGUACATE,PHILADELPHIA,PEPINO, ENCIMA SPICY DE 7 MARISCOS, BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:110
                    },
                    {
                        name:'CALLO ESPECIAL',
                        description:'ENVUELTO EN MASAGO Y AGUACATE, POR DENTRO PEPNIO,PHILADELPHIA, ENCIMA SPICY DE CALLO HORNEADO, BAÑADO EN SALSA DE ANGUILA',
                        price:120
                    },
                    {
                        name:'ANDREA ESPECIAL',
                        description:'ENVUELTO EN SALMON ( 40GR),POR DENTRO AGUACATE,PHILADELPHIA,PEPINO , ENCIMA SPICY DE PULPO,CAMARON,OSTION AHUMADO, BAÑADO EN SALS ADE ANGUILA Y AJONJOLI',
                        price:110
                    },
                    {
                        name:'KANPAI ROLL',
                        description:'POR DENTRO CAMARON (30 GR),AGUACATE,PHILADELPHIA,PEPINO, POR  FUERA MASAGO , ENCIMA SPICY DE CAMARON ,BAÑADO EN SALSA DE ANGUILA Y AJONJOLI',
                        price:110
                    },
                    {
                        name:'ABOCADO ESPECIAL',
                        description:'AGUACATE Y MASAGO POR FUERA , POR DENTRO PEPINO Y PHILADELPHIA , ENCIMA SPICY DE CAMARON , BAÑADO EN SALSA DE ANGUILA',
                        price:110
                    },
                    {
                        name:'INUTIL',
                        description:'ROLLO EMPANIZADO DE CAMARON,AGUACATE,PHILADELPHIA,PEPINO POR DENTRO, HORNEADO CON QUESO GOUDA,BAÑADO EN SALSA DE ANGUILA',
                        price:90
                    },
                    {
                        name:'KENSAO',
                        description:'ENVUELTO EN CAMARON, POR DENTRO AGUACATE,PHILADELPHIA,PEPINO, HORNEADO CON ADEREZO ESPECIAL, BAÑADO EN SALSA DE ANGUILA',
                        price:100
                    },
                    {
                        name:'EBY HOT',
                        description:'ENVUELTO EN CAMARON (45 GR)  POR DENTRO AGUACATE,PHILADELPHIA,PEPINO, ENCIMA UN SPICY DE CAMARON ,AGUACATE , BAÑADO ENS ALSA DE ANGUILA',
                        price:110
                    },
                    {
                        name:'VOLCANO ROLL',
                        description:'ROLLO CAPEADO ENVUELTO EN ALGA POR DENTRO CAMARON (30 GR)AGUACATE,PHILADELPHIA,ENCIMA SPICY DE PULPO Y CAMARON HORNEADO,BAÑADO EN SALSA DE ANGUILA',
                        price:110
                    },
                    {
                        name:'SAPORO',
                        description:'CAMARON,AGUACATE,PEPINO,PHILADELPHIA POR DENTRO,TAMPICO POR FUERA Y AGUACATE , ACOMPAÑADO DE UN SPICY DE MARISCOS HORNEADO',
                        price:110
                    },
                    {
                        name:'FURAI ESPECIAL',
                        description:'EMPANIZADO,CAMARON(30 GR),AGUACATE,PHILADELPHIA,PEPINO POR DENTRO , SPICY DE CAMARON Y KANI  HORNEADO POR FUERA',
                        price:110
                    }

                ]
            },
            {
                name:'MAKI PREMIUM',
                dishes:[
                    {
                        name:'TOKAI',
                        description:'Rollo de mamenori,camaron tempura por dentro,aguacate,philadelphia,kanikama,por fuera pescado fresco,limon real , bañado en salsa serranito',
                        price:130
                    },
                    {
                        name:'MAZATLAN',
                        description:'ALGA NORI POR FUERA ,ENVUELTO EN ATUN , POR DENTRO AGUACATE,PHILADELHPHIA,CAMARON TEMPURA.BAÑADO EN ADEREZO DE CILANTRO  Y SALSA DE LA CASA',
                        price:130
                    },
                    {
                        name:'MOMOY',
                        description:'Rollo de mamenori , sobre un espejo de cilantro,por dentro atun,kanikama,camaron tempura,philadelphia,aguacate, por fuera mango y chile serrano , bañado en salsa serranito',
                        price:130
                    },
                    {
                        name:'MARINA ESPECIAL',
                        description:'PAPEL DE SOYA POR FUERA, POR DENTRO CAMARON TEMPURA,ATUN,KANIKAMA,AGUCATE,LECHUGA , ATUN POR FUERA , BAÑADO EN ADEREZO DE YUZU Y PONZU',
                        price:130
                    },
                    {
                        name:'CILANTRO ROLL',
                        description:'Rollo de mamoeniro, por dentro camaron tempura,atun , kanikama,philadelphia,pepino,coronado con spicy tuna, laminas de aguacate, bañado en aderezo de cilantro y salsa serranito',
                        price:130
                    },
                    {
                        name:'CABO ROLL',
                        description:'Rollo de mamenori , por dentro camaron tempura y esparrago tempura,Philadelphia, aguacate, envuelto en pescado fresco, coronado con spicy de callo de hacha . bañado en salsa ponzu',
                        price:130
                    }
                ]

            },
            {
                name:'EXTRAS ',
                dishes:[
                    {
                        name:'TAMPICO EXTRA',
                        price:15
                    },
                    {
                        name:'SPICY CAMARÓN, PULPO, ATÚN',
                        price:25
                    },
                    {
                        name:'SPICY CALLO',
                        price:35
                    }
                ]
            }
        ],
        [
            {
                name:'BEBIDAS',
                dishes:[
                    {
                        name:'TE DE JAZMIN ( REFIL)',
                        price: 25
                    },
                    {
                        name:'CALPICO ( VASO )',
                        price:18
                    },
                    {
                        name:'LIMONADA',
                        price: 35
                    },
                    {
                        name:'NARANJADA',
                        price: 35
                    },
                    {
                        name:'REFRESCO ',
                        price:25
                    },
                    {
                        name:'AGUA EMBOTELLADA',
                        price:18
                    }
                ]
            },
            {
                name:'POSTRES',
                dishes:[
                    {
                        name:'HELADO FRITO',
                        description:'HELADO ENVUELTO EN NUESTRO CRUJIENTE TEMPURA , BAÑADO CON CHOCOLATE',
                        price: 50
                    },
                    {
                        name:'FILA BANANA',
                        description:'PLATANO MACHO RELLENO DE QUESO PHILADELPHIA'
                    },
                    {
                        name:'BROWNIE ESPECIAL',
                        description:'BROWNIE ACOMPAÑADO DE NIEVE, BAÑADO CON CHOCOLATE',
                        price:50
                    }
                ]
            },
            {
                name:'CERVEZA NACIONAL',
                dishes:[
                    {
                        name:'PACIFICO 1/2',
                        price:25
                    },
                    {
                        name:'PACIFICO LIGHT 1/2',
                        price:25
                    },
                    {
                        name:'CORONA 1/2',
                        price:25
                    },
                    {
                        name:'NEGRA MODELO',
                        price:35
                    }
                ]
            },
            {
                name:'CERVEZA IMPORTADA',
                dishes:[
                    {
                        name:'SAPORO SILVER',
                        price:80
                    }
                ]
            },
            {
                name:'SAKE',
                dishes:[
                    {
                        name:'SAKE OSEKI',
                        description:'SAKE DE ARROZ JAPONES',
                        ingredients:[
                            {
                                name:'COPA',
                                price:55
                            },
                            {
                                name:'BOTELLA',
                                price:160
                            }
                        ]
                    }
                ]
            }
        ]
    ]







