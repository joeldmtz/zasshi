(function () {
    var routeProviderReference;
    angular.module('MyApp', ['ngMaterial', 'ngRoute', 'ngMessages', 'material.components.expansionPanels'])
        .config(function ($mdThemingProvider, $routeProvider) {
            routeProviderReference = $routeProvider

            $routeProvider.otherwise({
                redirectTo: '/'
            });

            // Temas
            $mdThemingProvider.theme('default')
                .primaryPalette('grey', {
                    'default': '800', // by default use shade 400 from the pink palette for primary intentions
                    'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                    'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
                })
                .accentPalette('red', {
                    'default': '700', // by default use shade 400 from the pink palette for primary intentions
                    'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                    'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
                });

            $mdThemingProvider.theme('dark')
                .primaryPalette('grey')
                .accentPalette('red')
                .dark();


        })
        .run(function ($rootScope, $route) {
            // Secciones
            $rootScope.sections = [
                { _id: '1', name: 'Sitio Web', modules: [
                    { _id: '1', name: 'Acerca de nosotros', url: 'about', icon: 'person' },
                    { _id: '2', name: 'Galeria', url: 'gallery', icon: 'view_carousel' },
                    { _id: '3', name: 'Testimonios', url: 'testimonials', icon: 'people' },
                    { _id: '4', name: 'Horarios', url: 'schedule', icon: 'event' },
                    { _id: '5', name: 'Contacto', url: 'contact', icon: 'contact_mail' },
                ]},
                { _id: '2', name: 'Menu', modules: [
                    { _id: '6', name: 'Menus', url: 'menu', icon: 'assignment' },
                    { _id: '7', name: 'Submenus', url: 'submenu', icon: 'list' },
                    { _id: '8', name: 'Platillos', url: 'dishes', icon: 'restaurant_menu' },
                    { _id: '9', name: 'Variantes', url: 'variants', icon: 'invert_colors' },
                ]}
            ]

            $rootScope.sections.forEach(function (section) {
                if (section.modules) {
                    section.modules.forEach(function (module) {
                        routeProviderReference.when('/' + module.url, {
                            templateUrl: '/templates/' + module.url + '.html'
                        });
                    })
                }
            });
            $route.reload();
        })
        .controller('toolbar', function ($scope, $http) {
            $scope.logout = function() {
                $http.post('/logout')
                    .then(function (response) {
                        window.location = '/admin/login/'
                    })
                    .catch(function (error) {

                    })
            }
        })
        .controller('sidebar', function ($rootScope, $scope, $location, $mdExpansionPanel) {
            $scope.goTo = function(module, section) {
                $location.path(module.url)
                $rootScope.id_section = section._id
                $rootScope.id_module = module._id

                $scope.sections.forEach(function (item) {
                    if(item._id !== section._id) {
                        $mdExpansionPanel(item._id).collapse();
                    }
                })
            }

            $scope.$watch('moduleFilter',function (newValue, oldValue) {
                if (newValue != oldValue) {
                    $scope.sections.forEach(function (item) {
                        $mdExpansionPanel(item._id).expand();
                    })
                    if (newValue == '') {
                        $scope.sections.forEach(function (item) {
                            if(item._id != $scope.id_section){
                                $mdExpansionPanel(item._id).collapse();
                            }
                        })
                    }
                }
            });
        })
})()
