import React, { useEffect, useState } from "react";
import { getAllParts, getPartById } from "../../modules/PartManager";
import { PartCard } from "./PartCard";

export const PartList = () => {
    const [parts, setParts] = useState([]);

    const getParts = () => {
        return getAllParts().then(partsFromAPI => {
            setParts(partsFromAPI)
        });
    }
    useEffect(() => {
        getParts();
    } , []);
    return (
        <div className="container-cards">
            {parts.map(part => 
                <PartCard key={part.id} part={part} />
            )}
        </div>
    );
}