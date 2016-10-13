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
						return resp.data[i];
					}
				}
			});
		}
	}
}]);