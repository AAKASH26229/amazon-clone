import React from "react";
import "./LeftSide.css";

function LeftSide(props) {
    return(
        <div className="LeftSide_main">
            <div className="LeftSide_header">
                Brand
            </div>
            <div className="LeftSide_brandname">
                <label className="brandname">
                    <input type="checkbox" value={"Apple"}/>Apple
                </label>
                <label className="brandname">
                    <input type="checkbox" value={"Samsumg"}/>Samsumg
                </label>
                <label className="brandname">
                    <input type="checkbox" value={"MI"}/>MI
                </label>
                <label className="brandname">
                    <input type="checkbox" value={"Nokia"}/>Nokia
                </label>
                <label className="brandname">
                    <input type="checkbox" value={"Lenevo"}/>Lenevo
                </label>
               
            </div>
        </div>
    );
}

export default LeftSide;