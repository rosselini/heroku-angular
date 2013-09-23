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
    'controller/home'
    ], 
    function(angular, app) {
        app.config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'js/views/index1.html',
                controller: 'home'
            })
            .when('/test', {
                templateUrl: './js/views/test.html',
                controller: 'home'
            })
        });
    
    angular.bootstrap(document,["myApp"]);
});