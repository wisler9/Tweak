var express = require("express");
var router = express.Router();

// var path = require("path");
var db = require("../models/index");

router.get("/tweak", function(req,res){
    db.Tweak.findAll({
       
    }).then(function(tweakCreate){
        res.json(tweakCreate);
      })
})

router.get("/tweak/:id", function(req,res){
    db.Tweak.findOne({
        where:{
            id: req.params.id
        }
       
    }).then(function(tweakCreate){
        res.json(tweakCreate);
      })
})

router.post("/tweak", function(req,res){
    db.Tweak.create({
        user: req.body.user,
    description: req.body.description,
    content: req.body.content
    }).then(function(tweakCreate){
        res.json(tweakCreate);
      })
})


router.put("/tweak/:id", function(req,res){
    db.Tweak.update({
    content: req.body.content
    },{
        where: {
            id: req.params.id
        }
    }).then(function(tweakCreate){
        res.json(tweakCreate);
      })
})

router.delete("/tweak/:id", function(req,res){
    db.Tweak.destroy({
        user: req.body.user,
        description: req.body.description,
        content: req.body.content
    },{
        where: {
            id: req.params.id
        }
    }).then(function(tweakCreate){
        res.json(tweakCreate);
      })
})



module.exports= router;

