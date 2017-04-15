(function(){
    var app =  angular.module("MyApp");
    app.controller('contactController',function($scope,$http){
        $scope.show = false
        $scope.newItem = -1
        $scope.records = []
        $scope.getData = function(item){
            $scope.frmData = angular.copy(item)
            $scope.newItem = 0;
            $scope.show = true
        }
        $scope.new = function(){
            $scope.show = true
            $scope.newItem = -1
            $scope.frmContact.$setPristine()
        }
        $scope.fillcards = function(){
            $http.get('api/contact',$scope.data).then(function(response){
                $scope.records = response.data
            }).catch(function(error){$scope.records = []})
        }
        $scope.disabled = function(item){
            $http.delete('api/contact'+item.id,item).then(function(response){
                 console.log("se deshabilitó con éxito")
            }).catch(function(error){console.log("Hubo un error")})
            $scope.fillcards();
        }
        $scope.save = function(){
            var data = angular.copy($scope.frmData)
            if($scope.newItem == -1){
                $http.post('api/contact',data).then(function(response){
                    console.log("Se guardó con éxito")
                }).catch(function(error){console.log("No se guardó")})
            }else{
                $http.put('api/contact'+data.id,data).then(function(response){
                    console.log("se actualizó con éxito")
                }).catch(function(error){console.log("no se actualizó")})
            }
            $scope.show = false
            $scope.fillcards()
            $scope.frmData = {}
            $scope.frmContact.$setPristine()
            $scope.newItem = -1
        }
        $scope.fillcards()
    });
})()