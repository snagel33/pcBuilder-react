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
            <section className="part">
                <div className="part_img"><img src={part.img}/></div>
                <h3 className="part_name">{part.name}</h3>
                <div className="part_partType">{part.partType_id}</div>
                <div className="part_maker">{part.maker}</div>
                <div className="part_description">{part.description}</div>
                <div className="part_price">${part.price}.00</div>
                {/* <button className="part_addButton">Add to Build</button> */}
            </section>
        </>
    );
}
