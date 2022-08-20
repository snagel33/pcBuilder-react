import React from "react";
import { Route } from "react-router-dom";

export const ApplicationViews = () => {
    return 
    <>
        <main>
        <Route path="/login">
            <Login />
        </Route>
        </main>
    </>
}