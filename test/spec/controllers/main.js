/*global module, inject, describe, beforeEach, it, expect*/
(function() {
    'use strict';

    describe('Controller: MainCtrl', function() {

        // load the controller's module
        beforeEach(module('example1App'));

        var MainCtrl,
            scope,
            fakeData = [{
                'id': 'DGT7',
                'latitude': 41.4326716,
                'longitude': -4.6636227
            }, {
                'id': 'DGT7',
                'latitude': 42.5506176,
                'longitude': -3.3212603
            }, {
                'id': 'DGT1',
                'latitude': 40.4671642,
                'longitude': -3.8704629
            }, {
                'id': 'DGT1',
                'latitude': 40.4671642,
                'longitude': -3.8704629
            }, {
                'id': 'DGT2',
                'latitude': 40.4671642,
                'longitude': -3.8704629
            }];

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            MainCtrl = $controller('MainCtrl', {
                $scope: fakeData
            });
        }));

        it('should attach a list of data to the scope', function() {
            expect(scope.fakeData.length).toBe(5);
        });
    });
}());
