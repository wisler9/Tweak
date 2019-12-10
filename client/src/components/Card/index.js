import React,  {Component} from 'react';
import "./style.css";
import axios from 'axios'
import cheerio from 'cheerio'

const Card = (props) => {
    console.log(props)
    return (
        <div className="card tweakCard">
            <div className="card-body">
                
                <textarea value={props.value} className="form-control" rows="" name="tweak" onChange={props.onChange}>
                </textarea>
                <button className="btn btn-secondary-outline addTweakBtn" onClick={props.handleSubmit}>Tweak</button>
                {/* <a href="#" class="card-link" role="button">Card link</a>
                <a href="#" class="card-link" role="button">Another link</a> */}
            </div>
        </div>
    );
   
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
axios.get("https://www.developer-tech.com/").then(function(response) {
    //     // Load the HTML into cheerio and save it to a variable
    //     // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        var $ = cheerio.load(response.data);
    
        // console.log($)
    //     // Select each element in the HTML body from which you want information.
    //     // NOTE: Cheerio selectors function similarly to jQuery's selectors,
    //     // but be sure to visit the package's npm page to see how it works
        $("#hub_content").each(function(i, element) {
    
            var result = {};

            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this)
              .children("a")
              .text();
            result.link = $(this)
              .children("a")
              .attr("href");
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
            });
          
    
        });
 
export default Card;