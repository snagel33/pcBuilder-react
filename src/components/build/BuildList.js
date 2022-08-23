import React, { useEffect, useState } from "react";
import { getAllBuilds, getBuildById } from "../../modules/BuildManager";
import { BuildCard } from "./BuildCard";

export const BuildList = () => {

    const [builds, setBuilds] = useState([]);

    const getBuilds = () => {
        return getAllBuilds().then(buildsFromAPI => {
            setBuilds(buildsFromAPI)
        });
    }

    useEffect(() => {
        getBuilds();
        } , []);

    return (
        <div className="container-cards">
            {builds.map(build => 
                <BuildCard key={build.id} build={build} />
            )}
        </div>
    );
}