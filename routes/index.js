var express = require('express');
var router = express.Router();

var persons = {
    "data": [
    {
        "name": "Syed Mokhtar",
        "target": 5
    }, {
        "name": "Imran Ariffin WOW",
        "target": 1
    }, {
        "name": "Anas Faris",
        "target": 2
    }
    ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'UT Darul Hikmah',
        persons: persons
    });
});

module.exports = router;
