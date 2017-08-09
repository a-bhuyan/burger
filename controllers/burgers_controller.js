var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();

router.get("/", function(req, res){
  burger.all(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res){
  burger.create([
    "burger_name"
  ],[
    req.body.name
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res){
  var condition = "id =" + req.params.id;
  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function(){
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
