import React from "react";
import "./Builder.css";

export const BuilderCard = ({ builder, handleDeleteBuilder }) => {
    return (
        <div className="card">
            <div className="card-content">
                <picture><img src={builder.img}/></picture>
                <h3><span className="card-username">{builder.username}</span></h3>
                <p>Bio: {builder.bio}</p>
                <button type="button" onClick={() => handleDeleteBuilder(builder.id)}>Delete</button>
            </div>
        </div>
    );
}
