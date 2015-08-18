'use strict';

var controllersModule = require('./_index');

controllersModule.controller('viewCtrl', ['$rootScope', '$scope', '$state', '$location', '$window', function($rootScope, $scope, $state, $location, $window) {

$rootScope.$state = $state;

//Scroll to top on route change
$rootScope.$on("$stateChangeSuccess", function (event, currentState, previousState) {
    $window.scrollTo(0, 0);
});

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