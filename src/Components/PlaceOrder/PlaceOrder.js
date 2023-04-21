import React, { useContext } from 'react';
import "./PlaceOrder.css";
import Grid from "@mui/material/Grid";
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CartContext } from '../CartContext';


function PlaceOrder(props) {


    const {item,size} = useContext(CartContext);
    const [productDetails, setProductDetails] = useState([]);
    // for getting particular id we are using useParam

    let { id } = useParams();

   

        //api call
        // let list =[


        //             {
        //                 "id":2233,
        //                 "name":"",
        //                 "rating":"35,786",
        //                 "review":"1000",
        //                 "price":"50,900",
        //                 "EMI":"2,401",
        //                 "delivery":"Wednesday, Aug 18",
        //                 "status":"In Stock",
        //                 "Sold by":"Darshita Electronics and Fullfilled by Amazon.",
        //                 "image":"https://ik.imagekit.io/amazon26/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533256",
        //                 "oprice":"54,900",
        //                 "save":"3,901(7%)",
        //                 "prime":"Tomorrow, August 16",
        //                 "about":[
        //                 "Size name: 64GB",
        //                 "Colour: Black",
        //                 "Model Name: iPhone 11",
        //                 "Wireless Carrier: Unlocked for All Carriers",
        //                 "Brand: Apple",
        //                 "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
        //                 "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
        //                 "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
        //                 "Face ID for secure authentication"
        //                 ]
        //                 },
        //                 {
        //                     "id":2234,
        //                     "name":"New Apple iPhone XR (128GB) - White",
        //                     "rating":"124",
        //                     "review":"100",
        //                     "price":"47,999",
        //                     "EMI":"2,401",
        //                     "delivery":"Wednesday, Aug 18",
        //                     "status":"In Stock",
        //                     "Sold by":"Darshita Electronics and Fullfilled by Amazon.",
        //                     "image":"https://ik.imagekit.io/amazon26/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533107",
        //                     "oprice":"52,900",
        //                     "save":"4,901(9%)",
        //                     "prime":"Tuesday, August 17",
        //                     "about":[
        //                     "Size name: 128GB",
        //                     "Colour: White",
        //                     "Model Name: iPhone XR",
        //                     "Wireless Carrier: Unlocked for All Carriers",
        //                     "Brand: Apple",
        //                     "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
        //                     "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
        //                     "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
        //                     "Face ID for secure authentication"
        //                     ]
        //                     },
        //                     {
        //                         "id":3311,
        //                         "name":"New Apple iPhone 11 (64GB) - Black",
        //                         "rating":"35,786",
        //                         "review":"1000",
        //                         "price":"50,900",
        //                         "EMI":"2,401",
        //                         "delivery":"Wednesday, Aug 18",
        //                         "status":"In Stock",
        //                         "Sold by":"Darshita Electronics and Fullfilled by Amazon.",
        //                         "image":"https://ik.imagekit.io/amazon26/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533256",
        //                         "oprice":"54,900",
        //                         "save":"3,901(7%)",
        //                         "prime":"Tomorrow, August 16",
        //                         "about":[
        //                         "Size name: 64GB",
        //                         "Colour: Black",
        //                         "Model Name: iPhone 11",
        //                         "Wireless Carrier: Unlocked for All Carriers",
        //                         "Brand: Apple",
        //                         "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
        //                         "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
        //                         "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
        //                         "Face ID for secure authentication"
        //                         ]
        //                         },
        //                         {
        //                             "id":3312,
        //                             "name":"New Apple iPhone XR (128GB) - White",
        //                             "rating":"124",
        //                             "review":"100",
        //                             "price":"47,999",
        //                             "EMI":"2,401",
        //                             "delivery":"Wednesday, Aug 18",
        //                             "status":"In Stock",
        //                             "Sold by":"Darshita Electronics and Fullfilled by Amazon.",
        //                             "image":"https://ik.imagekit.io/amazon26/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533107",
        //                             "oprice":"52,900",
        //                             "save":"4,901(9%)",
        //                             "prime":"Tuesday, August 17",
        //                             "about":[
        //                             "Size name: 128GB",
        //                             "Colour: White",
        //                             "Model Name: iPhone XR",
        //                             "Wireless Carrier: Unlocked for All Carriers",
        //                             "Brand: Apple",
        //                             "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
        //                             "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
        //                             "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
        //                             "Face ID for secure authentication"
        //                             ]
        //                             }
        // ]

        useEffect(() => {



        let list = [

            {
                id: "1133", name: "New Apple iPhone 11 (64GB) - Green", rating: "35,946", review: "1000", price: "50,900", EMI: "2,401",
                delivery: "Wednesday, Aug 18",
                status: "In Stock",
                Soldby: "Darshita Electronics and Fullfilled by Amazon.",
                image: "https://ik.imagekit.io/amazon26/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533501",
                oprice: "54,900",
                save: "3,901(7%)",
                prime: "Tomorrow, August 16",
                Sizename: "64GB",
                Colour: "Green",
                ModelName: "iPhone 11",
                WirelessCarrier: "Unlocked for All Carriers",
                Brand: "Apple",
            },

            {
                id: "1134", name: "New Apple iPhone 12 (128GB) - Blue", rating: "5,786", price: "79,000", review: "1000",
                EMI: "2,401",
                delivery: "Wednesday, Aug 18",
                status: "In Stock",
                Soldby: "Darshita Electronics and Fullfilled by Amazon.",
                image: "https://ik.imagekit.io/amazon26/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608537496",
                oprice: "84,900",
                save: "5,900(7%)",
                prime: "Wednesday, August 18",
                Sizename: "128GB",
                Colour: "Blue",
                ModelName: "iPhone 12",
                WirelessCarrier: "Unlocked for All Carriers",
                Brand: "Apple"
            },

            {
                id: "2233", name: "New Apple iPhone 11 (64GB) - Black", rating: "35,786", price: "50,900", review: "1000",
                EMI: "2,401",
                delivery: "Wednesday, Aug 18",
                status: "In Stock",
                Soldby: "Darshita Electronics and Fullfilled by Amazon.",
                image: "https://ik.imagekit.io/amazon26/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533256",
                oprice: "54,900",
                save: "3,901(7%)",
                prime: "Wednesday, August 18",
                Sizename: "64GB",
                Colour: "Black",
                ModelName: "iPhone 11",
                WirelessCarrier: "Unlocked for All Carriers",
                Brand: "Apple"
            },

            {
                id: "2234", name: "New Apple iPhone XR (128GB) - White", rating: "124", price: "47,999", review: "100",

                EMI: "2,401",
                delivery: "Wednesday, Aug 18",
                status: "In Stock",
                Soldby: "Darshita Electronics and Fullfilled by Amazon.",
                image: "https://ik.imagekit.io/amazon26/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533107",
                oprice: "52,900",
                save: "4,901(9%)",
                prime: "Tuesday, August 17",
                Sizename: "128GB",
                Colour: "White",
                ModelName: "iPhone XR",
                WirelessCarrier: "Unlocked for All Carriers",
                Brand: "Apple"
            },

            {
                id: "3344", name: "New Apple iPhone 11 (64GB) - Black", rating: "35,786", price: "50,900", review: "1000",
                EMI: "2,401",
                delivery: "Wednesday, Aug 18",
                status: "In Stock",
                Soldby: "Darshita Electronics and Fullfilled by Amazon.",
                image: "https://ik.imagekit.io/amazon26/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533256",
                oprice: "54,900",
                save: "3,901(7%)",
                prime: "Wednesday, August 18",
                Sizename: "64GB",
                Colour: "Black",
                ModelName: "iPhone 11",
                WirelessCarrier: "Unlocked for All Carriers",
                Brand: "Apple"
            },

            {
                id: "3345", name: "New Apple iPhone XR (128GB) - White", rating: "124", price: "47,999", review: "100",
                EMI: "2,401",
                delivery: "Wednesday, Aug 18",
                status: "In Stock",
                Soldby: "Darshita Electronics and Fullfilled by Amazon.",
                image: "https://ik.imagekit.io/amazon26/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533107",
                oprice: "52,900",
                save: "4,901(9%)",
                prime: "Tuesday, August 17",
                Sizename: "128GB",
                Colour: "White",
                ModelName: "iPhone XR",
                WirelessCarrier: "Unlocked for All Carriers",
                Brand: "Apple"
            }
        ]
        //fake API
        let item = list.filter(item => {
            if (item.id === (id))
                return item;
        })

        console.log(item);
        setProductDetails(item[0]);

    }, []);


    return (
        <div>
            <Grid container>
                <Grid item xs={5}>
                    <img className='placeorder_image' src={productDetails?.image} />
                </Grid>
                <Grid item xs={4}>
                    <div className='placeorder_description'>
                        <div style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}> {productDetails?.name} </div>
                        <div>
                            <Rating name="read-only" value="4" readOnly style={{ fontSize: "20px" }} />
                            {productDetails?.rating} | {productDetails?.review}+ answered questions
                        </div>
                        <hr></hr>
                        <div>
                            <div className='textgap'><span className='textcolor'>M.R.P:</span> <del style={{ color: "grey" }}>&#8377;{productDetails?.oprice}</del></div>
                            <div className='textgap'><span className='textcolor'>Price:</span><span className='pricetag'> &#8377;{productDetails?.price}</span></div>
                            <div className='textgap'><span className='textcolor'>You Save:</span> &#8377;{productDetails?.save}</div>
                            <div className='textgap'>Inclusive of all taxes</div>
                            <div className='textgap'><span style={{ color: "blue" }}>FREE delivery:</span><strong> {productDetails?.delivery}</strong></div>
                            <div className='textgap'>EMI Starts at &#8377;{productDetails?.EMI}. No Cost EMI available</div>
                            <div className='textgap' style={{ color: "green", fontSize: "20px", fontWeight: "500" }}>{productDetails?.status}.</div>
                            <div className='textgap'>Sold by <span style={{ color: "blue" }}>{productDetails?.Soldby}</span></div>
                            <div className='textgap' style={{ color: "blue" }}>10-day replacement only</div>
                        </div>
                        <div>
                            <br></br>
                            <div style={{ fontSize: "24px" }} className='textgap'>About this item</div>
                            <div>
                                <div className='textgap'><span className='textcolor'>Size name:</span> <strong>{productDetails?.Sizename}</strong></div>
                                <div className='textgap'><span className='textcolor'>Colour:</span> <strong>{productDetails?.Colour}</strong> </div>
                                <div className='textgap'><span className='textcolor'>Pattern name:</span> <strong>{productDetails?.ModelName}</strong></div>
                                <div className='textgap'><span style={{ fontWeight: "bold" }}>Wireless Carrier: </span>{productDetails?.WirelessCarrier}</div>
                                <div className='textgap'><span style={{ fontWeight: "bold" }}>Brand: </span>{productDetails?.Brand}</div>
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
                        <div>
                            <div>
                                <div style={{ fontWeight: "bold", marginTop: "20px", marginLeft: "30px" }}>Without Exchange</div>
                                <div style={{ marginLeft: "30px" }}>&#8377;{productDetails.price}</div>
                                <div style={{ fontWeight: "bold", marginTop: "20px", marginLeft: "30px" }}>Add an Accessory</div>
                                <div style={{ marginLeft: "30px" }}><input type='checkbox' />Apple Airpods</div>
                                <div style={{ marginLeft: "30px" }}><input type='checkbox' />Apple 20W USB Power Adapter</div>
                            </div>
                            <div>
                                <Link to={"/checkout"}>
                                    <button style={{ marginTop: "20px", marginLeft: "20px" }} className='placeorder_button addtocart'>Add to Cart</button>
                                </Link>
                                <button style={{ marginTop: "10px", marginLeft: "20px" }} className='placeorder_button buynow'>Buy Now</button>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default PlaceOrder;
