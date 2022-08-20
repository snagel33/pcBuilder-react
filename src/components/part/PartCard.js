import React from "react";
import "./Part.css";

export const PartCard = (props) => (
    <section className="part">
        <h3 className="part_name">AMD 3200</h3>
        <div className="part_type">CPU</div>
        <div className="part_maker">AMD</div>
        <div className="part_img">IMAGE</div>
        <div className="part_description">TEXT</div>
        <div className="part_price">$200.00</div>
    </section>
)