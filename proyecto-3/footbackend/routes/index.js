var express = require('express');
var router = express.Router();


const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  
/* GET home page. */
router.get('/', function(req, res, next) {
   res.send("Hello Woorld");
});

router.get('/nuevaRuta', function(req, res, next) {
  res.send("Nueva Ruta");
});

module.exports = router;
