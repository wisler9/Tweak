var express = require("express");
var router = express.Router();

// var path = require("path");
var db = require("../models/index");

//get users
router.get("/user", function(req, res) {
    db.User.findAll({
     
  
    })
    .then(function(user){
      res.json(user);
    })
});
  
//get specific user
router.get("/user/:id", function(req, res) {
  db.User.findOne({
   where:{ id: req.params}

  })
  .then(function(user){
    res.json(user);
  })
});

//create user
router.post("/user", function(req,res){
    console.log(req.body);
    db.User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      bio: req.body.bio,
      experience:req.body.experience
  
    }).then(function(dbUser){
      res.json(dbUser)
    })
})

//update specific user
router.put("/user/:id", function(req, res){
      db.User.Update({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        bio: req.body.bio,
        experience:req.body.experience 
      },{
          where:{
              id: req.params.id
            }
      }).then(function(userUpdate){
        res.json(userUpdate);
      })
})

router.delete("/user/:id", function(req, res){
    db.User.destroy({
          where:{
              id: req.params.id
            }
      }).then(function(userDelete){
        res.json(userDelete);
      })
})
  module.exports= router;