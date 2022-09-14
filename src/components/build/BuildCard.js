import React from "react";
import "./Build.css";

export const BuildCard = ({ build, handleDeleteBuild }) => {
    return (
        <div className="card">
            <div className="card-content">
                <picture><img src={build.img}/></picture>
                <h3><span className="card-comptitle">{build.title}</span></h3>
                <p>Builder: {build.builder}</p>
                <p>CPU: {build.cpu}</p>
                <p>Motherboard: {build.motherboard}</p>
                <p>Memory: {build.memory}</p>
                <p>Storage: {build.storage}</p>
                <p>GPU: {build.gpu}</p>
                <p>Case: {build.case}</p>
                <p>PSU: {build.psu}</p>
                <p>Operating System: {build.os}</p>
                <p>Monitor: {build.monitor}</p>
                <p>Price: ${build.price}.00</p>
                <p>Rating: {build.rating}</p>
                <button type="button" onClick={() => handleDeleteBuild(build.id)}>Delete</button>
            </div>
        </div>
    );
}
