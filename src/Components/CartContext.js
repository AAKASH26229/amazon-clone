import React, { Component, createContext } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            item: [],
            size: 0,

         }
    }
    render() {
        return (

           <CartContext.Provider value= {{ ...this.state }} >
                {this.props.children}
           </CartContext.Provider>
        ); 
    }
}

export default CartContextProvider;