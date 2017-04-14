(function() {
    var app = angular.module('MyApp')

    app.controller('login', function($scope, $http) {
        $scope.login = function() {
            $http.post('/login', $scope.user)
                .then(function (response) {
                    window.location = '/admin'
                })
                .catch(function(error) {
                })
        }
    })
})()
