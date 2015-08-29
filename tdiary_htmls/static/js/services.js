'use strict';

angular.module('tdiaryServices', ['ngResource'])
	.factory('Post', function($resource) {
		// 使用$resource方法调用restful请求
		return $resource('/api/post/:postId', {}, {
			query: {
				method: 'GET',
				params: { postId: '' },
				isArray: true
			}
		});
	})
;



//var User = $resource('/user/:userId', {userId:'@id'});  
//var user = User.get({userId:123}, function() {  
//  user.abc = true;  
//  user.$save();  
//});  