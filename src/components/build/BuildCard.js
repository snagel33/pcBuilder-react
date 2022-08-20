import React from "react";
import "./Build.css";

export const BuildCard = (props) => (
    <section className="build">
        <h3 className="build_title">TEST Build Name</h3>
        <div className="build_builder">I'm_Steve</div>
        <div className="build_cpu">AMD 3200</div>
        <div className="build_motherboard">ASUS XXX</div>
        <div className="build_memory">Corsair 32GB DDR4</div>
        <div className="build_storage">Seagate 1TB</div>
        <div className="build_gpu">Nvidia RTX 3080 TI</div>
        <div className="build_case">TEST CASE</div>
        <div className="build_psu">Corsair RM850</div>
        <div className="build_os">Microsoft Windows 10</div>
        <div className="build_monitor">Samsung Odyssey G9</div>
        <div className="build_price">$2000.00</div>
        <div className="build_rating">4.5</div>
    </section>
)