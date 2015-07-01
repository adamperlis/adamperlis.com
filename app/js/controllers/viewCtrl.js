'use strict';

var controllersModule = require('./_index');

controllersModule.controller('viewCtrl', ['$scope', '$state', function($scope, $state) {

$scope.$on('$stateChangeSuccess', function (event, toState) {
  if (toState.name === 'home') {
     $scope.back = true; 
    } else {
     $scope.back = false; 
    }
  });
}]);