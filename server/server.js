var db = require("./models");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var PORT = 3001;
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
});
  
  


  // Routes
  app.get("/", function(req, res) {
      res.send("<h1>We are the world!!!</h1>");
});
  
  
