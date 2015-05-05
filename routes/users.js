var express = require('express');
var router = express.Router();

var title = "Rank Userszzz";
var users = {
    "data": [
    {
        "name": "Syed Mokhtar",
        "target": 5,
        "score" : 100
    }, {
        "name": "Imran Ariffin WOW",
        "target": 1,
        "score" : 75
    }, {
        "name": "Anas Faris",
        "target": 2,
        "score" : 89
    }
    ]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users', {
  		title: title,
  		users: rankUsers(users)
  });
});

module.exports = router;

function rankUsers(userData)
{
	var users = userData["data"];
	users.sort(function(a, b) {
		return b["score"] - a["score"];
	});

	userData["data"] = users;

	return userData;
}

function replaceData(users)
{
	var data = users["data"];
	var newData = [{        
		"name": "Saiful Bukhari",
        "target": 100,
        "score" : 9999
    }];

    users["data"] = newData;

    console.log(users["data"]);
    console.log(users);

    return users;
}