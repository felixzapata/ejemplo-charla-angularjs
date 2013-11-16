/*global angular*/
(function(angular) {
    'use strict';

    var moduleDependencies = [
        'ngRoute'
    ];

    angular.module('example1App', moduleDependencies)
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
