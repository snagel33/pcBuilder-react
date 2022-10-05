import React, { useEffect, useState } from "react";
import { deleteBuilder, getAllBuilders, getBuilderById } from "../../modules/BuilderManager";
import { BuilderCard } from "./BuilderCard";
import { NavBar } from "../nav/NavBar";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const BuilderList = () => {
    
    const [builders, setBuilders] = useState({});
    const [user, setUser] = useState({});
    
    // const getBuilders = () => {
    //     return getAllBuilders().then(buildersFromAPI => {
    //         setBuilders(buildersFromAPI)
    //     });
    // }

    const userId = parseInt(localStorage.getItem("userId"));
    console.log("userId", userId);
    
    const getBuilder = (userId) => {
        getBuilderById(userId).then(buildersFromAPI => {
            setBuilders(buildersFromAPI)
        });
    }

    useEffect(() => {
        console.log("builders", builders)
    }, [builders]);

    useEffect(() => {
        getBuilder(userId);
    }, []);
    
    const handleDeleteBuilder = (id) => {
        deleteBuilder(id)
            .then(builder => BuilderCard(builder))
    }
    
    if (builders) {
    // return (
    //     <>
    //     <section className="navBar">
    //         <NavBar />
    //     </section>
    //     <div className="builder-container-cards">
    //         {builders.map(builder => 
    //             <BuilderCard 
    //                 key={builder.id} 
    //                 builder={builder} 
    //                 handleDeleteBuilder={handleDeleteBuilder}/>)}
    //     </div>
    //     </>
    // );
    return (
        <>
        <section className="navBar">
            <NavBar />
        </section>
        <div className="card_builder">
            <div className="card-content">
                <h3><span className="card-username">{builders.userName}</span></h3>
                <picture><img src={builders.img}/></picture>
                <p><b>Name: </b>{builders.user?.first_name} {builders.user?.last_name}</p>
                <p><b>Bio: </b>{builders.bio}</p>
                <p><b>Email: </b>{user.email}</p>
                {/* <Link to={`/builders/${builder.id}`}>
                    <button>Details</button>
                </Link> */}
                {/* <button type="button" onClick={() => handleDeleteBuilder(builder.id)}>Delete</button> */}
                <Link to={`/builders/${builders.id}/edit`}><Button className="btn btn-primary">Edit</Button></Link>
            </div>
        </div>
        </>

        // <>
        //     <NavBar />
        //     <Card>
        //         <Card.header>{builders.userName}</Card.header>
        //     </Card>
        // </>
    );
    }
}