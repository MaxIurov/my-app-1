'use strict';

angular.module('myApp.components.persontooltip')

.directive('personNameTooltip', function () {
	return {
		restrict: 'AEC',
		replace: true,
		scope: {
			person: '='
		},
        templateUrl: '../components/persontooltip/persontooltip.html'
	};
});