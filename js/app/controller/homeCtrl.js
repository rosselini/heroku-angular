'use strict';

define(['app'], function($app) {
    $app.controller('homeCtrl', function($scope, $routeParams) {
    	$scope.click = function() {
    		alert('Test click');
    	}

		$scope.awesomeThings = [
            'AngularJS (1.0.4)',
            'RequireJS',
            'Karma',
            'Test'
        ];
    });
});