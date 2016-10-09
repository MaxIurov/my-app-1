'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
	'ui.router'
])
.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {
	$urlRouterProvider.otherwise('/tab1');

	$stateProvider
	.state('tab1',{
		name: 'tab1',
		url: '/tab1',
		temlateUrl: 'tab1/tab1.html'
	})
	.state('tab2',{
		name: 'tab2',
		url: '/tab2',
		temlateUrl: 'tab2/tab2.html'
	});
}]);
/*.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});*/