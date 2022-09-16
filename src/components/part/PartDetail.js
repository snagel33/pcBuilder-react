import React, { useEffect, useState }from "react";
import { getPartById } from "../../modules/PartManager";
import './PartDetail.css';
import { useParams, useNavigate } from "react-router-dom";
import { NavBar } from "../nav/NavBar";

export const PartDetail = () => {
    const [part, setPart] = useState({ name: "", partTypeId: "", maker: "", img: "", description: "", price: ""});
    
    const {partId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log("useEffect", partId);
        getPartById(partId)
            .then(part => {
                setPart(part);
            });
    } , [partId]);

    return (
        <>
            <section className="navBar">
                <NavBar />
            </section>
            <section className="card">
            <section className="card-content">

                <div className="part_img"><img src={part.img}/></div>
                <h3 className="part_name">{part.name}</h3>
                <div className="part_info">
                    <div className="part_partType">{part.partType_id}</div>
                    <div className="part_maker">Manufacturer: {part.maker}</div>
                    <div className="part_description">Description: {part.description}</div>
                    <div className="part_price">Retail Price: ${part.price}.00</div>
                    {/* <button className="part_addButton">Add to Build</button> */}
                </div>
            </section>
            </section>
        </>
    );
}
