import React,  {Component} from 'react';

const ListItems= (props) => {
    console.log(props)
    return (
        <div className="card list" style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                {props.tweaks.map(tweak => (
                <div className="card listItem" style={{margin: ".5rem"}}>
                    <div className="card-body tweakText">
                    {tweak}
                    </div>
                </div>
                ))}
        </div>
    );
};

export default ListItems;