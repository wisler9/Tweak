var express = require("express");
var router = express.Router();

// var path = require("path");
var db = require("../models/index");


router.post("/login", function(req,res){
    db.Login.create({
       email: req.body.email,
       password: req.body.password

    
       
    }).then(function(login){
       
        res.json(login);
      })
})

router.put("/login/:id", function(req,res){
    db.Login.update({
      
       password: req.body.password
    },{
        where: {
            id: req.params.id
        }
    }).then(function(updateLogin){
       
        res.json(updateLogin);
      });
});

router.delete("/login/:id", function(req,res){
    db.Login.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(tweakCreate){
        res.json(tweakCreate);
      })
})

module.exports= router;

