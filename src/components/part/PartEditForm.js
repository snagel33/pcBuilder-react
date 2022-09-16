import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPartById, getPartTypes, updatePart } from "../../modules/PartManager";
import { NavBar } from "../nav/NavBar";


export const PartEditForm = () => {
    const history = useNavigate();
    const [partTypes, setPartTypes] = useState([]);
    const { partId } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    const [part, setPart] = useState({
        partTypeId: 0,
        maker: "",
        name: "",
        img: "",
        description: "",
        price: 0,
    });

    const handleFieldChange = (event) => {
        const stateToChange = { ...part };
        stateToChange[event.target.id] = event.target.value;
        setPart(stateToChange);
    }

    const updateExistingPart = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedPart = {
            id: parseInt(partId),
            partType: parseInt(part.partTypeId),
            maker: part.maker,
            name: part.name,
            img: part.img,
            description: part.description,
            price: parseInt(part.price),
        };

    updatePart(editedPart)
        .then(() => history("/parts"))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getPartById(partId)
            .then(part => {
                setPart(part);
                setIsLoading(false);
            }
        );
    }, []);

    useEffect(() => {
        getPartTypes()
            .then(partTypes => setPartTypes(partTypes))
    }, []);

    return (
        <>
            <section className="navBar">
                <NavBar />
            </section>
            <form>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="partTypeId">Part Type: </label>
                        <select name="partTypeId" id="partTypeId" value={part.partTypeId} onChange={handleFieldChange}>
                            <option value="0">{part.partTypeId}</option>
                            {partTypes.map((partType) => (
                                <option key={partType.id} value={partType.id}>
                                    {partType.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="maker">Maker: </label>
                        <input type="text" id="maker" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Maker" value={part.maker} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Name" value={part.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="img">Image: </label>
                        <input type="text" id="img" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Image" value={part.img} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description: </label>
                        <input type="text" id="description" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Description" value={part.description} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price: </label>
                        <input type="text" id="price" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Price" value={part.price} />
                    </div>
                    <div className="alignRight">
                        <button type="button" disabled={isLoading} onClick={updateExistingPart} className="btn btn-primary">Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

