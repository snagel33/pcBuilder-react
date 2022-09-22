import React, { useEffect, useState, useNavigate } from "react";
import { useParams } from "react-router-dom";
import { getAllBuilds } from "../../modules/BuildManager";
import "./Build.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { PartList } from "../part/PartList";
import { Container, ListGroup, Row, Col } from "react-bootstrap";

export const BuildCard = ({ build, handleDeleteBuild }) => {
    // const [thisBuild, setThisBuild] = useState({});
    const [cpu, setCpu] = useState({});
    const [motherboard, setMotherboard] = useState({});
    const [memory, setMemory] = useState({});
    const [storage, setStorage] = useState({});
    const [gpu, setGpu] = useState({});
    const [pcCase, setPcCase] = useState({});
    const [psu, setPsu] = useState({});
    const [opSys, setOpSys] = useState({});
    const [monitor, setMonitor] = useState({});

    useEffect(() => {
        console.log(build)
    }, [build])

    useEffect(() => {
        // console.log(build)
        (build.parts).map(b => {
            if (b.partType.id === 1) {
                // console.log("resultCPU", b)
                setCpu(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 2) {
                // console.log("resultMB", b)
                setMotherboard(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 3) {
                // console.log("resultMemory", b)
                setMemory(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 4) {
                // console.log("resultStorage", b)
                setStorage(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 5) {
                // console.log("resultGPU", b)
                setGpu(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 6) {
                // console.log("resultCase", b)
                setPcCase(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 7) {
                // console.log("resultPSU", b)
                setPsu(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 8) {
                // console.log("resultOS", b)
                setOpSys(b)
            }
        })
    }, [])

    useEffect(() => {
        build.parts.map(b => {
            if (b.partType.id === 9) {
                // console.log("resultMonitor", b)
                setMonitor(b)
            }
        })
    }, [])

    // this will add the price of parts in the build to the total price
    const totalPrice = cpu.price + motherboard.price + memory.price + storage.price + gpu.price + pcCase.price + psu.price + opSys.price + monitor.price
    
    // const { buildId } = useParams();
    // const [ build, setBuild ] = useState({});

    // useEffect(() => {
    //     getAllBuilds()
    // }, [])

    // const partList = build.parts?.map(part => {
    //     <div className="part">
    //         <div className="card-content">
    //                 <picture><img src={build.img}/></picture>
    //                 <h3><span className="card-comptitle">{build.title}</span></h3>
    //                 <p><b>Builder: </b>{build.builder_id}</p>
    //                 <p><b>CPU: </b>{cpu.name}</p>
    //                 <p><b>Motherboard: </b>{motherboard.name}</p>
    //                 <p><b>Memory: </b>{memory.name}</p>
    //                 <p><b>Storage: </b>{storage.name}</p>
    //                 <p><b>GPU: </b>{gpu.name}</p>
    //                 <p><b>Case: </b>{pcCase.name}</p>
    //                 <p><b>PSU: </b>{psu.name}</p>
    //                 <p><b>Operating System: </b>{opSys.name}</p>
    //                 <p><b>Monitor: </b>{monitor.name}</p>
    //                 <p><b>Price: </b>${totalPrice}.00</p>
    //                 <p>Rating: {build.rating}</p>
    //                 <button type="button" onClick={() => handleDeleteBuild(build.id)}>Delete</button>
    //             </div>
    //         </div>
    // })

    if (cpu) {

    // return (
    //     <>
    //         <div className="card">
    //             {/* {partList} */}
    //             <div className="card-content">
    //                 <picture><img src={build.img}/></picture>
    //                 <h3><span className="card-comptitle">{build.title}</span></h3>
    //                 <p><b>Builder: </b>{build.builder_id}</p>
    //                 <p><b>CPU: </b>{cpu.name}</p>
    //                 <p><b>Motherboard: </b>{motherboard.name}</p>
    //                 <p><b>Memory: </b>{memory.name}</p>
    //                 <p><b>Storage: </b>{storage.name}</p>
    //                 <p><b>GPU: </b>{gpu.name}</p>
    //                 <p><b>Case: </b>{pcCase.name}</p>
    //                 <p><b>PSU: </b>{psu.name}</p>
    //                 <p><b>Operating System: </b>{opSys.name}</p>
    //                 <p><b>Monitor: </b>{monitor.name}</p>
    //                 <p><b>Price: </b>${totalPrice}.00</p>
    //                 {/* <p>Rating: {build.rating}</p> */}
    //                 <button type="button" onClick={() => handleDeleteBuild(build.id)}>Delete</button>
    //             </div>
    //         </div>
    //     </>
    // );

    return (
        <>
        <div className="buildCard">
            <Container className="buildContainer">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={build.img} style={{ height: '15rem' }}/>
                    <Card.Body>
                        <Card.Title>{build.title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><b>CPU: </b>{cpu.name}</ListGroup.Item>
                        <ListGroup.Item><b>Motherboard: </b>{motherboard.name}</ListGroup.Item>
                        <ListGroup.Item><b>Memory: </b>{memory.name}</ListGroup.Item>
                        <ListGroup.Item><b>Storage: </b>{storage.name}</ListGroup.Item>
                        <ListGroup.Item><b>GPU: </b>{gpu.name}</ListGroup.Item>
                        <ListGroup.Item><b>Case: </b>{pcCase.name}</ListGroup.Item>
                        <ListGroup.Item><b>PSU: </b>{psu.name}</ListGroup.Item>
                        <ListGroup.Item><b>Operating System: </b>{opSys.name}</ListGroup.Item>
                        <ListGroup.Item><b>Monitor: </b>{monitor.name}</ListGroup.Item>
                        <ListGroup.Item><b>Price: </b>${totalPrice}.00</ListGroup.Item>
                    </ListGroup>
                        <Button variant="primary" onClick={() => handleDeleteBuild(build.id)}>Delete</Button>
                </Card>
            </Container>
        </div>
        </>
    ); 
    }
}
