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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="cpu">CPU: </label>
                    {/* <select
                        className="form-control"
                        id="cpu"
                        value={userBuild.cpu}
                        onChange={handleControlledInputChange}>
                        <option value="">Select CPU</option>
                    </select> */}
                    <select
                        value={part.id}
                        name="cpu"
                        id="cpu"
                        onChange={handleControlledInputChange}>
                        <option value="0">Select CPU</option>
                        {parts.map(part => (
                            <option key={part.id} value={part.id}>{part.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="motherboard">Motherboard: </label>
                    <select
                        className="form-control"
                        id="motherboard"
                        value={userBuild.motherboard}
                        onChange={handleControlledInputChange}>
                        <option value="">
                            Select Motherboard
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="memory">Memory: </label>
                    <select
                        className="form-control"
                        id="memory"
                        value={userBuild.memory}
                        onChange={handleControlledInputChange}>
                        <option value="">
                            Select Memory
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="storage">Storage: </label>
                    <select
                        className="form-control"
                        id="storage"
                        value={userBuild.storage}
                        onChange={handleControlledInputChange}>
                        <option value="">
                            Select Storage
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="gpu">GPU: </label>
                    <select
                        className="form-control"
                        id="gpu"
                        value={userBuild.gpu}
                        onChange={handleControlledInputChange}>
                        <option value="">
                            Select GPU
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="case">Case: </label>
                    <select
                        className="form-control"
                        id="case"
                        value={userBuild.case}
                        onChange={handleControlledInputChange}>
                        <option value="">
                            Select Case
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="psu">PSU: </label>
                    <select
                        className="form-control"
                        id="psu"
                        value={userBuild.psu}
                        onChange={handleControlledInputChange}>
                        <option value="">
                            Select PSU
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="os">Operating System: </label>
                    <select
                        className="form-control"
                        id="os"
                        value={userBuild.os}
                        onChange={handleControlledInputChange}>
                        <option value="">
                            Select OS
                        </option>   
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="monitor">Monitor: </label>
                    <select
                        className="form-control"
                        id="monitor"
                        value={userBuild.monitor}
                        onChange={handleControlledInputChange}>
                        <option value="">
                            Select Monitor
                        </option>
                    </select>
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
