(function(){
    var app = angular.module("MyApp");
    app.controller('dishesController',function($scope,$http){
        $scope.show = false;
        $scope.menu = 1;
        $scope.all = false;
        $scope.newItem = -1
        $scope.records = []
        $scope.dishes = []
        $scope.subrecords = []
        $scope.sm = function(item,option){
            if(option == 1){$scope.subrecords=item.submenus; $scope.menu = 2}
            else {$scope.dishes=item.dishes; $scope.menu=3}
        }
        $scope.submenus = function(item){
            $scope.subrecords = []
            //$scope.frmData.sub_menu_id = ""
            $http.get('api/menus/'+item+'/submenus',item).then(function(response){
                     $scope.subrecords = response.data
            }).catch(function(error){ $scope.subrecords = []});
        }
        $scope.getData = function(item,menu_id){
            if(menu_id == 0) menu_id = $scope.subrecords[0].section_menu_id
            $scope.frmData = angular.copy(item)
            $scope.frmData.section_menu_id = menu_id
            $scope.newItem = 0;
            $scope.show = true;
            $scope.submenus(menu_id)
        }
        $scope.new = function(){
            $scope.show = true;
            $scope.newItem = -1;
            $scope.frmDishes.$setPristine();
        }
        $scope.records = [];
        $scope.fillmenus = function(){
            $http.get('api/menus',$scope.data).then(function(response){
                $scope.records = response.data
            }).catch(function(error){ $scope.records = []})
        }
        $scope.fillmenus();
        $scope.disabled = function(item,menu_id){
            if(menu_id == 0) menu_id = $scope.subrecords[0].section_menu_id
            $http.delete('api/menus/'+menu_id+'/submenus/'+item.sub_menu_id+'/dishes/'+item.id,item).then(function(response){
                    console.log("se deshabilitó con éxito")
            }).catch(function(error){ console.log("Hubo un error")});
            $scope.fillmenus();
            $scope.menu=1
        }
        $scope.save = function(){
            var data = angular.copy($scope.frmData);
            if($scope.newItem == -1){
                $http.post('api/menus/'+data.section_menu_id+'/submenus/'+data.sub_menu_id+'/dishes',data).then(function(response){
                    console.log("se guardó con éxito")
                }).catch(function(error){ console.log("No se guardó")});
            }else{ 
                $http.put('api/menus/'+data.section_menu_id+'/submenus/'+data.sub_menu_id+'/dishes/'+data.id,data).then(function(response){
                    console.log("se actualizó con éxito")
                }).catch(function(error){ console.log("No se actualizó")});
            }
            $scope.show = false
            $scope.fillmenus()
            $scope.frmData = {}
            $scope.frmDishes.$setPristine()
            $scope.newItem = -1
        }
    })
})()