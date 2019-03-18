var express = require("express");
var router = express.Router();

/* GET home page. */
router.get(`/friends`, function(req, res, next) {
  res.send(`you've touched my friendzone`);
});

router.post(`/friends`, function(req, res) {
  console.log(req.body);
});

module.exports = router;
