/*global module, inject, describe, beforeEach, it, expect*/
(function() {
    'use strict';

    describe('Controller: MainCtrl', function() {

        var MainCtrl,
            scope,
            httpService,
            q,
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

        function httpServiceMock() {
            return {
                getCoordinates: function() {
                    var deferred = q.defer();
                    deferred.resolve(fakeData);
                    return deferred.promise;
                }
            };
        }



        beforeEach(module('ctrl.my.coordinates'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope, $injector) {
            httpService = httpServiceMock();
            scope = $rootScope.$new();
            q = $injector.get('$q');
            MainCtrl = $controller('MainCtrl', {
                $scope: scope,
                'httpService': httpService
            });
            scope.$digest();
        }));

        it('should attach a list of data to the scope', function() {
            expect(scope.myCoordinates).toEqual(fakeData);
        });
    });
}());
