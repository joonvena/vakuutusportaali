var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("Etusivu");
});

/* GET insurance page */
router.get('/vakuutukset', function(req, res, next) {
  res.json("Tänne tulee vakuutukset");
})

/* GET user panel */
router.get('/omavakuutus', function(req, res, next) {
  res.json("Tänne tulee hallintapaneeli");
})

module.exports = router;
