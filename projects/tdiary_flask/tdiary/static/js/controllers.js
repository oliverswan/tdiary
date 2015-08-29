'use strict';

/* Controllers */

function IndexController($scope,Note) {
	
}

function NoteController($scope,Note) {

	var postsQuery = Note.get({}, function(notes) {
		// 这里是回调函数，获得数据后，将数据保存到上下文的notes变量中，可供模板使用
		$scope.notes = notes.objects;
	});
}

function EvalController($scope,Note) {

	var postsQuery = Note.get({}, function(notes) {
		// 这里是回调函数，获得数据后，将数据保存到上下文的notes变量中，可供模板使用
		$scope.notes = notes.objects;
	});
}

/*function PostListController($scope, Post) {
	var postsQuery = Post.get({}, function(posts) {
		// 这里是回调函数，获得数据后，将数据保存到上下文的posts变量中，可供模板使用
		$scope.posts = posts.objects;
	});
}

function PostDetailController($scope, $routeParams, Post) {
	var postQuery = Post.get({ postId: $routeParams.postId }, function(post) {
		$scope.post = post;
	});
}*/
