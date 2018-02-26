var express = require('express');
var connect = require('../utils/sqlConnect'); //Databse connection stuff here!
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //what this is doing is if there is an error it tries to show you it
  connect.query("SELECT * FROM mainmodel", (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);

      res.render('cars',
      {
        title : 'Minis are Awesome',
        message : 'A selection of minis',
        carData : result
      });
    }
  });

});

module.exports = router;
