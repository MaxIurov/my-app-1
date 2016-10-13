'use strict';
var myApp = angular.module('myApp.features.commondataexchange',[]);

myApp.factory('commonDataExchange',['$rootScope',function($rootScope){
    return {
        selectedTeam: -1,
        tagManagerIDs: [],
        changeSelectedTeam: function(newTeam) {
            this.selectedTeam = newTeam;
            $rootScope.$broadcast('TeamSelected',this.selectedTeam);
            return this.selectedTeam;
        },
        deleteTeamMember: function(personID) {
        	$rootScope.$broadcast('MemberDeleted',personID);
        	return personID;
        },
        addTeamMember: function(personID) {
            this.tagManagerIDs = [personID];
            $rootScope.$broadcast('AddTeamMember',personID);
            return personID;
        }
    };
}]);