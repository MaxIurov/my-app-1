'use strict';

angular.module('myApp.tab2', ['ui.router']).

config(['$stateProvider',function config($stateProvider) {
    $stateProvider
        .state('tab2', {
        	name: 'tab2',
            url: '^/tab2',
            controller: 'Tab2Ctrl',
            templateUrl: 'tab2/tab2.html'
        });
}]);