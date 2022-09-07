import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { BuildList } from "./build/BuildList";
import { BuilderList } from "./builder/BuilderList";
import { PartDetail } from "./part/PartDetail";
import { PartList } from "./part/PartList";
import { UserBuildForm } from "./userBuild/UserBuildForm";
import { UserBuildList } from "./userBuild/UserBuildList";
import { PartForm } from "./part/PartForm";
import { render } from "react-dom";

export const ApplicationViews = () => {
    return (
        <>
            {/* <Routes>
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
            </Routes> */}
        </>
    )
}

export default ApplicationViews;