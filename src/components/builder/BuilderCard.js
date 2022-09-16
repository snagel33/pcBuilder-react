import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Builder.css";

export const BuilderCard = ({ builder }) => {
    // const user = useRef();

    return (
        <div className="card">
            <div className="card-content">
                <h3><span className="card-username">{builder.userName}</span></h3>
                <picture><img src={builder.img}/></picture>
                <p>Name: {builder.user.first_name} {builder.user.last_name}</p>
                <p>Bio: {builder.bio}</p>
                {/* <button type="button" onClick={() => handleDeleteBuilder(builder.id)}>Delete</button> */}
                <Link to={`/builders/${builder.id}/edit`}><button className="btn btn-primary">Edit</button></Link>
            </div>
        </div>
    );
}
