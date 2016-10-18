'use strict';

angular.module('myApp.components.teammanager')

.directive('teamManager', ['teamFactory', 'commonDataExchange', function (teamFactory,commonDataExchange) {

    return {
        restrict: 'AEC',
        replace: true,
        scope: {},
        templateUrl: '../components/teammanager/teammanager.html',
        link: function linkFn (scope, element, attrs) {
        	scope.addNewTeam = function() {
        		if (scope.teamName !== "" && scope.teamName !== undefined) {
        			var team = {};
        			team.name = scope.teamName;
        			team.members = [];
                    team.id = -1;
        			scope.teams = teamFactory.putTeam(team);
        		}
        		scope.restore();
        	};
        	
        	scope.restore = function() {
        		scope.selectedTeam=-1;
                commonDataExchange.changeSelectedTeam(-1);
        		scope.teamName="";
        	};

            scope.deleteTeam = function(teamID) {
                scope.teams=teamFactory.delTeam(teamID);
                scope.restore();
            };

            scope.clearStorage = function() {
                scope.teams=teamFactory.clearAll();
                scope.restore();
            };

            scope.deleteMember = function(teamID,memberID) {
                scope.teams = teamFactory.deleteTeamMember(teamID,memberID);
                commonDataExchange.deleteTeamMember(memberID);
            };
            scope.selectTeam = function(teamID) {
                scope.selectedTeam = teamID;
                commonDataExchange.changeSelectedTeam(teamID);
            };

            scope.$on('AddTeamMembers',function(event,members){
                scope.teams = teamFactory.addTeamMembers(scope.selectedTeam,members);
            });

        	scope.regVal=/^[a-zA-Z0-9]*$/;
        	scope.restore();
        	scope.teams=teamFactory.getAll();
        }
    };
}]);