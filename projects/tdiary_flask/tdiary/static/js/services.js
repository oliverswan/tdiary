'use strict';

angular.module('tdiaryServices', ['ngResource'])
	.factory('Note', function($resource) {
		// 使用$resource方法调用restful请求
		// 返回一个可以增删改查的对象,默认包含以下方法, 重写进行参数赋值
//		'get':    {method:'GET'},  查询全部的 
//		'save':   {method:'POST'},  
//		'query':  {method:'GET', isArray:true},  
//		'remove': {method:'DELETE'},  
//		'delete': {method:'DELETE'}  
		return $resource('/api/note/:id', {}, {
			query: {
				method: 'GET',
				params: { id: '' },
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