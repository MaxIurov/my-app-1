'use strict';
var myApp = angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'myApp.components',
    'myApp.features',
    'myApp.tab1',
    'myApp.tab2'
]);

myApp.config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab1');
}]);