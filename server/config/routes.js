var Users = require('../controllers/users');
var Bucketlists = require('../controllers/bucketlists');


module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.post('/sessions', Users.login);
	app.get('/bucketlists', Bucketlists.index);
	app.post('/bucketlists', Bucketlists.create);
	app.get('/bucketlists/:id', Bucketlists.show);
	app.delete('/users/:id', Users.destroy);
	app.delete('/bucketlists/:id', Bucketlists.destroy);
	app.get('/users/:id', Users.show);

}