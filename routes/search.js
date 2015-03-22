var express = require('express');
var router = express.Router();


/* GET search api. */
http.get('/', function(req, res, next) {
	var query = req.params.query;
	var response = {
		e : req.get("http://api.eventful.com/json/events/search?app_key=SGjgGsbhWvJHdRxB&q=music&l=02134")
	};
  	res.json(response);
});


module.exports = router;
