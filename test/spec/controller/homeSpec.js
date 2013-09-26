'use strict';

define(['angular-mocks'], function (angular) {
	describe('Controller: home', function () {
		// load the controller's module
        beforeEach(angular.module('myApp'));

        var homeCtrl, scope;

        // Initialize the controller and a mock scope
        beforeEach(
            inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            homeCtrl = $controller('homeCtrl', { $scope:scope });
        }));

        it('Expect list of awesomeThings to the scope', function () {
            expect(scope.awesomeThings.length).toBe(4);
        });

        it('Expect awesomeThings to have require JS', function() {
            expect(scope.awesomeThings).toContain('RequireJS');
        });
	});
});
