/*global angular*/
(function(angular) {
    'use strict';

    angular.module('example1App', [
        'ngRoute'
    ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
}(angular));
