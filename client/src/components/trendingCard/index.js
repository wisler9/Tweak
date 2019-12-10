import React,  {Component} from 'react';
import "./style.css";

const TrendingCard = (props) => {
    return(
        <div className="card trending-card" 
        onClick= {()=> props.handleClick(props.id)}
        
        >
            <div>
                <a href={props.link}>{props.title}</a>
            </div>
        </div>
    );
}

export default TrendingCard