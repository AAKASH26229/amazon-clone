import React from 'react';
import "./RightSide.css";
import Rating from '@mui/material/Rating';


function Product(props) {
    return (
        <div className='product'>
            <div className='Product_image'>
                <img src={props.definition.image} style={{height : "300px"}} />
            </div>
            <div className='Product_name'>
                {props.definition.name}
            </div>
            <div className='Product_rating'>
               {/* <span style={{color:"yellow", fontSize:"25px"}}>&#9733;&#9733;&#9733;&#9733;&#9734;</span>  for rating stars*/}
               <Rating name="read-only" value={4} readOnly />
                 <div>{props.definition.rating}</div> 
            </div>
            <div className='Product_price'>
               <p style={{display: "flex"}}> &#8377;{props.definition.price} <del style={{color : "grey", fontSize: "14px", padding: "6px"}}>&#8377;{props.definition.oprice}</del><div style={{color : "black", fontSize: "14px", padding: "6px"}}>Save &#8377;{props.definition.save}</div></p>
            </div>          
            <div style={{marginTop: "-25px"}}>
                Save extra with No Cost EMI 
            </div> 
            <div>
            <span style={{color:"blue",fontWeight:"bold"}}><span style={{color:"golden",fontWeight:"bold"}}>&#10003;</span>prime</span> <span style={{fontSize:"14px"}}>Get it by </span><span  style={{fontWeight:"bold", fontSize:"14px"}}>{props.definition.prime}</span>
            </div>
            <div style={{color:"darkgreen", fontSize:"15px", marginTop:"2px"}}>
                FREE Delivery by Amazon
            </div>
        </div>
    ); 
}

export default Product;