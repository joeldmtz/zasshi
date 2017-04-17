(function () {
   angular.module('App',[])
   .service('anchorSmoothScroll', function(){
    this.scrollTo = function(eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 15);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

})
.controller('menuScroll',function($scope,anchorSmoothScroll){
    $scope.images = [
        {name:'caramelo13-min.jpg'},
        {name:'caterpillar7-min.jpg'},
        {name:'hanaroll-min2.jpg'},
    ]
    $scope.randomNumber = function () {
        return Math.floor((Math.random() * $scope.images.length) + 0);
    }
    $scope.background = $scope.images[$scope.randomNumber()].name
    $scope.gotoElement = function (id){
     anchorSmoothScroll.scrollTo(id);
   }

})
       .controller('menu',function ($scope,$http) {
           $scope.selected = 0;
           $scope.types = []
           $http.get('http://localhost:8000/api/menus/full').then(function (res) {
               $scope.types = res.data;
               console.log($scope.types)
           })

           $scope.selectType = function ($index) {
               $scope.selected = $index
           }
       })
})()
