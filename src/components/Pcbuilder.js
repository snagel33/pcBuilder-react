import React from "react";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { render } from "react-dom";


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
            </Routes>
        </>
    )
}

export default Pcbuilder;
