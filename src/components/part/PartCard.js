import React from "react";
import "./Part.css";
import { Link } from "react-router-dom";

export const PartCard = ({ part }) => (
    <div className="card">
        <div className="card-content">
            <picture><img src={part.img}/></picture>
            {/* <h3>{part.partTypeId}</h3> */}
            <h3><span className="card-partname">{part.name}</span></h3>
            <p>Component Type: {part.partTypeId}</p>
            <p>Manufacturer: {part.maker}</p>
            <p>Description: {part.description}</p>
            <p>Price: {part.price}</p>
            <Link to={`/parts/${part.id}`}>
                <button>Details</button>
            </Link>
        </div>
    </div>
)