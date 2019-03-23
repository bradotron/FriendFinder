var express = require("express");
var router = express.Router();
var data = require(`../data/friends`);

/* GET home page. */
router.get(`/friends`, function(req, res, next) {
  res.json(data);
});

router.post(`/friends`, function(req, res) {
  console.log(`/api/friends POST endpoint`);
  console.log(req.body.question1);
  // find the most compatible person

  // send back the name and picture

  // save the new person to the data

  // send the client back to the homepage
  res.json({friend: "Fred Rogers"});
});

module.exports = router;
