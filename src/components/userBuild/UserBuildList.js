import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const UserBuildList = () => {
    const [userBuilds, setUserBuilds] = useState([]);
    const navigate = useNavigate();

    return (
        <>
        <section className="section-content">
            <button type="button"
                className="btn-userBuilds"
                onClick={() => {navigate("/userBuilds/create")}}>
                Create New Computer Build
            </button>
        </section>
        </>
    );
}