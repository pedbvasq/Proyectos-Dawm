var express = require('express');
const { Op } = require("sequelize");
var router = express.Router();
const { Sequelize } = require('../models');
const League = require('../models').league ;
const Teams = require('../models').teams;
const Players = require('../models').players;


router.get('/', function(req, res, next) {
   res.send("NO DEFINIDA");
});


router.get('/teams',function(req,res,next){
  Teams.findAll().
  then(data=>{
    res.json(data)
  }).catch(e=>{
    console.log(e)

  })
}
)



router.get('/teams/:idleague', function(req, res, next) {
  let id = req.params.idleague
   Teams.findAll({
      where:{
        idleague:id
      }
   }).
   then(data =>{
    console.log(data)
    res.send(data);
   })
   .catch(e=>{
     console.log(e)
 
   })
 })

 
router.get('/players', function(req, res, next) {
   Players.findAll().
   then(data =>{
    res.json(data);
   })
   .catch(e=>{
     console.log(e)
 
   })
 })



module.exports = router;