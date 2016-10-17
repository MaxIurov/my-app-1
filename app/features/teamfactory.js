'use strict';
var myApp = angular.module('myApp.features.teamfactory',[]);

myApp.factory('teamFactory', ['$rootScope',function($rootScope){
    return {
        putTeam: function(team) {
            if (team.id===-1)
            {
                if ($rootScope.id === undefined) {
                    var maxid=-1;
                    for (var i = 0; i < localStorage.length; i++) {
                        if (localStorage.key(i).indexOf('team') !== -1) {
                            var teammaxid = localStorage.getItem(localStorage.key(i));
                            var numid = Number((JSON.parse(teammaxid)).id);
                            if (numid > maxid) {maxid = numid;}
                        }
                    }
                    $rootScope.id = maxid+1;
                }
                team.id = $rootScope.id;
                $rootScope.id++;
            }
            localStorage.setItem('team'+team.id, angular.toJson(team));
            return this.getAll();
        },
        getAll: function() {
            var teams=[];
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf('team') !== -1) {
                    var team = localStorage.getItem(localStorage.key(i));
                    teams.push(JSON.parse(team));
                }
            }
            return teams;
        },
        delTeam: function(teamId) {
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf('team') !== -1) {
                    var thisTeam = localStorage.getItem(localStorage.key(i));
                    var numid = Number((JSON.parse(thisTeam)).id);
                    if (teamId === numid) {
                        localStorage.removeItem(localStorage.key(i));
                    }
                }
            }
            return this.getAll();
        },
        clearAll: function() {
            localStorage.clear();
            return this.getAll();
        },
        deleteTeamMember: function(teamId,memberId) {
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).indexOf('team') !== -1) {
                    var thisTeam = JSON.parse( localStorage.getItem(localStorage.key(i)) );
                    if (teamId === thisTeam.id) {
                        for (var j=0; j<thisTeam.members.length; j++)
                        {
                            if (thisTeam.members[j].id === memberId)
                            {
                                thisTeam.members.splice(j,1);
                            }
                        }
                        localStorage.setItem('team'+thisTeam.id, angular.toJson(thisTeam));
                    }
                }
            }
            return this.getAll();
        },
        addTeamMembers: function(teamId,members)
        {
            for (var i = 0; i < localStorage.length; i++)
            {
                if (localStorage.key(i).indexOf('team') !== -1)
                {
                    var thisTeam = JSON.parse( localStorage.getItem(localStorage.key(i)) );
                    if (teamId === thisTeam.id)
                    {
                        for (var j=0; j<thisTeam.members.length; j++)
                        {
                            for (var k=0; k<members.length; k++)
                            {
                                if (thisTeam.members[j].id === members[k].id)
                                {
                                    members.splice(k,1);
                                }
                            }
                        }
                        thisTeam.members = thisTeam.members.concat(members);
                        localStorage.setItem('team'+thisTeam.id, angular.toJson(thisTeam));
                    }
                }
            }
            return this.getAll();
        }
    };
}]);