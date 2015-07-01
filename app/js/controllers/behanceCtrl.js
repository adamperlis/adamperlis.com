'use strict';

var controllersModule = require('./_index');

controllersModule.controller('BehanceCtrl', ['$scope', '$http', function($scope, $http) {

  // var user = 'adamperlis9036';
  var apiKey = 'ACAdeotWaDfmsH3AYnlasZiYLtqkMT0t';
  // var userUrl = 'http://behance.net/v2/users/'+ user + '/projects?api_key='+ apiKey +'&callback=JSON_CALLBACK'; 
  // var id;

  // var projectIds = [];
  // $scope.projectIds = [];

 //  // findings all the IDs for a user
	// $http.jsonp(userUrl)
 //  	.success(function(data, status, headers, config) {
 //        $scope.userProjects = data;
 //        var userProjects = data;
 //        // console.log(data)
 //        for (var i = userProjects.projects.length - 1; i >= 0; i--) {
 //        	projectIds.push(userProjects.projects[i].id);
 //        	$scope.projectIds.push.apply(userProjects.projects[i].id)
 //        };
 //  		console.log(projectIds)

 //  });

// --------------------UNCOMMENT THIS WHEN READY
  // var id = [ 26782843, 26606811, 24062929, 23925781, 22609077 ];

  // for (var i = id.length - 1; i >= 0; i--) {
  // 	// finding all the images for a particular project
  //   var projectUrl = 'http://behance.net/v2/projects/'+ id[i] + '?api_key='+ apiKey +'&callback=JSON_CALLBACK'; 
 

	 //  $http.jsonp(projectUrl)
	 //  .success(function(data, status, headers, config) {
	 //        $scope.project = data;
	 //        // console.log(data)
  //         window.localStorage['projects'] = angular.toJson(data);
	 //  });
  // };
  // var projectsDataRaw = window.localStorage['projects'];
  // $scope.projectsData = projectsDataRaw;
  // // console.log($scope.projectsData);
  // return $scope.projectsData;

}]);

