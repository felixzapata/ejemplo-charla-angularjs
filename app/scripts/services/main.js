/*global angular*/
(function(angular) {
    'use strict';
    angular.module('srv.my.coordinates', [])
        .factory('httpService', ['$http', '$q',
            function($http, $q) {

                function getCoordinates() {

                    var deferred = $q.defer();
                    $http.get('mocks/data.json').success(function(data) {
                        deferred.resolve(data);
                    }).error(function() {
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
