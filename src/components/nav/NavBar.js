import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./PcBuilder.jpeg";
import "./NavBar.css";

export const NavBar = () => {
    const history = useNavigate();
    
    return (
        <ul className="navbar-whole">
            <div className="navbar__brand">
                {/* <a className="navbar_item" href="/">
                    <img src={Logo} />
                </a> */}
            </div>
            <div className="navbar__links">
                <li className="navbar_item">
                    <Link className="navbar_link" to="/">Home</Link>
                </li>
                <li className="navbar_item">
                    <Link className="navbar_link" to="/builds">User Builds</Link>
                </li>
                <li className="navbar_item">
                    <Link className="navbar_link" to="/parts">Parts</Link>
                </li>
                {/* <li className="navbar_item">
                    <Link className="navbar_link" to="/userBuilds">Build a PC</Link>
                </li> */}
                <li className="navbar_item">
                    <Link className="navbar_link" to="/builders">Profile</Link>
                </li>            
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="navbar_item">
                        <button className="navbar_link" onClick={() => {
                            localStorage.removeItem("lu_token");
                            history("/login");
                        }}>Logout</button>
                    </li>
                    :
                    <li className="navbar_item">
                        <button className="navbar_link" onClick={() => {
                            history("/login");
                        }}>Login</button>
                    </li>
            }       
            </div>
        </ul>
    );
}