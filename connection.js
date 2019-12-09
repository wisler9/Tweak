const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended:true
}));


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "tweak_DB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createUser();
  });
  
  function createUser() {
    console.log("Inserting a new user...\n");
    var query = connection.query(
      "INSERT INTO user SET ?",
      {
        email: "",
        password: ""
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " user inserted!\n");
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  



app.get("/", function(req, res){
    res.render("home");
});
app.get("/login", function(req, res){
    res.render("login");
});
app.get("/SignUp", function(req, res){
    res.render("SignUp");
});






app.listen(3001, function() {
    console.log("Server stated on port 3001.");
});