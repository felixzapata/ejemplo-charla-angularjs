/*global angular*/
(function(angular) {
	
    'use strict';

    angular.module('ctrl.my.coordinates', [])
        .controller('MainCtrl', ['$scope', 'httpService',
            function($scope, httpService) {
                httpService.getCoordinates().then(function(data) {
                    $scope.myCoordinates = data;
                });
            }
        ]);
}(angular));
