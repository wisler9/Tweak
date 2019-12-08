var express = require("express");
var router = express.Router();

// var path = require("path");
var db = require("../models/index");


router.get("/profile/:id", function(req,res){
    db.Profile.findOne({
        where:{
            id: req.params.id
        }
       
    }).then(function(Profile){
        res.json(Profile);
      })
})


router.post("/profile", function(req,res){
    db.Profiles.create({
        Name: req.body.Name,
        Bio: req.body.Bio,
        Tweak:req.body.Tweak,
        Tweaks: req.body.Tweaks,
       
    }).then(function(Profile){
        res.json(Profile);
      })
})

router.put("/profile/:id", function(req,res){
    db.Profile.update({
        Name: req.body.Name,
        Bio: req.body.Bio
        },{
            where: req.params.id
        }).then(function(Profile){
        res.json(Profile);
      })
})

module.exports= router;

