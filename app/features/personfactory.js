'use strict';
var myApp = angular.module('myApp.features.personfactory',[]);

myApp.factory('personFactory', ['$http', function($http){
	return {
		getAll: function() {
			return $http.get('staff.json').then(function(resp){
				return resp.data;
			});
		},
		getPerson: function(personID) {
			return $http.get('staff.json').then(function(resp) {
				for (var i = 0; i < resp.data.length; i++) {
					if (resp.data[i].id === personID) {
						console.log('getPerson: ',resp.data[i]);
						return resp.data[i];
					}
				}
			});
		},
		getPersons: function(personIDs) {
			return $http.get('staff.json').then(function(resp) {
				var persons=[];
				for (var i = 0; i < resp.data.length; i++) {
					for (var j = 0; j < personIDs.length; j++)
					{
						if (resp.data[i].id === personIDs[j])
						{
							persons.push(resp.data[i]);
						}
					}
				}
				return persons;
			});
		}
	}
}]);