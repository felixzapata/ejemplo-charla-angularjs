/*global module, inject, describe, beforeEach, it, expect*/
(function() {
    'use strict';

    describe('Service: httpService', function() {

        // load the controller's module
        beforeEach(module('example1App'));

        var MainCtrl,
            scope;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            MainCtrl = $controller('MainCtrl', {
                $scope: scope
            });
        }));

        it('should attach a list of awesomeThings to the scope', function() {
            
        });
    });
}());
