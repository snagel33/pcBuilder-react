import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { BuildCard } from "./build/BuildCard.js";
import { BuildList } from "./build/BuildList";
import { BuilderCard } from "./builder/BuilderCard";
import { BuilderList } from "./builder/BuilderList";
import { PartCard } from "./part/PartCard";
import { PartDetail } from "./part/PartDetail";
import { PartList } from "./part/PartList";
import { UserBuildForm } from "./userBuild/UserBuildForm";
import { UserBuildList } from "./userBuild/UserBuildList";
import { PartForm } from "./part/PartForm";

export const ApplicationViews = () => {
    return (
    <>
        <Routes>
            <Route exact path="/" element={<Home />} />
            {}
            <Route path="/builds" element={<BuildList />} />
            {}
            <Route path="/builders" element={<BuilderList />} />
            {}
            <Route exact path="/parts" element={<PartList />} />
            <Route path="/parts/:partId" element={<PartDetail />} />
            <Route path="/parts/create" element={<PartForm />} />
            {}
            <Route path="/userBuilds" element={<UserBuildList />} />
            <Route path="/userBuilds/create" element={<UserBuildForm />} />
        </Routes>
    </>
    )
}