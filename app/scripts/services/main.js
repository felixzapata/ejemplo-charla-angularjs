/*global angular*/
(function(angular) {
    'use strict';
    angular.module('example1App')
        .factory('httpService', ['$http', '$q',
            function($http, $q) {

                function getCoordinates() {

                    var deferred = $q.defer();

                    $http({
                        method: 'GET',
                        url: '/mocks/data.json'
                    }).
                    success(function(data) {
                        deferred.resolve(data);
                    }).
                    error(function() {
                        deferred.reject();
                    });


                    return deferred.promise;

                }

                return {
                    getCoordinates: getCoordinates
                };
            }
        ]);
}(angular));
