import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { PartCard } from "./part/PartCard";
import { BuilderCard } from "./builder/BuilderCard";
import { BuildCard } from "./build/BuildCard";

import "./Pcbuilder.css";
import { NavBar } from "./nav/NavBar";

export const Pcbuilder = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
);