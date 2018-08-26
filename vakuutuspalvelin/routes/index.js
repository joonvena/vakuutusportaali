var express = require('express');
var router = express.Router();

//@Route '/'
// GET home page. 
// PUBLIC

router.get('/', function(req, res, next) {
  res.json("Etusivu");
});

//@ Route '/vakuutukset'
// GET insurance page this shows all the available insurances
// PUBLIC
router.get('/vakuutukset', function(req, res, next) {
  res.json("Tänne tulee vakuutukset");
})

router.get('/tietoariskeistä', (req, res, next) => {
  res.json("Tänne joku api kutsu että voidaan visualisoida dataa tai jtn")
})

//@ Route '/vakuutuslaskuri'
//GET shows the calculator
//PUBLIC
router.get('/vakuutuslaskuri', (req, res, next) => {
  res.json("This shows the insurance calculator")
})

//@Route 'vakuutuslaskuri'
//POST calculates the price with the drag and drop feature
//PUBLIC

router.post('/vakuutuslaskuri', (req, res, next) => {
  res.json("This calculates the insurance and displays the cost")
})




module.exports = router;
