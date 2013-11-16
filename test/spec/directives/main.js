/*global module, inject, describe, beforeEach, it, expect*/
(function() {
    'use strict';

    describe('Directive: coordinates', function() {

        // load the controller's module
        beforeEach(module('example1App'));

        var fakeData = [{
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
        }],
            scope, compile, element;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($injector) {
            scope = $injector('$rootScope');
            compile = $injector('$compile');
            element = compile('<my-coordinates http-coordinates="myCoordinates"></my-coordinates>')(scope);
            scope.myCoordinates = fakeData;
            scope.$digest();
        }));

        it('should have a table element', function() {
            expect(element.find('table').length).toBe(1);
        });
        it('should have 5 table rows', function() {
            expect(element.find('table').length).toBe(5);
        });
    });
}());
