'use strict';

var controllersModule = require('./_index');

controllersModule.controller('viewCtrl', ['$rootScope', '$scope', '$state', '$location', '$window', '$document', function($rootScope, $scope, $state, $location, $window, $document) {

    $rootScope.$state = $state;

//Scroll to top on route change
$rootScope.$on("$stateChangeSuccess", function (event, currentState, previousState) {
    $window.scrollTo(0, 0);

        var project = $location.path()
        var indexNum = project.substr(project.length - 1)
        var index = Number(indexNum)
        console.log(index)

         // console.log(index)
    var path = "project" + index;
        
    $scope.next = function () {
            // console.log("clicked right");
            // console.log("clicked" + index);
            index = index + 1 
            
            if (index > 7) {
                index = 1

                path = "project" + index;
                // console.log("path" + path);
                $location.path(path);
                // console.log("checked" + index);
         
            } else {
               
            // console.log("complete" + index);
            path = "project" + index;;
            // console.log("path" + path)
            $location.path(path);

            }
            
        };

        $scope.prev = function () {
            console.log("clicked" + index);
            index = index - 1 
            
            if (index < 1) {
                index = 7

                path = "project" + index;
                $location.path(path);
                // console.log("checked" + index);
         
            } else {
               
            // console.log("complete" + index);
            path = "project" + index;
            // console.log("complete" + path);
            $location.path(path);

            }
           

        };
    });

    $scope.scrollTopButton = false;

    angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 300) {
            $scope.scrollTopButtonOn = true;
        } else {
            $scope.scrollTopButtonOn = false;
        }
        $scope.$apply();
    });


        //Check screen orientation on mobile
        $scope.orientationHorizontal = false;
        console.log($scope.orientationHorizontal); 

        $scope.$watch(function(){
         return $window.innerWidth;
        }, function(value) {
         
        $scope.windowWidth = value; 
        console.log($scope.windowWidth);

        if ( $scope.windowWidth < 1200 ) {

        $scope.getWindowOrientation = function () {
            return $window.orientation;
        };

        $scope.$watch($scope.getWindowOrientation, function (newValue, oldValue) {
            $scope.degrees = newValue;

            if ($scope.degrees === 90 || $scope.degrees === -90) {
                $scope.orientationHorizontal = true;
                // console.log($scope.orientationHorizontal); 
                // console.log($scope.degrees);
            } else {
                $scope.orientationHorizontal = false;
                // console.log($scope.orientationHorizontal); 
                // console.log($scope.degrees); 
            }


        }, true);

        angular.element($window).bind('orientationchange', function () {
            $scope.$apply();
        });
    }
});


//makes page scroll up 
$scope.scrollup = function() {
    $document.scrollTop(0, 1300);
};



    // $scope.swipeLeft = function($event) {
    //     console.log($event);
    //     $scope.next();
    //     e.preventDefault();
    // };

    // $scope.swipeRight = function($event) {
    //     console.log($event);
    //     $scope.prev();
    //     e.preventDefault();
    // };


    $scope.$on('$stateChangeSuccess', function (event, toState) {
      if (toState.name === 'home') {
        $scope.back = true; 
    } else {
        $scope.back = false; 
    }

    $scope.currentPath = $location.path();
});



}]);