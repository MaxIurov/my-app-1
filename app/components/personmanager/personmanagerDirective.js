'use strict';

angular.module('myApp.components.personmanager')

.directive('personManager', function (personFactory,commonDataExchange) {
	return {
		restrict: 'AEC',
		replace: true,
		scope: {
			selectedTeam: '='
		},
        templateUrl: '../components/personmanager/personmanager.html',
        link: function linkFn (scope, element, attrs) {
        	//scope.selectedTeam = commonDataExchange.selectedTeam;
        }
	};
});