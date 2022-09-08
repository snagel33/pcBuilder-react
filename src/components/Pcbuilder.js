import React from "react";
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
import { UserBuildForm } from "./userBuild/UserBuildForm";
import { UserBuildList } from "./userBuild/UserBuildList";
import { PartForm } from "./part/PartForm";


export const Pcbuilder = () => {
    // <>
    //     <Route render={() => {
    //         if (localStorage.getItem("lu_token")) {
    //             return <>
    //                 <Routes>
    //                     <Route>
    //                         <NavBar />
    //                         <ApplicationViews />
    //                     </Route>
    //                 </Routes>
    //             </>
    //         } else {
    //             return <Navigate to="/login" />
    //         }
    //     }} />

    //     <Routes>
    //         <Route path="/login">
    //             <Login />
    //         </Route>
    //     </Routes>

    //     <Routes>
    //         <Route path="/register">
    //             <Register />
    //         </Route>
    //     </Routes>
        
    // </>
    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {}
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

export default Pcbuilder;
