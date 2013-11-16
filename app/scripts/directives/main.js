/*global angular*/
(function(angular) {

    'use strict';

    angular.module('example1App')
        .directive('myCoordinates',
            function() {

                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: 'views/coordinates.html',
                    scope: {
                        coordinates: '=httpCoordinates'
                    },
                    link: function (scope) {
                        scope.$watch('coordinates', function(newValue){
                            scope.coordinates = newValue;
                        });
                        
                    }
                };
            }
    );


}(angular));
