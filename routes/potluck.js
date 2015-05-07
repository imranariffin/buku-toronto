var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// mongoose.connect('mongodb://heroku_app36536831:nirdvg3k5j0p5i804g1u3k5nkc@ds031832.mongolab.com:31832/heroku_app36536831')
// var db = mongoose.connection;
mongoose.disconnect();

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
//   // yay!
//   console.log("Works!");
// });

console.log("Hello");

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
    res.render('potluck', 
                {
                    title: 'UT Darul Hikmah',
                    persons: persons,
                    partials: {navbar: 'navbar'}
                }
    );
});

module.exports = router;
