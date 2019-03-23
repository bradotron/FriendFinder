var express = require("express");
var router = express.Router();
var data = require(`../data/friends`);

/* GET home page. */
router.get(`/friends`, function(req, res, next) {
  res.json(data);
});

router.post(`/friends`, function(req, res) {
  //console.log(`/api/friends POST endpoint`);
  //console.log(req.body.answers);
  // find the most compatible person
  let matchScore = 0;
  let matchIndex = 0;

  for(let i=0; i<data.length; i++) {
    let currentMatchScore = 0;
    for(let j=0; j<data[i].scores.length; j++) {
      currentMatchScore += Math.abs(req.body.answers[j] - data[i].scores[j]);
    }
    if(i === 0) {
      matchScore = currentMatchScore;
      matchIndex = i;
    } else if(currentMatchScore < matchScore) {
      matchScore = currentMatchScore;
      matchIndex = i;
    }
  }

  // send the name and url of the match back
  res.json({
    name: data[matchIndex].name,
    url: matchUrl = data[matchIndex].photo,
  })
});

module.exports = router;
