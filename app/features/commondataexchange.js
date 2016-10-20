'use strict';
var myApp = angular.module('myApp.features.commondataexchange',[]);

myApp.factory('commonDataExchange',['$rootScope',function($rootScope){
    return {
        selectedTeam: -1,
        changeSelectedTeam: function(selectTeam) {
            this.selectedTeam = selectTeam;
            $rootScope.$emit('TeamSelected',selectTeam);
            return selectTeam;
        },
        deleteTeamMember: function(personID) {
        	$rootScope.$emit('MemberDeleted',personID);
        	return personID;
        },
        addTeamMembers: function(persons) {
            $rootScope.$emit('AddTeamMembers',persons);
            return persons;
        }
    };
}]);