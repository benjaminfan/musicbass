var express = require('express');
var router = express.Router();

const path = require('path');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'@Frontier11',
  database:'university'
});

// /* GET  listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with data');
// });
router.get('/', function(req, res, next) {
  connection.query('SELECT c.cname FROM Class c WHERE c.room=\'R128\' OR c.meets_at LIKE \'MWF%\';', function (error, results, fields) {
    if (error){
      res.send(error);
      throw error;
    }
    // res.send({users:results});
    res.json({users:results});
    // res.send({users:results});
    results.forEach(result => {
        console.log(result);
    });
  });   
});

module.exports = router;
