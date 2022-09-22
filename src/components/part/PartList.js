import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllParts, getPartById, getPartByPartTypeId, getPartTypes } from "../../modules/PartManager";
import { PartCard } from "./PartCard";
import { NavBar } from "../nav/NavBar";
import './PartList.css';
import { Button, Card, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

export const PartList = () => {
    const [parts, setParts] = useState([]);
    const navigate = useNavigate();
    const [ reset, setReset ] = useState(false);
    const [ filterPartTypeId, setFilterPartTypeId ] = useState(0);
    const [ partTypes, setPartTypes ] = useState([]);
    const [ partType, setPartType ] = useState({});

    // const getParts = () => {
    //     return getAllParts().then(partsFromAPI => {
    //         setParts(partsFromAPI)
    //     });
    // }

    const loadParts = () => {
        getAllParts().then(data => setParts(data))
    }

    useEffect(() => {
        loadParts();
    }, [reset]);

    useEffect(() => {
        getAllParts().then(data => setParts(data))
    } , []);

    useEffect(() => {
        getPartTypes().then(data => setPartTypes(data))
    } , []);

    // this will filter parts by partType
    const handleFilter = (id) => {
        getPartByPartTypeId(id).then(data => setParts(data))
        console.log(id)
    }

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        if (event.target.id === "partType") {
            setFilterPartTypeId(parseInt(value));
            console.log("partType", value);
        }
    }

    const [sortedParts, setSortedParts] = useState([]);

    useEffect(() => {
        const tempParts = parts.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1);
        setSortedParts(tempParts);
    }, [parts]);

    // this will populate the filtered view with the parts that match the partType
    const filteredParts = parts.filter(part => part.partType_id === filterPartTypeId);

    const cpuParts = sortedParts.filter(part => part.partType_id === 1);
    const motherboardParts = sortedParts.filter(part => part.partType_id === 2);

    return (
        <>
        <section className="navBar">
            <NavBar />
        </section>
        <section className="section-content">
            {/* <fieldset className="partFilter"> */}
                <div className="formgrid">
                    <label htmlFor="partType">Filter by Part Type: </label>
                    <select name="partType" id="partType" className="form_input" onChange={handleChange}>
                        <option value="">Select a Part Type</option>
                        {partTypes.map(partType => <option key={partType.id} value={partType.id}>{partType.label}</option>)}
                    </select>
                </div>
            {/* </fieldset> */}
            <Button type="button"
                className="btn-parts"
                onClick={() => navigate("/parts/create")}>
                Add New Part
            </Button>
        </section>
        <section className="filtered_view">
            <div className="parts">
                {filteredParts.map(part => <PartCard key={part.id} part={part} setReset={setReset} />)}
            </div>
        </section>
        <section className="all_parts">
            <div className="parts">
                {parts.map(part => <PartCard key={part.id} part={part} />)}
            </div>
        </section>
        </>
    );
}