define(['app'], function(app) {
    app.controller('home', function($scope, $routeParams) {
		$scope.dupa = function() {
			alert('dupa');
		}

		$scope.dupa1 = function() {
			alert('dupa1');
		}
    });
});