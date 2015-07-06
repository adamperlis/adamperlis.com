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

  $scope.currentPath = $location.path();
  });



}]);