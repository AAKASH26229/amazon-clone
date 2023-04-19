import React from 'react';
import "./Checkout.css";

function CheckoutItems(props) {
    return(
        <div>
            <div style={{border:"1px solid #E7E7E7" , width:"95%" ,display:"flex", height:"250px", margin:"25px"}}>
                <div style={{margin:"25px"}}>
                    <img height={"200px"} src='https://ik.imagekit.io/amazon26/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533501' />
                </div>
                <div style={{marginTop:"20px"}}>
                    <div style={{fontSize:"20px"}} className='textgap'>New Apple iPhone 11 (64GB) - Green</div>
                    <div style={{fontWeight:"bold"}} className='textgap'>&#8377;50,999</div>
                    <div className='textgap'>In Stock</div>
                    <div className='textgap'>Eligible for FREE Shipping</div>
                    <div className='textgap'><input type='checkbox' />This will be a gift. <span style={{color:"blue"}}>Learn more</span></div>
                    <div className='textgap'>Size name:<span> 64GB</span></div>
                    <div className='textgap'><span >Colour:</span> Green</div>
                    <div className='textgap'><span >Pattern name:</span> iPhone 11</div>
                    
                </div>
            </div>
        </div>
    );
}

export default CheckoutItems;