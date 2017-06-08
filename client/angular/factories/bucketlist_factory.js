app.factory('BucketlistFactory', function($http){
	var factory = {};
	var bucketlists = [];

	factory.create = function(newBucketlist, callback){
		console.log(newBucketlist)
		$http.post('/bucketlists', newBucketlist).then(callback);
	}
	factory.index = function(callback){
		$http.get('/bucketlists').then(callback);
	}
	factory.destroy = function(id, callback){
		$http.delete('/bucketlists/' + id).then(callback);
	}
	factory.show = function(bucketlist_id, callback){
		$http.get('/bucketlists/' + bucketlist_id).then(callback);
	}
	return factory;
})