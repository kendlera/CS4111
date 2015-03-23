var express = require('express');
var router = express.Router();


/* GET search api. */
router.get('/', function(req, res, next) {
	var query = req.params.query;
	var request = require('request');
	request('http://api.eventful.com/json/events/search?app_key=SGjgGsbhWvJHdRxB&q=' + query + '&l=02134', function(error, response, body) {
		if(!error && response.statusCode == 200){
			res.json(body)
		}
	})
});


module.exports = router;


