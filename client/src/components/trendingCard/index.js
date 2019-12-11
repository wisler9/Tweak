import React,  {Component} from 'react';
import "./style.css";

const TrendingCard = (props) => {
    return(
        <div className="card trending-card">
            <div>
                <div className="trendImg">
                <img src={props.image} className="image-fluid"></img>
                </div>
                <hr></hr>
                <div className="card-body trendLnk">
                <a href={props.link} target="_blank">{props.title}</a>
                </div>
            </div>
        </div>
    );
}

export default TrendingCard