'use strict';

angular.module('myApp.tab1').

controller('Tab1Ctrl', ['$scope','$rootScope','personFactory','commonDataExchange',function ($scope,$rootScope,personFactory,commonDataExchange) {
	personFactory.getAll().then(function(data) {
		$scope.persons = data;
	});
	$scope.btnRefresh = {
		"font-size" : "19px",
		"display" : "inline-block",
		"padding" : "15px"
	};
	$scope.tagManager = [];
	$scope.selectedTeam = commonDataExchange.selectedTeam;

	var unbind1 = $rootScope.$on('TeamSelected',function(event,teamID) {
		$scope.selectedTeam = teamID;
	});
	//$scope.$on('$destroy', unbind1);

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

	var unbind2 = $rootScope.$on('MemberDeleted',function(event,personID) {
		for (var i=0; i<$scope.tagManager.length; i++)
		{
			if ($scope.tagManager[i].id === personID)
			{
				$scope.tagManager.splice(i,1);
			}
		}
	});

	$scope.$on('$destroy', function(event) {
		unbind1();
		unbind2();
	});
}]);