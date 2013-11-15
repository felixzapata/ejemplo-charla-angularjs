/*global angular*/
(function(angular) {
	
    'use strict';

    angular.module('example1App')
        .controller('MainCtrl', ['$scope', 'httpService',
            function($scope, httpService) {
                httpService.getCoordinates().then(function(data) {
                    $scope.myCoordinates = data;
                });
            }
        ]);
}(angular));
