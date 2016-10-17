'use strict';
var myApp = angular.module('myApp.features.commondataexchange',[]);

myApp.factory('commonDataExchange',['$rootScope',function($rootScope){
    return {
        selectedTeam: -1,
        changeSelectedTeam: function(selectTeam) {
            this.selectedTeam = selectTeam;
            $rootScope.$broadcast('TeamSelected',selectTeam);
            return selectTeam;
        },
        deleteTeamMember: function(personID) {
        	$rootScope.$broadcast('MemberDeleted',personID);
        	return personID;
        },
        addTeamMembers: function(persons) {
            $rootScope.$broadcast('AddTeamMembers',persons);
            return persons;
        }
    };
}]);