// Dependencies
const express = require("express");
const mysql = require("mysql");

// Sets up the Express App
const app = express();
var PORT = 3001;
var PORT = process.env.PORT || 8080;


// Database connection

/*var connection = mysql.createConnection({
    host: "localhost",
    port: 0000,
    user: "root",
    password: "",
    database: "top_songsDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
  });*/


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Routes
app.get("/", function(req, res) {
    res.send("<h1>We are the world!!!</h1>");
  });


// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });