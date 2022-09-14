import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllParts, getPartById } from "../../modules/PartManager";
import { PartCard } from "./PartCard";
import { NavBar } from "../nav/NavBar";
import './PartList.css';

export const PartList = () => {
    const [parts, setParts] = useState([]);
    const navigate = useNavigate();

    // const getParts = () => {
    //     return getAllParts().then(partsFromAPI => {
    //         setParts(partsFromAPI)
    //     });
    // }

    useEffect(() => {
        getAllParts().then(data => setParts(data))
    } , []);

    return (
        <>
        <section className="navBar">
            <NavBar />
        </section>
        <section className="section-content">
            <button type="button"
                className="btn-parts"
                onClick={() => navigate("/parts/create")}>
                Add New Part
            </button>
        </section>
        <div className="container-cards">
            {parts.map(part => 
                <PartCard key={part.id} part={part} />
            )}
        </div>
        </>
    );
}