'use strict';

var controllersModule = require('./_index');

controllersModule.controller('viewCtrl', ['$rootScope', '$scope', '$state', '$location', '$window', '$document', function($rootScope, $scope, $state, $location, $window, $document) {

    $rootScope.$state = $state;

//Scroll to top on route change
$rootScope.$on("$stateChangeSuccess", function (event, currentState, previousState) {
    $window.scrollTo(0, 0);
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

//cycle through projects #####BROKEN NEED TO FIX#######
var route = ['project1','project2','project3','project4','project5']

var index = 0

$scope.next = function () {
    var path = route[index + 1];
    $location.path(path);
        // console.log("clicked right");
        index = index + 1

        if (index == 4) {
            index = -1
        }
    };

    $scope.prev = function () {
        if (index == 0) {
            index = 5
        }
        var path = route[index - 1];
        $location.path(path);
        // console.log("clicked left");
        index = index - 1

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