var express = require('express');
var router = express.Router();

//@Route /admin/dashboard
//GET this shows the profile information
//Private

router.get('/admin/dashboard', function(req, res, next) {
    res.json("Tänne tulee hallintapaneeli");
  })

//@Route /omavakuutus/:vakuutusID
//GET this shows the information of one information
//Private

router.get('/admin/dashboard/:cliendID', (req, res, next) => {
    res.json("This shows a single client")
})


//@Route /admin/dashboard/:clientID
//POST this shows the information of one information
//Private

router.post('/admin/dashboard/:cliendID', (req, res, next) => {
    res.json("This updates a single client")
})

module.exports = router; 