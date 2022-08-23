import React from "react";
import "./Builder.css";

export const BuilderCard = ({ builder }) => {
    return (
        <div className="card">
            <div className="card-content">
                <picture><img src={builder.img}/></picture>
                <h3><span className="card-username">{builder.username}</span></h3>
                <p>Bio: {builder.bio}</p>
            </div>
        </div>
    );
}
