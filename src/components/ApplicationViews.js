import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { BuildCard } from "./build/BuildCard.js";
import { BuildList } from "./build/BuildList";
import { BuilderCard } from "./builder/BuilderCard";
import { BuilderList } from "./builder/BuilderList";
import { PartCard } from "./part/PartCard";
import { PartList } from "./part/PartList";

export const ApplicationViews = () => {
    return (
    <>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/builds" element={<BuildList />} />
            <Route path="/builders" element={<BuilderList />} />
            <Route path="/parts" element={<PartList />} />
        </Routes>
    </>
    )
}