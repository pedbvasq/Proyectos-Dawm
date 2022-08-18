var express = require('express');
var router = express.Router();

const { Sequelize } = require('../models');
const League = require('../models').league ;
const Teams = require('../models').teams;
const Players = require('../models').players;


router.get('/', function(req, res, next) {
   res.send("NO DEFINIDA");
});
router.get('/league', function(req, res, next) {
  League.findAll().
  then(data =>{
   res.send(data);
  })
  .catch(e=>{
    console.log(e)

  })
})

router.get('/teams', function(req, res, next) {
   Teams.findAll().
   then(data =>{
    res.send(data);
   })
   .catch(e=>{
     console.log(e)
 
   })
 })

 
router.get('/players', function(req, res, next) {
   Players.findAll().
   then(data =>{
    res.send(data);
   })
   .catch(e=>{
     console.log(e)
 
   })
 })


module.exports = router;