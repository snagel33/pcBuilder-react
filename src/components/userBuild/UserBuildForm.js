import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUserBuild } from '../../modules/UserBuildManager';
import { getAllParts, getPartByPartTypeId } from '../../modules/PartManager';
import './UserBuildForm.css'
import { PartCard } from '../part/PartCard';

export const UserBuildForm = () => {
    const [userBuild, setUserBuild] = useState({
        cpu: "",
        motherboard: "",
        memory: "",
        storage: "",
        gpu: "",
        case: "",
        psu: "",
        os: "",
        monitor: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [parts, setParts] = useState([]);
    const [part, setPart] = useState([]);

    const handleControlledInputChange= (event) => {
        const newUserBuild = { ...userBuild };
        let selectedVal = event.target.value;
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal);
        }
        newUserBuild[event.target.id] = selectedVal;
        setUserBuild(newUserBuild);
    }
    
    useEffect(() => {
        getPartByPartTypeId()
            .then(partsFromAPI => {
                setParts(partsFromAPI)
            }
            );
    } , []);

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
        addUserBuild(userBuild)
            .then(() => {
                navigate("/userBuilds")
            }).catch(() => {
                alert("Error: Could not add user build");
            }).finally(() => {
                setIsLoading(false);
            }
            );
    }
    return (
        <>
        <form className='userBuildForm'>
            <h2 className='userBuildForm__title'>Create a New Computer Build</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="cpu">CPU: </label>
                    <select
                        value={userBuild.cpu}
                        name="cpu"
                        id="cpu"
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
                        value={userBuild.motherboard}
                        name="motherboard"
                        id="motherboard"
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
                        value={userBuild.memory}
                        name="memory"
                        id="memory"
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
                        value={userBuild.storage}
                        name="storage"
                        id="storage"
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
                        value={userBuild.gpu}
                        name="gpu"
                        id="gpu"
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
                        value={userBuild.case}
                        name="case"
                        id="case"
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
                        value={userBuild.psu}
                        name="psu"
                        id="psu"
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
                        value={userBuild.os}
                        name="os"
                        id="os"
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
                        value={userBuild.monitor}
                        name="monitor"
                        id="monitor"
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
                        value={userBuild.img}
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
