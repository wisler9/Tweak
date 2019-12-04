import React,  {Component} from 'react';

const Card = (props) => {


   
        console.log(props)

        return (
            <div className="card bg-dark text-white">
                <img src="..." className="card-img" alt="..."/>
                {/* <h5 className="card-title">Tweak Title</h5> */}
                <div className="form-group">
                <textarea value={props.value} className="form-control" rows="5" name="tweak" onChange={props.onChange}/>
                <button className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
                </div>
            </div>
        );


};

export default Card;