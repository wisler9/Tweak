import React,  {Component} from 'react';

const ListItems= (props) => {
    console.log(props)
    return (
        <div className="card list">
                {props.tweaks.map(tweak => (
                <div className="card listItem">
                    <div className="card-body tweakText">
                    {tweak}
                    </div>
                </div>
                ))}
        </div>
    );
};

export default ListItems;