requirejs.config({
    "baseUrl": "base/js/app",
    map: {
        '*': {
        "angular": "../lib/angular/angular.min",
        "angular-mocks": '../../test/libs/angular-mocks'
    }
},
    shim: {
        "../lib/angular/angular.min": {
            exports: "angular"    
        },
        '../../test/libs/angular-mocks' : {
            deps: ['angular'],
            exports: 'angular.mock'
        }
    }
});

require(
    [
        'angular',
        'controller/homeCtrl',
        'angular-mocks',
        '../../test/test.tests',
        '../../test/spec/controller/homeSpec'
    ],
    function () {
        window.__karma__.start();
    });