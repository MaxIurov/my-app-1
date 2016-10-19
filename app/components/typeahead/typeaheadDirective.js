'use strict';

angular.module('myApp.components.typeahead').

directive('typeahead',['$timeout','myCustomFilter',function($timeout,myCustomFilter) {
	return {
		restrict: 'AEC',
		transclude: true,
		scope: {
			items: '=',
			prompt: '@',
			title: '@',
			subtitle: '@',
			subsubtitle: '@',
			onSelect: '&',
			selecteditem: '='
		},
		link: function(scope,elem,attrs) {
			scope.handleSelection = function(selectedItem) {
			    scope.selecteditem = selectedItem;
			    $timeout(function() {
			      scope.onSelect();
			    }, 200);
			};
			scope.query = '';
			scope.current = 0;
			scope.selected = true; // hides the list initially
			scope.isCurrent = function(index) {
			    return scope.current === index;
			};
			scope.setCurrent = function(index) {
			    scope.current = index;
			};
			scope.applyTAFilter = function(filterstring) {
				scope.selected = false;
				scope.filteredItems = myCustomFilter(scope.items,scope.title,scope.subtitle,scope.subsubtitle,filterstring);
			};
/*			scope.search = function (row) {
				return (
					angular.lowercase(row[scope.title]).indexOf(angular.lowercase(scope.query) || '') !== -1 ||
					angular.lowercase(row[scope.subtitle]).indexOf(angular.lowercase(scope.query) || '') !== -1 ||
					angular.lowercase(row[scope.subsubtitle]).indexOf(angular.lowercase(scope.query) || '') !== -1
					);
			};*/
		},
		templateUrl: '../components/typeahead/typeahead.html'
	};
}]);