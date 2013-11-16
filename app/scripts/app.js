/*global angular*/
(function(angular) {
    'use strict';

    var moduleDependencies = [
        'ngRoute',
        'ctrl.my.coordinates',
        'dir.my.coordinates',
        'srv.my.coordinates'
    ];

    angular.module('my.app', moduleDependencies)
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
