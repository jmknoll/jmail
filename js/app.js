angular.module('EmailApp', [
	'ngRoute'
]).config(function ( $routeProvider ) {
	'use strict';
	//configure urls
	$routeProvider
		// inbox route
		.when('/inbox', {
			templateUrl: 'views/inbox.html',
			controller: 'InboxCtrl',
		})
		//email view route
		.when('/inbox/email/:id', {
			templateUrl: 'views/email/html',
			controller: 'EmailCtrl',
		})
		//default route
		.otherwise({
			redirectTo: '/inbox'
		});
})