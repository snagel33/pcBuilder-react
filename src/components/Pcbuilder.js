import React, { useState } from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { render } from "react-dom";
import { Home } from "../Home";
import { BuildList } from "./build/BuildList";
import { BuilderList } from "./builder/BuilderList";
import { PartDetail } from "./part/PartDetail";
import { PartList } from "./part/PartList";
import { UserBuildList } from "./userBuild/UserBuildList";
import { PartForm } from "./part/PartForm";
import { PartEditForm } from "./part/PartEditForm";
import { BuildForm } from "./build/BuildForm";
import { BuilderEditForm } from "./builder/BuilderEditForm";
import { PrivateRoutes } from "./auth/PrivateRoute";

export const Pcbuilder = () => {
    const [ token, setTokenState ] = useState(localStorage.getItem("token"));

    const setToken = (newToken) => {
        localStorage.setItem("token", newToken);
        setTokenState(newToken);
    }

    const setUserId = (userId) => {
        localStorage.setItem("userId", userId);
    }

    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login token={token} setToken={setToken} setUserId={setUserId}/>} />
                <Route path="/register" element={<Register token={token} setToken={setToken}/>} />
                {}
                <Route element={<PrivateRoutes token={token}/>}>
                    <Route exact path="/" element={<Home />} />
                    {}
                    <Route path="/builds" element={<BuildList />} />
                    <Route path="/builds/create" element={<BuildForm />} />
                    {}
                    <Route path="/builders" element={<BuilderList />} />
                    <Route path="/builders/:builderId/edit" element={<BuilderEditForm />} />
                    {}
                    <Route exact path="/parts" element={<PartList />} />
                    <Route path="/parts/:partId" element={<PartDetail />} />
                    <Route exact path="/parts/create" element={<PartForm />} />
                    <Route path="/parts/:partId/edit" element={<PartEditForm />} />
                    {}
                    {/* <Route path="/userBuilds" element={<UserBuildList />} /> */}
                    {/* <Route path="/userBuilds/create" element={<UserBuildForm />} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default Pcbuilder;
