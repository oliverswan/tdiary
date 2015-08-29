'use strict';

// 'tdiaryServices'
angular.module('tdiary', [])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {

		$routeProvider.when('/', {
			templateUrl: 'static/partials/note-form.html',
			controller: IndexController
		})
		.when('/note', {
			templateUrl: 'static/partials/note-form.html',
			controller: NoteController
		})
		.when('/eval', {
			templateUrl: 'static/partials/eval-form.html',
			controller: EvalController
		})
		.otherwise({
			redirectTo: '/'
		})
		;

		$locationProvider.html5Mode(true);
	}])
;