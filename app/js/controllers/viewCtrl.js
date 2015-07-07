'use strict';

var controllersModule = require('./_index');

controllersModule.controller('viewCtrl', ['$rootScope', '$scope', '$state', '$location', function($rootScope, $scope, $state, $location) {

$rootScope.$state = $state;

$scope.$on('$stateChangeSuccess', function (event, toState) {
  if (toState.name === 'home') {
     $scope.back = true; 
    } else {
     $scope.back = false; 
    }

    if (toState.name === 'project1') {
     $scope.invert = true; 
    } else {
     $scope.invert = false; 
    }

    if (toState.name === 'project3') {
     $scope.purple = true; 
    } else {
     $scope.purple = false; 
    }

     if (toState.name === 'project4') {
     $scope.green = true; 
    } else {
     $scope.green = false; 
    }

  $scope.currentPath = $location.path();
  });



}]);