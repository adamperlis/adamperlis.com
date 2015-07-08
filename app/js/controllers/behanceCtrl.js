'use strict';

var controllersModule = require('./_index');

controllersModule.controller('behanceCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {

  var apiKey = 'ACAdeotWaDfmsH3AYnlasZiYLtqkMT0t';
  var id = [ '26782843', '26606811', '24062929', '23925781', '22609077' ];

  // for (var i = id.length - 1; i >= 0; i--) {
  	// finding all the images for a particular project
    var projectUrl = 'http://behance.net/v2/projects/'+ id[0] + '?api_key='+ apiKey +'&callback=JSON_CALLBACK'; 
 

	  $http.jsonp(projectUrl)
	  .success(function(data, status, headers, config) {
	        
          $rootScope.projects = data
          console.log($rootScope.projects)
          // window.localStorage['projects'] = angular.toJson(data);
	  });
  // };
  // var projectsDataRaw = window.localStorage['projects'];
  // $scope.projectsData = projectsDataRaw;
  // // console.log($scope.projectsData);
  // return $scope.projectsData;

}]);

