import React, { useEffect, useState } from "react";
import "./RightSide.css";
import Product from "./Product";

function RightSide(props) {

    const [listOfProduct,setListOfProducts] = useState([]);

    useEffect(()=>{
        //api call
        let list =[
            { name :  "New Apple iphone 11 (64GB) - Green", rating:"35,946", price:"50,900",image:"https://ik.imagekit.io/amazon26/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533501", oprice:"54,900", save:"3,901(7%)"},
            { name :  "New Apple iphone 12 (128GB) - Blue", rating:"5,786", price:"79,000",image:"https://ik.imagekit.io/amazon26/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608537496", oprice:"84,900", save:"5,900(7%)"},
            { name :  "New Apple iphone 11 (64GB) - Black", rating:"35,786", price:"50,900",image:"https://ik.imagekit.io/amazon26/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533256", oprice:"54,900", save:"3,901(7%)"},
            { name :  "New Apple iphone XR (128GB) - White", rating:"124", price:"47,999",image:"https://ik.imagekit.io/amazon26/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533107", oprice:"52,900", save:"4,901(9%)"}
        
        ]

        setListOfProducts(list);

    },[]);


    return(
        <div className="rightSide_main">
            {/* <Product rating="35,786" price="50,999" name="New Apple iphone 11 (64GB) - Black" image="https://ik.imagekit.io/amazon26/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1680608533256" oprice="54,900" save="3,901(7%)"/>
            <Product rating="" price="" name="" image="" oprice="" save=""/>
            <Product rating="" price="" name="" image="" oprice="" save=""/>
            <Product rating="" price="" name="" image="" oprice="" save=""/>
            <Product rating="" price="" name="" image="" oprice="" save=""/>
            <Product rating="" price="" name="" image="" oprice="" save=""/> */}

            {
                
                listOfProduct.map ( (item) =>(
                    <Product definition={item} />
                ))
            }


        </div>
    );
}

export default RightSide;

