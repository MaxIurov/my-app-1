'use strict';

angular.module('myApp.tab2').

controller('Tab2Ctrl', function Tab2Ctrl($scope,personFactory,commonDataExchange) {
	personFactory.getAll().then(function(data) {
		$scope.persons = data;
	});
	$scope.selectedTeam = commonDataExchange.selectedTeam;

	$scope.sortTableBy = 'name';
	$scope.sortReverse = true;

	$scope.sortBy = function(colClicked) {
		$scope.sortReverse = ($scope.sortTableBy === colClicked) ? !$scope.sortReverse : false;
		$scope.sortTableBy = colClicked;
	};

	$scope.$on('TeamSelected',function(event,teamID) { $scope.selectedTeam = teamID; });
	$scope.addMember = function(person) {
		var persons = [person];
		commonDataExchange.addTeamMembers(persons);
	};
});