/*global module, inject, describe, beforeEach, it, expect, afterEach*/
(function() {
    'use strict';

    describe('Service: httpService', function() {

        var httpService,
            $httpBackend,
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

        beforeEach(module('srv.my.coordinates'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function($injector) {
            httpService = $injector.get('httpService');
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.when('GET', 'mocks/data.json').respond(fakeData);
        }));

        it('should get data from a json', function() {
            var result;
            httpService.getCoordinates().then(function(data) {
                result = data;
                expect(result).toEqual(fakeData);
            });
            $httpBackend.flush();
        });
        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
}());
