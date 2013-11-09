/*global angular*/
(function(angular) {

    'use strict';

    angular.module('example1App')
        .directive('coordinates',
            function() {

                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: 'views/coordinates.html',
                    scope: {
                        coordinates: '=httpCoordinates'
                    },
                    link: function (scope) {
                        console.log('aba ' + scope.coordinates);
                    }
                };
            }
    );


}(angular));
