(function(){
    var app=angular.module('MyApp');
    app.controller('submenuController',function($scope,$http, alertService){
        $scope.show = false;
        $scope.newItem = -1;
        $scope.getData = function(item){
            $scope.frmData = angular.copy(item)
            $scope.newItem = 0;
            $scope.show = true;
        }
        $scope.new = function(){
            $scope.show = true;
            $scope.newItem = -1;
            $scope.frmData = {}
            $scope.frmSubMenu.$setPristine();
        }
        $scope.records = [];

        $scope.group = function (data) {
            var menus = data
                .map(function (submenu) {
                    return submenu.menu
                })
                .reduce(function (menus, menu) {
                    var savedMenu = menus.find(function (savedMenu) {
                        return savedMenu.id === menu.id
                    })

                    if (!savedMenu) {
                        menus.push(menu)
                    }

                    return menus;
                }, [])

            return menus.map(function (menu) {
                menu.submenus = data.filter(function (submenu) {
                    return submenu.menu.id == menu.id
                })
                return menu
            })
        }

        $scope.fillmenus = function(){
            $http.get('api/submenus',$scope.data).then(function(response){
                $scope.response = response.data
                $scope.records = $scope.group(response.data.data)
            }).catch(function(error){ $scope.records = []})
        }
        $scope.fillmenus();
        $scope.disabled = function(item){
            $http.delete('api/menus/'+item.section_menu_id+'/submenus/'+item.id,item).then(function(response){
                alertService.show({
                    title: 'Elemento borrado',
                    content: 'El elemento ha sido borrado exitosamente'
                })
                $scope.fillmenus();
            }).catch(function(error){
                $scope.error();
            });
        }

        $scope.paginate = {
            to: function (page) {
                $http.get('api/submenus?page=' + page).then(function(response){
                    $scope.response = response.data
                    $scope.records = $scope.group(response.data.data)
                }).catch(function(error){$scope.records = []})
            },
            next: function () {
                this.to($scope.response.current_page + 1)
            },
            prev: function () {
                this.to($scope.response.current_page - 1)
            }
        }

        $scope.success = function () {
            alertService.show({
                title: 'Datos guardados',
                content: 'Los datos han sido guardados correctamente'
            }).then(function () {
                $scope.show = false
                $scope.fillmenus()
                $scope.frmData = {}
                $scope.frmSubMenu.$setPristine()
                $scope.newItem = -1
            })
        }

        $scope.error = function () {
            alertService.show({
                title: 'Alerta',
                content: 'Ocurrio un error'
            })
        }

        $scope.save = function(){
            if ($scope.frmSubMenu.$valid) {
                var data = angular.copy($scope.frmData);
                delete data.menu;
                if($scope.newItem == -1){
                    $http.post('api/menus/'+data.section_menu_id+'/submenus',data).then(function(response){
                        $scope.success();
                    }).catch(function(error){
                        $scope.error();
                    });
                }else{
                    $http.put('api/menus/'+data.section_menu_id+'/submenus/'+data.id,data).then(function(response){
                        $scope.success();
                    }).catch(function(error){
                        $scope.error();
                    });
                }
            } else {
                alertService.show({
                    title: 'Alerta',
                    content: 'Debe capturar todos los datos requeridos con el formato adecuado'
                })
            }
        }
    })
})()
