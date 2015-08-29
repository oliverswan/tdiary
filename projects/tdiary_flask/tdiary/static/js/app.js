'use strict';

// 'tdiaryServices' 所有controller在被调用的时候都会被传入数据库服务对象
var app = angular.module('tdiary', ['tdiaryServices']);

	app.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {

		$routeProvider.when('/', {
			templateUrl: 'static/partials/default.html',
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

app.controller('NoteListController', function($scope, Note) {
	// 查询notes列表
	var postsQuery = Note.get({}, function(notes) {
		// 这里是回调函数，获得数据后，将数据保存到上下文的notes变量中，可供模板使用
		 $scope.notes = notes.objects;
	});
	
	});