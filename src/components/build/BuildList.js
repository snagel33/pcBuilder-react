import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteBuild, getAllBuilds, getBuildById } from "../../modules/BuildManager";
import { NavBar } from "../nav/NavBar";
import { BuildCard } from "./BuildCard";

export const BuildList = () => {

    const [builds, setBuilds] = useState([]);
    const navigate = useNavigate();

    // const getBuilds = () => {
    //     return getAllBuilds().then(buildsFromAPI => {
    //         setBuilds(buildsFromAPI)
    //     });
    // }

    useEffect(() => {
        getAllBuilds().then(data => setBuilds(data));
        } , []);

    const handleDeleteBuild = (id) => {
        deleteBuild(id)
            .then(() => getAllBuilds().then(setBuilds))
    }

    return (
        <>
        <section className="navBar">
            <NavBar />
        </section>
        <section className="section-content">
            <button type="button"
                className="btn-builds"
                onClick={() => navigate("/builds/create")}>
                Create New Build
            </button>
        </section>
        <div className="container-cards">
            {builds.map(build => 
                <BuildCard 
                    key={build.id} 
                    build={build} 
                    handleDeleteBuild={handleDeleteBuild}/>)}
        </div>
        </>
    );
}