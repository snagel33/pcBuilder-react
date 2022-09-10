import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addPart, createPart, getPartTypes } from "../../modules/PartManager";
import { getAllPartTypes } from "../../modules/PartTypeManager";
import './PartForm.css'

export const PartForm = () => {
    const history = useNavigate();
    const [partTypes, setPartTypes] = useState([]);

    const [currentPart, setCurrentPart] = useState({
        partTypeId: 0,
        maker: "",
        name: "",
        img: "",
        description: "",
        price: 0,
    });

    useEffect(() => {
        getPartTypes().then(setPartTypes);
    }, []);

    const changePartState = (event) => {
        const newPartState = { ...currentPart };
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newPartState[event.target.id] = selectedVal
        setCurrentPart(newPartState);
    };

    return (
        <form className="partForm">
            <h2 className="partForm__title">Create New Part</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="partTypeId">Part Type: </label>
                    <select name="partTypeId" id="partTypeId" value={currentPart.partTypeId} onChange={changePartState}>
                        <option value="0">Select a Part Type</option>
                        {partTypes.map((partType) => (
                            <option key={partType.id} value={partType.id}>
                                {partType.label}
                            </option>
                        ))}
                    </select>
                </div>


                <div className="form-group">
                    <label htmlFor="maker">Maker: </label>
                    <input type="text" id="maker" onChange={changePartState} required autoFocus className="form-control" placeholder="Maker" value={currentPart.maker} />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={changePartState} required autoFocus className="form-control" placeholder="Name" value={currentPart.name} />
                </div>

                <div className="form-group">
                    <label htmlFor="img">Image: </label>
                    <input type="text" id="img" onChange={changePartState} required autoFocus className="form-control" placeholder="Image" value={currentPart.img} />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" onChange={changePartState} required autoFocus className="form-control" placeholder="Description" value={currentPart.description} />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="text" id="price" onChange={changePartState} required autoFocus className="form-control" placeholder="Price" value={currentPart.price} />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const part = {
                        partTypeId: parseInt(currentPart.partTypeId),
                        maker: currentPart.maker,
                        name: currentPart.name,
                        img: currentPart.img,
                        description: currentPart.description,
                        price: parseInt(currentPart.price),
                    };

                    createPart(part)
                        .then(() => history("/parts"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    );
}