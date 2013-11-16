/*global module, inject, describe, beforeEach, it, expect*/
(function() {
    'use strict';

    describe('Directive: myCoordinates', function() {

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
            $scope, element;

        // load the controller's module
        beforeEach(module('views/coordinates.html'));
        beforeEach(module('dir.my.coordinates'));
        
        

        // Initialize the controller and a mock scope
        beforeEach(function() {
            inject(function($compile, $rootScope) {
                $scope = $rootScope;
                element = $compile('<my-coordinates http-coordinates="myFakeCoordinates"></my-coordinates>')($scope);
                $scope.myFakeCoordinates = fakeData;
                $scope.$digest();
            });
        });

        it('should have a table element', function() {
            expect(element[0].nodeName).toBe('TABLE');
        });
        it('should have 6 table rows', function() {
            expect(element.find('tr').length).toBe(6);
        });
        it('should have 5 table columns', function() {
            expect(element.find('td').length).toBe(15);
        });
    });
}());
