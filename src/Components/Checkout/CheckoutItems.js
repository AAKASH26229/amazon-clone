import React,{ useContext } from 'react';
import "./Checkout.css";
import { CartContext } from '../CartContext';

function CheckoutItems(props) {

    const {item,size,increment,decrement} = useContext(CartContext);
   
   
    // const removefromCart = function() {
    //     decrement(props);
    // }

    return(
        <div>
            <div style={{border:"1px solid #E7E7E7" , width:"95%" ,display:"flex", height:"280px", margin:"25px"}}>
                <div style={{margin:"25px"}}>
                    <img height={"200px"} src={props.definition.image} />
                </div>
                <div style={{marginTop:"20px"}}>
                    <div style={{fontSize:"20px"}} className='textgap'>{props.definition.name}</div>
                    <div style={{fontWeight:"bold"}} className='textgap'>&#8377;{props.definition.price}</div>
                    <div className='textgap'>{props.definition.status}</div>
                    <div className='textgap'>Eligible for FREE Shipping</div>
                    <div className='textgap'><input type='checkbox' />This will be a gift. <span style={{color:"blue"}}>Learn more</span></div>
                    <div className='textgap'>Size name:<span> {props.definition.Sizename}</span></div>
                    <div className='textgap'><span >Colour:</span> {props.definition.Colour}</div>
                    <div className='textgap'><span >Pattern name:</span> {props.definition.ModelName}</div>
                    <div>
                        <button type='reset' style={{background:"#FFD712", color:"Black"} }>Remove from cart</button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutItems;