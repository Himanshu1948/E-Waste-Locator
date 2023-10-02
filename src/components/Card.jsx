import React from "react";
import "./card.css"; 

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="Couldn't load"/>
            {/* <img src="https://cdn.pixabay.com/photo/2019/07/06/16/31/city-map-4320755_640.png" className="card-img-top" alt="Couldn't load"/> */}
            <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.description}</p>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-primary">{props.button}</a>
          </div>
        </div>
    );
}