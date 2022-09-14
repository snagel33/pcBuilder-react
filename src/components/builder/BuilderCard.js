import React, { useRef } from "react";
import "./Builder.css";

export const BuilderCard = ({ builder }) => {
    const user = useRef();

    return (
        <div className="card">
            <div className="card-content">
                <h3><span className="card-username">{builder.userName}</span></h3>
                <picture><img src={builder.img}/></picture>
                <p>Name: {user.first_name}</p>
                <p>Bio: {builder.bio}</p>
                {/* <button type="button" onClick={() => handleDeleteBuilder(builder.id)}>Delete</button> */}
            </div>
        </div>
    );
}
