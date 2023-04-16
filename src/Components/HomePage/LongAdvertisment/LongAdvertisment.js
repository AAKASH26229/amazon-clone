import React from "react";
import "./LongAdvertisment.css";

function LongAdvertisment(props)
{
    return(
        <div>
        <div className="LongAdvertisment_main">
           <div className="LongAdvertisment_head">
            Today's Deal 
           </div> 
            <div className="LongAdvertisment_body">
                <img src="https://ik.imagekit.io/amazon26/amazon-image/box3_4.jpg?updatedAt=1680608521959"  style={{width : "320px"}}/>
                <img src="https://ik.imagekit.io/amazon26/amazon-image/box3_4.jpg?updatedAt=1680608521959" style={{width : "320px"}}/>
                <img src="https://ik.imagekit.io/amazon26/amazon-image/box3_4.jpg?updatedAt=1680608521959" style={{width : "320px"}}/>
                <img src="https://ik.imagekit.io/amazon26/amazon-image/box3_4.jpg?updatedAt=1680608521959" style={{width : "320px"}}/>
            </div>
            <div className="LongAdvertisment_footermain">
            <p className="LongAdvertisment_footer">&#8377;11,490.00 - &#8377;23,000.00</p>
            <p className="LongAdvertisment_footer">&#8377;11,490.00 - &#8377;23,000.00</p>
            <p className="LongAdvertisment_footer">&#8377;11,490.00 - &#8377;23,000.00</p>
            <p className="LongAdvertisment_footer">&#8377;11,490.00 - &#8377;23,000.00</p>
            </div>
            
            
        </div>
        </div>
    );
}

export default LongAdvertisment;