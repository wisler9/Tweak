require('dotenv').config()
// console.log(process.env.PASSWORD);
var db = require("./models");
// Require axios and cheerio. This makes the scraping possible
// var axios = require("axios");
// var cheerio = require("cheerio")
var express = require("express");
// var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));
    
//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }


db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
});
  

var tweak = require("./routes/tweak");
app.use("/api", tweak);

var user = require("./routes/user");
app.use("/api", user);

var profile = require("./routes/profile");
app.use("/api", profile);

var login = require("./routes/login");
app.use("/api", login);

// var comments = require("./routes/comments");
// app.use("/api", comments);

   

//routes


app.get("/", function(req, res) {

});
// app.get("/comments", function(req, res) {
//   res.send("comments");
// });
app.get("/tweaks", function(req, res) {
  res.send("tweaks");
});

// app.get("/explore", function(req, res){
//   // console.log("random string");
//   axios.get("https://www.codemag.com/magazine").then(function(response) {
//     var $ = cheerio.load(response.data);

//      console.log(response.data);

//     $("ul.article-list").each(function(i, element){
//       var title = $(element).children("a").text();

//       // console.log(title);

//       // var link = $(element).children("a").attr("href");
//       // console.log();
//     })
  
//   })
 
// })

  
  
module.exports= app;