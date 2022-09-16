import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllParts, getPartById, getPartByPartTypeId, getPartTypes } from "../../modules/PartManager";
import { PartCard } from "./PartCard";
import { NavBar } from "../nav/NavBar";
import './PartList.css';

export const PartList = () => {
    const [parts, setParts] = useState([]);
    const navigate = useNavigate();
    const [ filterPartTypeId, setFilterPartTypeId ] = useState(0);
    const [ partTypes, setPartTypes ] = useState([]);

    // const getParts = () => {
    //     return getAllParts().then(partsFromAPI => {
    //         setParts(partsFromAPI)
    //     });
    // }

    useEffect(() => {
        getAllParts().then(data => setParts(data))
    } , []);

    useEffect(() => {
        getPartTypes().then(data => setPartTypes(data))
    } , []);

    //this will filter parts by partType
    const handleFilter = (id) => {
        if (filterPartTypeId !== 0) {
            getPartByPartTypeId(id).then(data => setParts(data))
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        if (event.target.id === "partType") {
            setFilterPartTypeId(parseInt(value));
        }
    }

    return (
        <>
        <section className="navBar">
            <NavBar />
        </section>
        <section className="section-content">
            <div className="filter">
                <select id="partType" value={filterPartTypeId} onChange={handleChange}>
                    <option value="">Select a Part Type</option>
                    {partTypes.map(partType => <option key={partType.id} value={partType.id}>{partType.label}</option>)}
                </select>
                <button onClick={() => {handleFilter(parseInt(filterPartTypeId))}}>Filter</button>
            </div>
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