import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBuild } from '../../modules/BuildManager';
import { getAllParts, getPartByPartTypeId } from '../../modules/PartManager';
import './BuildForm.css'
import { PartCard } from '../part/PartCard';
import { NavBar } from '../nav/NavBar';

export const BuildForm = () => {
    const [build, setBuild] = useState({
        title: "",
        // cpuId: 0,
        // motherboardId: 0,
        // memoryId: 0,
        // storageId: 0,
        // gpuId: 0,
        // caseId: 0,
        // psuId: 0,
        // osId: 0,
        // monitorId: 0,
        img: "",
        price: 0,
        rating: 0,
        parts: []
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [parts, setParts] = useState([]);
    const [part, setPart] = useState([]);

    const handleControlledInputChange= (event) => {
        const newBuild = { ...build };
        let selectedVal = event.target.value;
        if (event.target.id.split("_")[1] === "Id") {
            selectedVal = parseInt(selectedVal);
            newBuild["parts"].push(selectedVal);
            setBuild(newBuild);
        } else {
            newBuild[event.target.id] = selectedVal;
            setBuild(newBuild);
        }
    }
    
    // useEffect(() => {
    //     getPartByPartTypeId()
    //         .then(partsFromAPI => {
    //             setParts(partsFromAPI)
    //         }
    //         );
    // } , []);

    useEffect(() => {
        getAllParts()
            .then(partsFromAPI => {
                setParts(partsFromAPI)
            }
            );
    } , []);


    const handleClickSaveUserBuild = (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log("build", build)
        addBuild(build)
            .then(() => {
                navigate("/builds")
            }).catch(() => {
                alert("Error: Could not add user build");
            }).finally(() => {
                setIsLoading(false);
            }
            );
    }
    return (
        <>
        <section className="navBar">
            <NavBar />
        </section>
        <form className='userBuildForm'>
            <h2 className='userBuildForm__title'>Create a New Computer Build</h2>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='title'>Build Title: </label>
                    <input type='text' id='title' onChange={handleControlledInputChange} required autoFocus className='form-control' placeholder='Build Title' value={build.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="cpu">CPU: </label>
                    <select
                        value={build.cpu}
                        name="cpu"
                        id="cpu_Id"
                        onChange={handleControlledInputChange}>
                        <option value="">Select CPU</option>
                        {parts.map(part => (
                            <option key={part.id} value={part.id}>{part.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="motherboard">Motherboard: </label>
                    <select
                        value={build.motherboard}
                        name="motherboard"
                        id="motherboard_Id"
                        onChange={handleControlledInputChange}>
                        <option value="">Select Motherboard</option>
                        {parts.map(part => (
                            <option key={part.id} value={part.id}>{part.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="memory">Memory: </label>
                    <select
                        value={build.memory}
                        name="memory"
                        id="memory_Id"
                        onChange={handleControlledInputChange}>
                        <option value="">Select Memory</option>
                        {parts.map(part => (
                            <option key={part.id} value={part.id}>{part.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="storage">Storage: </label>
                    <select
                        value={build.storage}
                        name="storage"
                        id="storage_Id"
                        onChange={handleControlledInputChange}>
                        <option value="">Select Storage</option>
                        {parts.map(part => (
                            <option key={part.id} value={part.id}>{part.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="gpu">GPU: </label>
                    <select
                        value={build.gpu}
                        name="gpu"
                        id="gpu_Id"
                        onChange={handleControlledInputChange}>
                        <option value="">Select GPU</option>
                        {parts.map(part => (    
                            <option key={part.id} value={part.id}>{part.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="case">Case: </label>
                    <select
                        value={build.case}
                        name="case"
                        id="case_Id"
                        onChange={handleControlledInputChange}>
                        <option value="">Select Case</option>
                        {parts.map(part => (
                            <option key={part.id} value={part.id}>{part.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="psu">PSU: </label>
                    <select
                        value={build.psu}
                        name="psu"
                        id="psu_Id"
                        onChange={handleControlledInputChange}>
                        <option value="">Select PSU</option>
                        {parts.map(part => (
                            <option key={part.id} value={part.id}>{part.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="os">Operating System: </label>
                    <select
                        value={build.os}
                        name="os"
                        id="os_Id"
                        onChange={handleControlledInputChange}>
                        <option value="">Select OS</option>
                        {parts.map(part => (
                            <option key={part.id} value={part.id}>{part.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="monitor">Monitor: </label>
                    <select
                        value={build.monitor}
                        name="monitor"
                        id="monitor_Id"
                        onChange={handleControlledInputChange}>
                        <option value="">Select Monitor</option>
                        {parts.map(part => (
                            <option key={part.id} value={part.id}>{part.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="img">Image Link: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="img"
                        value={build.img}
                        onChange={handleControlledInputChange}
                    />
                </div>
                <button className="btn-saveUserBuild"
                        onClick={handleClickSaveUserBuild}>
                        Save Computer Build
                </button>
            </fieldset>
        </form>
        </>
    );
}
