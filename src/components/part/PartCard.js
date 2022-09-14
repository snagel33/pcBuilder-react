import React from "react";
import "./Part.css";
import { Link } from "react-router-dom";
import { NavBar } from "../nav/NavBar";



export const PartCard = ({ part }) => (

    <div className="card">
        <div className="card-content">
            <picture><img src={part.img}/></picture>
            {/* <h3>{part.partTypeId}</h3> */}
            <h3><span className="card-partname">{part.name}</span></h3>
            <p><b>Component Type:</b> {part.partType_id}</p>
            <p><b>Manufacturer:</b> {part.maker}</p>
            <p><b>Description:</b> {part.description}</p>
            <p><b>Price:</b> ${part.price}.00</p>
            {/* <button className="btn btn-primary"
                onClick={() => {
                    navigate(`/parts/${part.id}/edit`);
                }}>Edit</button> */}
            <Link to={`/parts/${part.id}/edit`}><button className="btn btn-primary">Edit</button></Link>
            <Link to={`/parts/${part.id}`}>
                <button>Details</button>
            </Link>
        </div>
    </div>
)