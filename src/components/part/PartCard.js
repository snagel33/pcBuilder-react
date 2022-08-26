import React from "react";
import "./Part.css";

export const PartCard = ({ part }) => (
    <div className="card">
        <div className="card-content">
            <picture><img src={part.img}/></picture>
            <h3>{part.type}</h3>
            <h3><span className="card-partname">{part.name}</span></h3>
            <p>Component Type: {part.type}</p>
            <p>Manufacturer: {part.maker}</p>
            <p>Description: {part.description}</p>
            <p>Price: {part.price}</p>
        </div>
    </div>
)