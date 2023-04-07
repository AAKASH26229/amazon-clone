import React from "react";
import "./AdvertismentOne.css";

function AdvertismentOne(props) {
    return (
        <div className="AdvertismentOne_main">

            <div className="AdvertismentOne_header">
                Up to 70% off | Electronics clearance store
            </div>

            <div className="AdvertismentOne_body">
                <img alt="" src="https://ik.imagekit.io/amazon26/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1680608532894"  width={"300px"}/>
            </div>

            <div className="AdvertismentOne_footer">
                See more
            </div>

        </div>
    );
}

export default AdvertismentOne;