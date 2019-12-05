var express = require("express");
var router = express.Router();

// var path = require("path");
var db = require("../models/index");

router.get("/comments",function(req,res){
    db.Comments.findAll({

    }).then(function(comments){
        res.json(comments)
    })
})

router.post("/comments",function(req,res){
    db.Comments.create({
        user: req.body.user,
        tweak: req.body.tweak

    }).then(function(comments){
        res.json(comments)
    })
})





module.exports= router;

