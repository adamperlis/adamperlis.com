'use strict';

var controllersModule = require('./_index');

controllersModule.controller('viewCtrl', ['$scope', '$state', '$location', function($scope, $state, $location) {

$scope.$on('$stateChangeSuccess', function (event, toState) {
  if (toState.name === 'home') {
     $scope.back = true; 
    } else {
     $scope.back = false; 
    }

  $scope.currentPath = $location.path();
  });



}]);