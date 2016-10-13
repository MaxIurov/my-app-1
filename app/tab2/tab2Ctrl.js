'use strict';

angular.module('myApp.tab2').

controller('Tab2Ctrl', function Tab2Ctrl($scope,personFactory,commonDataExchange) {
	personFactory.getAll().then(function(data) {
		$scope.persons = data;
	});
	$scope.selectedTeam = commonDataExchange.selectedTeam;
	$scope.$on('TeamSelected',function(event,teamID) { $scope.selectedTeam = teamID; });
	$scope.addMember = function(personID) {
		console.log('selected='+personID);
		commonDataExchange.addTeamMember(personID);
		};
});