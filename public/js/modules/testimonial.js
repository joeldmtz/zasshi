(function(){
    var app=angular.module('MyApp');
    app.controller('testimonialController',function($scope,$http){
        $scope.show = false;
        $scope.stars = ["1","2","3","4","5"];
        console.log($scope.stars);
        $scope.newItem = -1;
        $scope.getData = function(item){
            $scope.frmData = angular.copy(item)
            $scope.newItem = 0;
            $scope.show = true;
        }
        $scope.new = function(){
            $scope.show = true;
            $scope.newItem = -1;
            $scope.frmTestimonial.$setPristine();
        }
        $scope.records = [];
        $scope.fillcards = function(){
            $http.get('api/testimonials',$scope.data).then(function(response){
                $scope.records = response.data;
            }).catch(function(error){ $scope.records = []})
        }
        $scope.disabled = function(item){
            $http.delete('api/testimonials/'+item.id,item).then(function(response){
                    console.log("se deshabilito con exito")
            }).catch(function(error){ console.log("Hubo un error")});
            $scope.fillcards();
        }
        $scope.fillcards();
        $scope.save = function(){
            var data = angular.copy($scope.frmData);
            if($scope.newItem == -1){
                $http.post('api/testimonials',data).then(function(response){
                    console.log("se guardó con éxito")
                }).catch(function(error){ console.log("No se guardó")});
            }else{
                console.log("Está modificando")
                $http.put('api/testimonials/'+data.id,data).then(function(response){
                    console.log("se actualizó con éxito")
                }).catch(function(error){ console.log("No se actualizó")});
            }
            $scope.show = false
            $scope.fillcards()
            $scope.frmData = {}
            $scope.frmTestimonial.$setPristine()
            $scope.newItem = -1
        }
    })
})()