'use strict';

angular.module('myApp.components.typeahead').

filter('myCustom', function() {
	return function(input,title,subtitle,subsubtitle,query) {
		var out = [];
		angular.forEach(input, function(row){
			if (
				angular.lowercase(row[title]).indexOf(angular.lowercase(query) || '') !== -1 ||
				angular.lowercase(row[subtitle]).indexOf(angular.lowercase(query) || '') !== -1 ||
				angular.lowercase(row[subsubtitle]).indexOf(angular.lowercase(query) || '') !== -1
			)
			{
				out.push(row);
			}
		});
		return out;
	};
});