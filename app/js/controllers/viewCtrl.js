'use strict';

var controllersModule = require('./_index');

controllersModule.controller('viewCtrl', ['$rootScope', '$scope', '$state', '$location', function($rootScope, $scope, $state, $location) {

$rootScope.$state = $state;


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


$scope.$on('$stateChangeSuccess', function (event, toState) {
  if (toState.name === 'home') {
        $scope.back = true; 
    } else {
        $scope.back = false; 
    }

    if (toState.name === 'project1') {
        $scope.navbarInvert = true;
        $scope.focus = true; 
    } else {
        $scope.navbarInvert = false;
        $scope.focus = false;  
    }

    if (toState.name === 'project2') {
        $scope.invert = true;
        $scope.focus = true; 
    } else {
        $scope.invert = false;
        $scope.focus = false; 
    }

    if (toState.name === 'project3') {
        $scope.purple = true;
        $scope.focus = true; 
    } else {
        $scope.purple = false;
        $scope.focus = false; 
    }

    if (toState.name === 'project4') {
        $scope.green = true;
        $scope.focus = true; 
    } else {
        $scope.green = false;
        $scope.focus = false; 
    }

    if (toState.name === 'project5') {
        $scope.focus = true; 
    } else {
        $scope.focus = false; 
    }

  $scope.currentPath = $location.path();
  });



}]);