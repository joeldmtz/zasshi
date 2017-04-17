(function(){
    var app=angular.module('MyApp');
    app.controller('aboutController',function($scope, $http, $mdDialog, alertService){
        $scope.show = false;
        $scope.newItem = -1;
        $scope.getData = function(item){
            $scope.frmData = angular.copy(item)
            $scope.newItem = 0;
            $scope.show = true;
        }
        $scope.new = function(){
            $scope.show = true;
            $scope.newItem = -1
            $scope.frmData = {};
            $scope.frmAbout.$setPristine();
        }
        $scope.records = [];
        $scope.fillcards = function(){
            $http.get('api/about',$scope.data).then(function(response){
                $scope.response = response.data
                $scope.records = response.data.data;
            }).catch(function(error){ $scope.records = []})
        }
        $scope.disabled = function(item){
            $http.delete('api/about/'+item.id,item).then(function(response){
                alertService.show({
                    title: 'Elemento borrado',
                    content: 'El elemento ha sido borrado exitosamente'
                })
                $scope.fillcards();
            }).catch(function(error){
                $scope.error();
            });
        }

        $scope.success = function () {
            alertService.show({
                title: 'Datos guardados',
                content: 'Los datos han sido guardados correctamente'
            }).then(function () {
                $scope.show = false
                $scope.fillcards()
                $scope.frmData = {}
                $scope.frmAbout.$setPristine()
                $scope.newItem = -1
            })
        }

        $scope.error = function () {
            alertService.show({
                title: 'Alerta',
                content: 'Ocurrio un error'
            })
        }

        $scope.fillcards();

        $scope.paginate = {
            to: function (page) {
                $http.get('api/about?page=' + page).then(function(response){
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

        $scope.save = function(){
            if ($scope.frmAbout.$valid) {
                var data = angular.copy($scope.frmData);
                if($scope.newItem == -1){
                    $http.post('api/about',data).then(function(response){
                        $scope.success()
                    }).catch(function () {
                        $scope.error()
                    });
                }else{
                    $http.put('api/about/'+data.id,data).then(function(response){
                        $scope.success()
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
