'use strict';
var myApp = angular.module('myApp.features.personfactory',[]);

myApp.factory('personFactory', ['personHttpService', function(personHttpService){
	var personList = {};

	personList.getAll = function() {
		return personHttpService.getStaff();
	};

	personList.getPerson = function(personID) {
		return personHttpService.getStaff().then(function(pList) {
			for (var i = 0; i < pList.length; i++) {
				if (pList[i].id === personID) {
					return pList[i];
				}
			}
		});
	};

	personList.getPersons = function(personIDs) {
		return personHttpService.getStaff().then(function(pList) {
			var persons = [];
			for (var i = 0; i < pList.length; i++) {
				for (var j = 0; j < personIDs.length; j++)
				{
					if (pList[i].id === personIDs[j])
					{
						persons.push(pList[i]);
					}
				}
			}
			return persons;
		});
	};

	return personList;
}]);

/*myApp.factory('personFactory', ['$http', function($http){
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
}]);*/