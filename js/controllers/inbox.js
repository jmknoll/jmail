// inbox controller //

angular.module('EmailApp')
	.controller('InboxCtrl',
	function InboxCtrl ( $scope, InboxFactory ) {
		'use strict';
		$scope.meta = {
			title: "My Inbox"
		};
		InboxFactory.getMessages()
			.success(function(jsonData, statusCode){
				console.log('The request wasa successful!', statusCode);
				console.dir(jsonData);
				$scope.data = {
					emails: jsonData
				};
			});
	});