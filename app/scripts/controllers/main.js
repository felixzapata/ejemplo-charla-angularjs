/*global angular*/
(function(angular) {
	'use strict';

	angular.module('example1App')
		.controller('MainCtrl', ['resolvedVal', '$scope',
			function(resolvedVal, $scope) {
				$scope.myCoordinates = resolvedVal;
				console.log(resolvedVal);
				// httpService.getCoordinates().then(function(data){
				// 	$scope.myCoordinates = data;
				// 	console.log(data);
				// });
			}
		]);
}(angular));
