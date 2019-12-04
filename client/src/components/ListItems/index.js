import React,  {Component} from 'react';

const ListItems= (props) => {
        console.log(props)
        return (
            <div>
                <img src="..." className="card-img" alt="..."/>
                {/* <h5 className="card-title">Tweak Title</h5> */}
                    {props.tweaks.map(tweak => (
                    <div className="card">
                    {tweak}
                    </div>
                    ))}
            </div>
        );
};

export default ListItems;