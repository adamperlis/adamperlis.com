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
		 		controller: ['BehanceCtrl as home', 'viewCtrl'],
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
		 		controller: 'BehanceCtrl as home',
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
		 		controller: 'BehanceCtrl as home',
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
		 		controller: 'BehanceCtrl as home',
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
		 		controller: 'BehanceCtrl as home',
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
		 		controller: 'BehanceCtrl as home',
		 		templateUrl: 'project5.html'
		 	}
 		},
 		title: 'project5'
 	});

 	$urlRouterProvider.otherwise('/');

 }

 module.exports = OnConfig;