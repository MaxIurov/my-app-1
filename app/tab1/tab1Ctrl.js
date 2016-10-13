'use strict';

angular.module('myApp.tab1').

controller('Tab1Ctrl', function Tab1Ctrl($scope,personFactory,commonDataExchange) {
	personFactory.getAll().then(function(data) {
		$scope.persons = data;
	});
	$scope.selectedTeam = commonDataExchange.selectedTeam;
	$scope.$on('TeamSelected',function(event,teamID) { $scope.selectedTeam = teamID; });
/*$scope.persId = '';
$scope.selectedTeam = commonDataExchange.selectedTeam;
$scope.onItemSelected = function() {
	console.log('selected='+$scope.persId);
};*/
});