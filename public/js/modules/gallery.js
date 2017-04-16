(function(){
    var app =  angular.module("MyApp");
    app.controller('galleryController',function($scope, $http, $fileUpload, alertService){
        $scope.show = false
        $scope.newItem = -1
        $scope.records = []
        $scope.getData = function(item){
            $scope.frmData = angular.copy(item)
            $scope.preview_url = '/storage/' + item.url_thumbnail
            $scope.newItem = 0;
            $scope.show = true
        }
        $scope.new = function(){
            $scope.preview_url = null
            $scope.show = true
            $scope.newItem = -1
            $scope.frmData = {}
            $scope.frmGallery.$setPristine()
        }

        $scope.paginate = {
            to: function (page) {
                $http.get('api/gallery?page=' + page).then(function(response){
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

        $scope.fillcards = function(){
            $http.get('api/gallery',$scope.data).then(function(response){
                $scope.response = response.data
                $scope.records = response.data.data
            }).catch(function(error){$scope.records = []})
        }
        $scope.disabled = function(item){
            $http.delete('api/gallery/'+item.id,item).then(function(response){
                alertService.show({
                    title: 'Elemento borrado',
                    content: 'El elemento ha sido borrado exitosamente'
                })
                $scope.fillcards();
            }).catch(function(error){
                $scope.error();
            });
        }

        $scope.$watch('frmData.photo', function() {
            if ($scope.frmData) {
                $scope.preview_url = URL.createObjectURL($scope.frmData.photo)
            }
        })

        $scope.success = function () {
            alertService.show({
                title: 'Datos guardados',
                content: 'Los datos han sido guardados correctamente'
            }).then(function () {
                $scope.show = false
                $scope.fillcards()
                $scope.frmData = {}
                $scope.preview_url = null
                $scope.frmGallery.$setPristine()
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
            if ($scope.frmGallery.$valid) {
                var data = $scope.frmData
                if($scope.newItem == -1){
                    $fileUpload.uploadFileToUrl('api/gallery',data)
                        .then(function(response){
                            $scope.success();
                        }).catch(function(error){
                            $scope.error();
                        })
                }else{
                    $fileUpload.updateFileToUrl('api/gallery/'+data.id,data)
                        .then(function(response){
                            $scope.success();
                        }).catch(function(error){
                            $scope.error();
                        })
                }
            } else {
                alertService.show({
                    title: 'Alerta',
                    content: 'Debe capturar todos los datos requeridos con el formato adecuado'
                })
            }
        }
        $scope.fillcards()
    });
})()
