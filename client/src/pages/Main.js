import React, { Component } from 'react';
import "../components/Main/style.css";
import Card from "../components/Card/index"
import ListItems from "../components/ListItems/index"
import TrendingCard from '../components/trendingCard';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";




class Main extends Component {
    state = {
      tweaks: ["Top Programming Blogs to Improve Your Skills: Coding Horror, David Walsh, A List Apart", "test of tweak"],
      tweak: "",
      trending: [
        {
            
            title: "Octoverse 2019: Python slithers past Java to become GitHub’s second most popular language",
            link: "https://www.developer-tech.com/news/2019/nov/08/octoverse-2019-python-java-github-most-popular-language/"
        },
        {
                
                title: "Mobile game company N3twork secures $40 million in series C funding",
                link: "https://www.developer-tech.com/news/2019/nov/29/mobile-game-company-n3twork-secures-40-million-series-c-funding/"
        }
        
        ]
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
      const trend = this.state.trending.map(trending =>
        <TrendingCard
      
        key={trending.id}
        link={trending.link}
        title={trending.title}>
          
        </TrendingCard>
        
        )
      return (
        <div>
          <div className="container menuBox">
            <h1 className="menuLogo">&lt;TWEAK/&gt;</h1>
            <div className="menuLinks">
              <a className="explore" href="/user/:id"><icon className="fa fa-compass"></icon><i className="fontastic">a</i><h2>Explore</h2></a>
              <a className="messages" href="/user/:id"><i className="fa fa-envelope"><h2> Messages</h2></i></a>
        <Link to={"/profile"}>
              <a className="profile" href="/user/:id"><i className="fa fa-user-circle"></i><h2>Profile</h2></a>
              </Link>
            </div>
          </div>

          <div className="container tweakBox">
            <h2>Home</h2>
          <Card 
              value={this.state.tweak}
              onChange={this.handleInputChange}
              name="tweak"
              handleSubmit={this.handleSubmit}
               />
               <ListItems 
               tweaks={this.state.tweaks}
               />  
          </div>

          <div className="container trendingBox">
            <h2>Trending</h2>
            <div className="wrapper">
            <div className="card"> 
                <div className="card-body">
                  <h5 className="card-title">{trend.title}</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <a href={trend.link} className="btn btn-primary">{trend.title}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )
      }
  
    };
  

     export default  Main