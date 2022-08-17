var express = require('express');
const { Sequelize } = require('../models');
var router = express.Router();



const Teams = require('../models').teams;

/* GET home page. */
router.get('/', function(req, res, next) {
   res.send("Hello Woorld");
});

router.get('/teams', function(req, res, next) {
  
  Teams.findAll({
    attibutes:["nameteam"]
  }).then(teams =>{
      res.send(teams)
  } )
});

module.exports = router;
