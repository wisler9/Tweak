import React,  {Component} from 'react';
import "./style.css";

const Card = (props) => {
    console.log(props)
    return (
        <div className="card tweakCard">
            <div class="card-body">
                
                <textarea value={props.value} className="form-control" rows="" name="tweak" onChange={props.onChange}>
                </textarea>
                <button className="btn btn-secondary-outline addTweakBtn" onClick={props.handleSubmit}>Tweak</button>
                {/* <a href="#" class="card-link" role="button">Card link</a>
                <a href="#" class="card-link" role="button">Another link</a> */}
            </div>
        </div>
    );
};
 
export default Card;