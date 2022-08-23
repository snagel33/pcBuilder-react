import React, { useEffect, useState } from "react";
import { getAllBuilders, getBuilderById } from "../../modules/BuilderManager";
import { BuilderCard } from "./BuilderCard";

export const BuilderList = () => {
    
    const [builders, setBuilders] = useState([]);
    
    const getBuilders = () => {
        return getAllBuilders().then(buildersFromAPI => {
            setBuilders(buildersFromAPI)
        });
    }
    
    useEffect(() => {
        getBuilders();
        } , []);
        
    return (
        <div className="container-cards">
            {builders.map(builder => 
                <BuilderCard key={builder.id} builder={builder} />
            )}
        </div>
    );
}