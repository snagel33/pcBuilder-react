import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar_item">
                <Link className="navbar_link" to="/">Home</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/builds">User Builds</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/parts">Parts</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/userBuilds">Build a PC</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/builders">Builders</Link>
            </li>
        </ul>
    );
}