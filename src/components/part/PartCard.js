import React from "react";
import "./Part.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePart } from "../../modules/PartManager";
import { NavBar } from "../nav/NavBar";



export const PartCard = ({ part }) => {
    const history = useNavigate();
    const {partId} = useParams();

    const delPart = (id) => {
        deletePart(id)
            .then(() => history("/parts"))
    }        

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <div className="part-image">
                        <picture><img src={part.img}/></picture>
                    </div>
                    <div className="part-text">
                        {/* <h3>{part.partTypeId}</h3> */}
                        <h3><span className="card-partname">{part.name}</span></h3>
                        <p><b>Component Type:</b> {part.partType_id}</p>
                        <p><b>Manufacturer:</b> {part.maker}</p>
                        <p><b>Description:</b> {part.description}</p>
                        <p><b>Price:</b> ${part.price}.00</p>
                    <div className="part-button">
                        <button type="button" 
                            onClick={() => {delPart(part.id)
                            window.location.reload(false)
                            }}>Delete</button>
                        <Link to={`/parts/${part.id}/edit`}><button className="btn btn-primary">Edit</button></Link>
                        <Link to={`/parts/${part.id}`}><button>Details</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}