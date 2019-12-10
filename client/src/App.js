import React, {Component} from "react";

import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

// import SignUp from "./components/SignUp";
// import Login from "./components/Login";


import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./components/Login";
import Profile from "./pages/Profile"


// import Card from "./components/Card";
// import ListItems from "./components/ListItems";


class App extends Component {
  state = {
    tweaks: ["This is a test", "test of tweak"],
    tweak: ""
  };

  // componentDidMount() {
  //   this.loadTweaks()
  // }

  handleSubmit = event => {
    console.log("Tweak Submitted")
    this.setState((previousState) => {
      return {
        tweaks: previousState.tweaks.concat(previousState.tweak),
        tweak: ""
      }
      
    })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(name, value)
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Router>
      <div>


        {/* <Login />
        <SignUp /> */}

        <Switch>
        <Route path="/main" component={Main} 
        />
        <Route path ="/signup" component={SignUp}/>

         <Route path ="/" component={Home}/>
         <Route path="/login" component={Login}/> 
         <Route exact path="/profile" component={Profile}/>


        </Switch>

      </div>
          </Router>
    )
    }

  };

  //     // Route 2
// // =======
// // When you visit this route, the server will
// // scrape data from the site of your choice, and save it to
// // MongoDB.
// // TIP: Think back to how you pushed website data
// // into an empty array in the last class. How do you
// // push it into a MongoDB collection instead?

//   // Make a request via axios to grab the HTML body from the site of your choice
//   axios.get("https://theskint.com/").then(function(response) {
//     // Load the HTML into cheerio and save it to a variable
//     // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
//     var $ = cheerio.load(response.data);

//     // Select each element in the HTML body from which you want information.
//     // NOTE: Cheerio selectors function similarly to jQuery's selectors,
//     // but be sure to visit the package's npm page to see how it works
//     $("#primary .entry-content p").each(function(i, element) {

//       var title = $(element).find("b").text().replace('>>', '');
//       var description = $(element).text().replace('>>', '');

//       // Save these results in an object that we'll push into the results array we defined earlier
//       if (title && title != description) {
//         db.scrapedData.insert({
//             title: title,
//             description: description
//         }, function(err){
//           if (err) {
//             console.log(err)
//           } 
//         });
      // }

  


export default App;
