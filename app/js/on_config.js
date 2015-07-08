'use strict';

/**
 * @ngInject
 */
 function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

 	$locationProvider.html5Mode(true).hashPrefix('!')

 	$stateProvider
 	.state('home', {
 		url: '/',
 		views: {
 			'default': {
		 		templateUrl: 'home.html'
 			}
 		},
 		title: 'Home'
 	});

 	$stateProvider
 	.state('project1', {
 		url: '/project1', 
 		views: {
 			'default': {
		 		templateUrl: 'project1.html'
		 	}
 		},
 		title: 'project1'
 	});

 	$stateProvider
 	.state('project2', {
 		url: '/project2',
 		views: {
 			'default': {
		 		templateUrl: 'project2.html'
		 	}
 		},
 		title: 'project2'
 	});

 	$stateProvider
 	.state('project3', {
 		url: '/project3',
 		views: {
 			'default': {
		 		templateUrl: 'project3.html'
		 	}
 		},
 		title: 'project3'
 	});

 	$stateProvider
 	.state('project4', {
 		url: '/project4',
 		views: {
 			'default': {
		 		templateUrl: 'project4.html'
		 	}
 		},
 		title: 'project4'
 	});

 	$stateProvider
 	.state('project5', {
 		url: '/project5',
 		views: {
 			'default': {
		 		templateUrl: 'project5.html'
		 	}
 		},
 		title: 'project5'
 	});

 	$stateProvider
 	.state('about', {
 		url: '/about',
 		views: {
 			'default': {
		 		templateUrl: 'about.html'
		 	}
 		},
 		title: 'about'
 	});

 	$urlRouterProvider.otherwise('/');

 }

 module.exports = OnConfig;