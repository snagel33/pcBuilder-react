import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllParts, getPartById } from "../../modules/PartManager";
import { PartCard } from "./PartCard";
import './PartList.css';

export const PartList = () => {
    const [parts, setParts] = useState([]);
    const navigate = useNavigate();

    const getParts = () => {
        return getAllParts().then(partsFromAPI => {
            setParts(partsFromAPI)
        });
    }
    useEffect(() => {
        getParts();
    } , []);
    return (
        <>
        <section className="section-content">
            <button type="button"
                className="btn-parts"
                onClick={() => navigate("/parts/create")}>
                Add Part
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