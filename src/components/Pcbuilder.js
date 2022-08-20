import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { PartCard } from "./part/PartCard";
import { BuilderCard } from "./builder/BuilderCard";
import { BuildCard } from "./build/BuildCard";

import "./Pcbuilder.css";

export const Pcbuilder = () => (
    <>
        <h2>PC Builder</h2>
        <small>TEST</small>

        <h2>Components</h2>
        <article className="parts">
            <PartCard />
            <PartCard />
            <PartCard />
        </article>

        <h2>Builders</h2>
        <article className="builders">
            <BuilderCard />
            <BuilderCard />
            <BuilderCard />
        </article>

        <h2>Builds</h2>
        <article className="builds">
            <BuildCard />
            <BuildCard />
            <BuildCard />
        </article>
    </>
);