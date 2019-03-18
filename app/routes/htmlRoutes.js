var express = require("express");
var router = express.Router();
var path = require("path");

// GET home page
router.get("/", function(req, res, next) {
  // console.log(`serving home`);
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// GET survey
router.get("/survey", function(req, res, next) {
  // console.log(`serving survey`);
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;
