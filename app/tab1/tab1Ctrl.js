'use strict';

angular.module('myApp.tab1').

controller('Tab1Ctrl', ['$scope','personFactory','commonDataExchange',function ($scope,personFactory,commonDataExchange) {
	personFactory.getAll().then(function(data) {
		$scope.persons = data;
	});
	$scope.btnRefresh = {
		"font-size" : "18px",
		"display" : "inline-block",
		"height" : "25px"
	};
	$scope.tagManager = [];
	$scope.selectedTeam = commonDataExchange.selectedTeam;
	$scope.$on('TeamSelected',function(event,teamID) {
		$scope.selectedTeam = teamID;
	});
	$scope.onItemSelected = function() {
		if ($scope.tagManager.indexOf($scope.selPers) === -1) {
			$scope.tagManager.push($scope.selPers);
		}
	};
	$scope.deleteTagItem = function(itemID) {
		for (var i=0; i<$scope.tagManager.length; i++)
		{
			if ($scope.tagManager[i].id === itemID)
			{
				$scope.tagManager.splice(i,1);
			}
		}
	};
	$scope.btnRefreshClicked = function() {
		var tagMembers = $scope.tagManager.slice();
		commonDataExchange.addTeamMembers(tagMembers);
	};
	$scope.$on('MemberDeleted',function(event,personID) {
		for (var i=0; i<$scope.tagManager.length; i++)
		{
			if ($scope.tagManager[i].id === personID)
			{
				$scope.tagManager.splice(i,1);
			}
		}
	});
}]);