(function () {
    var routeProviderReference;
    angular.module('MyApp', ['ngMaterial', 'ngRoute', 'ngMessages', 'material.components.expansionPanels', 'angular-google-maps-geocoder'])
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
            .run(function ($rootScope, $route, $location, $mdExpansionPanel) {
                // Helper para paginado
                $rootScope.range = function(min, max, step) {
                    step = step || 1;
                    var input = [];
                    for (var i = min; i <= max; i += step) {
                        input.push(i);
                    }
                    return input;
                };

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
                    //{ _id: '9', name: 'Variantes', url: 'variants', icon: 'invert_colors' },
                ]}
            ]

            routeProviderReference.when('/', {
                templateUrl: '/templates/index.html'
            })

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
        .directive('fileModel', ['$parse', function ($parse) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;

                    element.bind('change', function(){
                        scope.$apply(function(){
                            modelSetter(scope, element[0].files[0]);
                        });
                    });

                    scope.$watch(attrs.fileModel, function (newValue, oldValue) {
                        if (!newValue) {
                            element[0].value = ''
                        }
                    });
                }
            };
        }])
        .service('alertService', function($mdDialog) {
            this.show = function (config) {
                return $mdDialog.show(
                    $mdDialog.alert()
                        .title(config.title || 'Alerta')
                        .textContent(config.content || 'Error')
                        .ok('Entendido')
                );
            }
        })
        .service('$fileUpload', function ($http) {
            this.uploadFileToUrl = function(uploadUrl, params){
                params = params || {};
                var fd = new FormData();
                for (var key in params) {
                    fd.append(key, params[key])
                }

                return $http.post(uploadUrl, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                });
            }

            this.updateFileToUrl = function(uploadUrl, params){
                params = params || {};
                var fd = new FormData();
                for (var key in params) {
                    fd.append(key, params[key])
                }

                fd.append('_method', 'PUT');
                return $http.post(uploadUrl, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                });
            }
        })
        .controller('toolbar', function ($scope, $http, $location) {
            $scope.logout = function() {
                $http.post('/logout')
                    .then(function (response) {
                        window.location = '/admin/login/'
                    })
                    .catch(function (error) {

                    })
            }

            $scope.toIndex = function () {
                $location.path('/')
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

            $scope.$on('$locationChangeSuccess', function (next, current) {
                if ($location.$$path === '/') {
                    $rootScope.sections.forEach(function (section) {
                        $mdExpansionPanel(section._id).expand();
                    })
                }
            })

            window.setTimeout(function () {
                if ($location.$$path !== '/') {
                    $rootScope.sections.some(function (section) {
                        var module = section.modules.find(function (module) {
                            return module.url === $location.$$path.slice(1)
                        })

                        if (module) {
                            $rootScope.id_module = module._id;
                            $mdExpansionPanel(section._id).expand();
                            return true
                        }
                    })
                } else {
                    $rootScope.sections.forEach(function (section) {
                        $mdExpansionPanel(section._id).expand();
                    })
                }
            }, 500)
        })
})()
