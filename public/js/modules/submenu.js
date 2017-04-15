(function(){
    var app=angular.module('MyApp');
    app.controller('submenuController',function($scope,$http){
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
            $scope.frmSubMenu.$setPristine();
        }
        $scope.menus= [];
        $scope.fillmenus = function(){
            $http.get('api/menus',$scope.data).then(function(response){
                $scope.menus = response.data;
            }).catch(function(error){ $scope.records = []})
        }
        $scope.fillmenus();
        $scope.records = [];
        $scope.fillcards = function(id){
            $http.get('api/menus/submenus/'+id,$scope.data).then(function(response){
                $scope.records = response.data;
            }).catch(function(error){ $scope.records = []})
        }
        $scope.disabled = function(item){
            $http.delete('api/menus/submenus/'+item.id,item).then(function(response){
                    console.log("se deshabilito con exito")
            }).catch(function(error){ console.log("Hubo un error")});
            $scope.fillcards();
        }
        $scope.save = function(){
            var data = angular.copy($scope.frmData);
            if($scope.newItem == -1){
                $http.post('api/menus/submenus',data).then(function(response){
                    console.log("se guardó con éxito")
                }).catch(function(error){ console.log("No se guardó")});
            }else{
                $http.put('api/menus/submenus/'+data.id,data).then(function(response){
                    console.log("se actualizó con éxito")
                }).catch(function(error){ console.log("No se actualizó")});
            }
            $scope.show = false
            $scope.fillcards()
            $scope.frmData = {}
            $scope.frmSubMenu.$setPristine()
            $scope.newItem = -1
        }
    })
})()