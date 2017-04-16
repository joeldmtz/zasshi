(function(){
    var app = angular.module("MyApp");
    app.controller('dishesController',function($scope,$http, alertService){
        $scope.show = false;
        $scope.menu = 1;
        $scope.all = false;
        $scope.newItem = -1
        $scope.records = []
        $scope.dishes = []
        $scope.subrecords = []
        $scope.getData = function(item,menu_id){
            if(menu_id == 0) menu_id = $scope.subrecords[0].section_menu_id
            $scope.frmData = angular.copy(item)
            $scope.newItem = 0;
            $scope.show = true;
            $scope.sub_menu_id = item.submenu.id
            $scope.submenus(menu_id)
        }
        $scope.new = function(){
            $scope.show = true;
            $scope.sub_menu_id = null
            $scope.newItem = -1;
            $scope.frmData = {}
            $scope.frmDishes.$setPristine();
        }
        $scope.records = [];

        $scope.getMenu = function(menu_id) {
            if ($scope.menus) {
                return $scope.menus.find(function (menu) {
                    return menu.id == menu_id;
                })
            }
        }

        $scope.filterMenu = function () {
            if ($scope.selected_menu > 0) {
                $scope.url = 'api/menus/'+ $scope.selected_menu +'/dishes';
                $scope.fillCards()
            } else {
                $scope.selected_submenu = 0;
                $scope.url = 'api/dishes'
                $scope.fillCards();
            }
        }

        $scope.filterSubmenu = function () {
            if ($scope.selected_submenu > 0) {
                $scope.url = 'api/menus/'+ $scope.selected_menu +'/submenus/' + $scope.selected_submenu + '/dishes';
                $scope.fillCards()
            } else {
                $scope.filterMenu()
            }
        }

        $http.get('api/menus/all',$scope.data).then(function(response){
            $scope.menus = response.data
            $scope.selected_menu = 0
            $scope.selected_submenu = 0
        }).catch(function(error){ $scope.records = []})

        $http.get('api/submenus/all',$scope.data).then(function(response){
            $scope.submenus = response.data
        }).catch(function(error){ $scope.records = []})

        $scope.url = 'api/dishes'
        $scope.fillCards = function(){
            $http.get($scope.url, $scope.data).then(function(response){
                $scope.response = response.data
                $scope.records = response.data.data
            }).catch(function(error){ $scope.records = []})
        }
        $scope.fillCards();

        $scope.disabled = function(item,menu_id){
            $http.delete('api/menus/'+item.submenu.section_menu_id+'/submenus/'+item.submenu.id+'/dishes/'+item.id,item).then(function(response){
                alertService.show({
                    title: 'Elemento borrado',
                    content: 'El elemento ha sido borrado exitosamente'
                })
                $scope.menu=1
                $scope.fillCards();
            }).catch(function(error){
                $scope.error();
            });
        }

        $scope.paginate = {
            to: function (page) {
                $http.get('api/dishes?page=' + page).then(function(response){
                    $scope.response = response.data
                    $scope.records = response.data.data
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
                $scope.fillCards()
                $scope.frmData = {}
                $scope.frmDishes.$setPristine()
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
            if ($scope.frmDishes.$valid) {
                var data = angular.copy($scope.frmData);
                var submenu_id = $scope.sub_menu_id
                var menu_id = $scope.submenus.find(function (submenu) {
                    return submenu.id === submenu_id
                }).section_menu_id

                if($scope.newItem == -1){
                    $http.post('api/menus/'+ menu_id +'/submenus/'+ submenu_id +'/dishes',data).then(function(response){
                        $scope.success();
                    }).catch(function(error){
                        $scope.error();
                    });
                }else{
                    $http.put('api/menus/'+ menu_id +'/submenus/'+ menu_id +'/dishes/'+data.id,data).then(function(response){
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
