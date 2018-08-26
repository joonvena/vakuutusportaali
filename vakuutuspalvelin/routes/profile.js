var express = require('express');
var router = express.Router();

//@Route /omavakuutus
//GET this shows the profile information
//Private

router.get('/omavakuutus', function(req, res, next) {
    res.json("Tänne tulee hallintapaneeli");
  })

//@Route /omavakuutus/:vakuutusID
//GET this shows the information of one information
//Private

router.get('/omavakuutus/:vakuutusId', (req, res, next) => {
    res.json("This shows insurance")
})



module.exports = router; 