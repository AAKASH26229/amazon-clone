import React from 'react';
import "./PlaceOrder.css";
import Grid from "@mui/material/Grid";
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';


function PlaceOrder(props) {
    return(
        <div>
            <Grid container>
                <Grid item xs={5}>
                    <img className='placeorder_image' src='https://ik.imagekit.io/amazon26/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533501'/>
                </Grid>
                <Grid item xs={4}>
                    <div className='placeorder_description'>
                        <div style={{fontSize:"24px", lineHeight:"32px", fontWeight:500}}>New Apple iPhone 11 (64GB) - Green</div>
                        <div>
                            <Rating name="read-only" value="4" readOnly style={{fontSize:"20px"}}/>
                            35,798 ratings | 1000+ answred questions
                        </div>
                        <hr></hr>
                        <div>
                            <div className='textgap'><span className='textcolor'>M.R.P:</span> <del style={{color : "grey"}}>&#8377;54,900.00</del></div>
                            <div className='textgap'><span className='textcolor'>Price:</span><span className='pricetag'> &#8377;50,999.00</span></div>
                            <div className='textgap'><span className='textcolor'>You Save:</span> &#8377;3,901(7%)</div>
                            <div className='textgap'>Inclusive of all taxes</div>
                            <div className='textgap'><span style={{color:"blue"}}>FREE delivery:</span><strong> Wednesday , Aug 18</strong></div>
                            <div className='textgap'>EMI Starts at &#8377;2,401. No Cost EMI available</div>
                            <div className='textgap' style={{color:"green",fontSize:"20px",fontWeight:"500"}}>In stock.</div>
                            <div className='textgap'>Sold by <span style={{color:"blue"}}>Darshita Electronics</span> and <span style={{color:"blue"}}>Fullfilled by Amazon.</span></div>
                            <div className='textgap' style={{color:"blue"}}>10-day replacement only</div>
                        </div>
                        <div>    
                            <br></br>
                            <div style={{fontSize:"24px"}} className='textgap'>About this item</div>
                            <div>
                                <div className='textgap'><span className='textcolor'>Size name:</span> <strong>64GB</strong></div>
                                <div className='textgap'><span className='textcolor'>Colour:</span> <strong>Green</strong> </div>
                                <div className='textgap'><span className='textcolor'>Pattern name:</span> <strong>iphone 11</strong></div>
                                <div className='textgap'><span style={{fontWeight:"bold"}}>Model Name: </span>Iphone 11</div>
                                <div className='textgap'><span style={{fontWeight:"bold"}}>Wireless Carrier: </span> Unlocked for All Carriers</div>
                                <div className='textgap'><span style={{fontWeight:"bold"}}>Brand: </span>Apple</div>
                                <ul>
                                    <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
                                    <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
                                    <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
                                    <li>Face ID for secure authentication</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant='outlined' className='placeorder_order'>
                        <button className='placeorder_button addtocart'>Add to Cart</button>
                        <button className='placeorder_button buynow'>Buy Now</button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default PlaceOrder;
