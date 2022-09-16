import React, { useEffect, useState } from "react";
import "./Build.css";

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

    // useEffect(() => {
    //     console.log(build)
    // }, [])

    // useEffect(() => {
    //     (build.parts).map(b => {
    //         if (build.id === (b.id)) {
    //             console.log("result", b)
    //             setThisBuild(b)
    //         }
    //     })
    // }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 1) {
                console.log("resultCPU", b)
                setCpu(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 2) {
                console.log("resultMB", b)
                setMotherboard(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 3) {
                console.log("resultMemory", b)
                setMemory(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 4) {
                console.log("resultStorage", b)
                setStorage(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 5) {
                console.log("resultGPU", b)
                setGpu(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 6) {
                console.log("resultCase", b)
                setPcCase(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 7) {
                console.log("resultPSU", b)
                setPsu(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 8) {
                console.log("resultOS", b)
                setOpSys(b)
            }
        })
    }, [])

    useEffect(() => {
        (build.parts).map(b => {
            if (b.partType.id === 9) {
                console.log("resultMonitor", b)
                setMonitor(b)
            }
        })
    }, [])
                

    if (cpu) {

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <picture><img src={build.img}/></picture>
                    <h3><span className="card-comptitle">{build.title}</span></h3>
                    <p>Builder: {build.builder_id}</p>
                    <p>CPU: {cpu.name}</p>
                    <p>Motherboard: {motherboard.name}</p>
                    <p>Memory: {memory.name}</p>
                    <p>Storage: {storage.name}</p>
                    <p>GPU: {gpu.name}</p>
                    <p>Case: {pcCase.name}</p>
                    <p>PSU: {psu.name}</p>
                    <p>Operating System: {opSys.name}</p>
                    <p>Monitor: {monitor.name}</p>
                    <p>Price: ${build.price}.00</p>
                    <p>Rating: {build.rating}</p>
                    <button type="button" onClick={() => handleDeleteBuild(build.id)}>Delete</button>
                </div>
            </div>
        </>
    );
    }
}
