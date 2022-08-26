import React, { useEffect, useState } from "react";
import { deleteBuild, getAllBuilds, getBuildById } from "../../modules/BuildManager";
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

    const handleDeleteBuild = (id) => {
        deleteBuild(id)
            .then(() => getAllBuilds().then(setBuilds))
    }

    return (
        <div className="container-cards">
            {builds.map(build => 
                <BuildCard 
                    key={build.id} 
                    build={build} 
                    handleDeleteBuild={handleDeleteBuild}/>)}
        </div>
    );
}