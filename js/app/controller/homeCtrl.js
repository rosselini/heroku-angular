define(['app'], function(app) {
	app.controller('homeCtrl', function($scope) {
		console.log('test');

		$scope.show = function() {
			console.log('show');
		}
	});
});