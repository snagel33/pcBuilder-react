import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addPart, getAllPartTypes, getPartTypes } from "../../modules/PartManager";
import './PartForm.css'

export const PartForm = () => {
    const [part, setPart] = useState({
        name: "",
        partTypeId: "",
        maker: "",
        img: "",
        description: "",
        price: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [partTypes, setPartTypes] = useState([]);
    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        const newPart = { ...part }
        let selectedVal = event.target.value;
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal);
        }
        newPart[event.target.id] = selectedVal;
        setPart(newPart);
    }

    useEffect(() => {
        getAllPartTypes()
            .then(partTypesFromAPI => {
                setPartTypes(partTypesFromAPI)
            }
            );
    } , []);

    const handleClickSavePart = (event) => {
        event.preventDefault()
        const partTypeId = part.partTypeId
        if (partTypeId === 0) {
            window.alert("Please select a part type")
        } else {
            addPart(part)
                .then(() => navigate("/parts"))
        }
    }

    return (
        <form className="partForm">
            <h2 className="partForm__title">New Part</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required className="form-control" placeholder="Part Name" value={part.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="partType">Part Type: </label>
                    {/* <select
                        value={part.partTypeId}
                        name="partTypeId"
                        id="partTypeId"
                        onChange={handleControlledInputChange}
                        className="form-control">
                        <option value="0">Select a part type</option>
                        {partTypes.map(partType => (
                            <option key={partType.id} value={partType.id}>{partType.name}
                            </option>
                        ))}
                    </select> */}
                    <select
                        value={part.partTypeId}
                        name="partTypeId"
                        id="partTypeId"
                        onChange={handleControlledInputChange}
                        className="form-control">
                        <option value="0">Select a part type</option>
                        {partTypes.map(partType => (
                            <option key={partType.id} value={partType.id}>{partType.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="maker">Maker: </label>
                    <input type="text" id="maker" onChange={handleControlledInputChange} required className="form-control" placeholder="Maker" value={part.maker}/>
                </div>
                <div className="form-group">
                    <label htmlFor="img">Image: </label>
                    <input type="text" id="img" onChange={handleControlledInputChange} required className="form-control" placeholder="Image" value={part.img}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" onChange={handleControlledInputChange} required className="form-control" placeholder="Description" value={part.description}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="text" id="price" onChange={handleControlledInputChange} required className="form-control" placeholder="Price" value={part.price}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSavePart}>
                    Save Part
            </button>
        </form>
    );
}
