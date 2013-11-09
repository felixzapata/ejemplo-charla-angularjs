/*global angular*/
(function(angular) {
    'use strict';

    angular.module('example1App', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    resolve: {
                        resolvedVal: function(httpService) {
                            httpService.getCoordinates().then(function(data) {
                                return data;
                            });
                        }
                    }
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
}(angular));
