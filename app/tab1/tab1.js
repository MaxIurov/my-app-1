'use strict';

angular.module('myApp.tab1', ['ui.router']).

config(['$stateProvider',function config($stateProvider) {
    $stateProvider
        .state('tab1', {
        	name: 'tab1',
            url: '^/tab1',
            controller: 'Tab1Ctrl',
            templateUrl: 'tab1/tab1.html'
        });
}]);