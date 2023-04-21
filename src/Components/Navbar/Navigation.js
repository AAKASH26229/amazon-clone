import React, { Component } from 'react';
import "./Navbar.css";
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    //adding cartcontext in a class component 
    static contextType = CartContext;

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {item,size,incremet,decrement} = this.context;
        return ( 
            <div>
            <div className="navbar_component">
                <Link to="">
                <div className="navbar_logo"></div>
                </Link>
                <div className='navbar_locator'>
                    <div className='navabar_locatorImage'></div>
                    <div className="navbar_location">Bhilai</div>
                </div>
                <div className='navbar_searchcomponent'>
                    <div>
                        <select className='navbar_dropdown'>
                            <option value="All Categories">All</option>
                            <option value="Deals">Deals</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Baby">Baby</option>
                            <option value="Bueaty">Bueaty</option>
                            <option value="Cloths">Cloths</option>
                        </select>
                    </div>
                    <div>
                        <input type='text' className='navbar_searchbox' />
                    </div>
                    <div className='navbar_searchboxdiv'>
                        <div className='navbar_searchicon' />
                    </div>
                </div>

                <div className='navbar_text navbar_signin'>
                    <div style={{fontsize:"14px"}}>Hello, Sign In</div>
                <div style={{fontWeight:"bold"}}>Account & List</div>
                </div>
                <div className='navbar_text navbar_return'>
                    <div style={{fontsize:"14px"}}>Returns</div>
                    <div style={{fontWeight:"bold"}}>& Orders</div>
                </div>

                <Link to="/checkout">
                <div className='navbar_text navbar_cart'>
                    <div src="" className='cart_image' ></div>
                    <div className='cart_item'>{ size }</div>
                    <div className='navbar_text_cart'>Cart</div>
                </div>
                </Link>
            </div>

            <div className='navbar_footer'>
            <div className='navbar_footer_text'>Best Seller</div>
            <Link to="/display">
            <div className='navbar_footer_text' style={{color:"white"}}>Mobile</div>
            </Link>
            <div className='navbar_footer_text'>Amazon Pay</div>
            <div className='navbar_footer_text'>Fashion</div>
            <div className='navbar_footer_text'>Electronics</div>
            <div className='navbar_footer_text'>Price</div>
            <div className='navbar_footer_text'>New Release</div>
            <div className='navbar_footer_text'>Customer Service</div>
            <div className='navbar_footer_text'>Computers</div>
            <div className='navbar_footer_text'>Home & Kitchen</div>

            </div>

            </div>

         );
    }
}
 
export default Navbar;
