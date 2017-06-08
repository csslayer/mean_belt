app.controller('ShowController', function(UserFactory, BucketlistFactory, $cookies, $location, $routeParams){
	console.log('initializing ShowController...');

	var self = this;
	self.bucketlist = {};
	self.newBucketlist = {};
	self.new_bucklist_errors = [];

	self.show = function(){
		console.log($routeParams);
		BucketlistFactory.show($routeParams.id, function(res){
			self.bucketlist = res.data;
			console.log(self.bucketlist);
		})
	}
})