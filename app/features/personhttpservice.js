'use strict';
var myApp = angular.module('myApp.features.personhttpservice',[]);

myApp.service('personHttpService', ['$http','$q', function($http,$q) {
	var cache;
	function getStaff() {
		var d = $q.defer();
		if (cache) {
			d.resolve(cache);
		}
		else {
			$http.get('staff.json').then(
				function success(resp) {
					cache = resp.data;
					d.resolve(cache);
				},
				function failure(reason) {
					d.reject(reason);
				}
			);
		}
		return d.promise;
	};

	function clearCache() {
		cache = null;
	};

	return {
		getStaff: getStaff,
		clearCache: clearCache
	};
}]);