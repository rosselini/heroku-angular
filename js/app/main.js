requirejs.config({
    "baseUrl": "js/app",
    paths: {
        "angular": "../lib/angular/angular.min",
        "underscore": "../lib/underscore/underscore-min"
    },
    shim: {
        "angular": {
            exports: "angular"    
        },
        "underscore": {
            exports: "_"   
        }
    }
});

// Load the main app module to start the app
requirejs([
    'angular', 
    'app', 
    'controller/homeCtrl', 
    ], 
    function(angular, app) {
        app.config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: './js/view/index.html',
                controller: 'homeCtrl'
            })
        });
    
    angular.bootstrap(document,["myApp"]);
});