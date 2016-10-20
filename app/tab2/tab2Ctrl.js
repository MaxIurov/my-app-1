'use strict';

angular.module('myApp.tab2').

controller('Tab2Ctrl', ['$scope','$rootScope','$filter','personFactory','commonDataExchange',function ($scope,$rootScope,$filter,personFactory,commonDataExchange) {
	personFactory.getAll().then(function(data) {
		$scope.persons = data;
		$scope.filteredPersons = data;
	});
	$scope.selectedTeam = commonDataExchange.selectedTeam;
	var unbind = $rootScope.$on('TeamSelected',function(event,teamID) {
		$scope.selectedTeam = teamID;
	});
	$scope.$on('$destroy', unbind);

	$scope.applyPersonFilter = function(filterstring) {
		$scope.filteredPersons = $filter('filter')($scope.persons, filterstring);
	}

	$scope.sortTableBy = 'name';
	$scope.sortReverse = true;

	$scope.sortBy = function(colClicked) {
		$scope.sortReverse = ($scope.sortTableBy === colClicked) ? !$scope.sortReverse : false;
		$scope.sortTableBy = colClicked;
	};

	$scope.addMember = function(person) {
		var persons = [person];
		commonDataExchange.addTeamMembers(persons);
	};
}]);