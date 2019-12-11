import React, {Component} from "react";
import TrendingCard from '../components/trendingCard';
import "../components/Profile/style.css";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


class Profile extends Component {
  state = {
    // tweaks: ["Top Programming Blogs to Improve Your Skills: Coding Horror, David Walsh, A List Apart", "Chance The Rapper’s New Coding Project For CPS Students...who would have thought"],
    // tweak: "",
    trending: [
      {
        image: "./images/albino-reticulated-python.png",
          title: "Octoverse 2019: Python slithers past Java to become GitHub’s second most popular language",
          link: "https://www.developer-tech.com/news/2019/nov/08/octoverse-2019-python-java-github-most-popular-language/"
      },
      {
        image: "./images/iStock.png",
          title: "Mobile game company N3twork secures $40 million in series C funding",
          link: "https://www.developer-tech.com/news/2019/nov/29/mobile-game-company-n3twork-secures-40-million-series-c-funding/"
      },
      {
        image: "./images/Apple_China-Design.png",
        title: "Apple launches accelerator in China to boost app design and development",
        link: "https://www.developer-tech.com/news/2019/jul/11/apple-accelerator-china-boost-app-design-development/"
      }
      ]
  };
  
    render() {
      const user = JSON.parse(localStorage.getItem("user"))
      console.log(user);
      return (
        <div>
          <div className="container menuBox">
            <h1 className="menuLogo">&lt;TWEAK/&gt;</h1>
            <div className="menuLinks">
              <div className="menu">
              <a className="home" href="/main"><icon class="fa fa-home fa-2x"></icon><h2>Home</h2></a>
              </div>
              <div className="menu">
              <a className="explore" href="/user/:id"><icon className="fa fa-compass fa-2x"></icon><h2>  Explore</h2></a>
              </div>
              <div className="menu">
              <a className="messages" href="/user/:id"><icon className="fa fa-envelope fa-2x"></icon><h2>  Messages</h2></a>
              </div>
              <div className="menu">
              <Link to={"/profile"}>
              <a className="profile" href="/user/:id"><icon className="fa fa-user-circle fa-2x"></icon><h2>  Profile</h2></a>
              </Link>
              </div>
            </div>
          </div>


          <div className="container bioBox">
            <h2>Profile</h2>
            <div className="wrapper">
            <div className="card">
                <img src="https://via.placeholder.com/200" className="card-img-top" alt="placeholder"/>
                <div className="card-body">
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                  <p className="card-text">Bio: {user.bio}</p>
                  <p className="card-text">Experience: {user.experience}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container trendingBox">
            <h2>Trending</h2>
            <hr></hr>
            <div className="wrapper">
            {this.state.trending.map(trend => {
              return (
                <TrendingCard
                image={trend.image}
                link={trend.link}
                title={trend.title}>
                </TrendingCard>
              )
            })
          }
            </div>
          </div>     


        </div>
        
      )
      }
  
    };
  


     export default  Profile
