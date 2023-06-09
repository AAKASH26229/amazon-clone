import React, { Component, createContext } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    constructor(props) {
        super(props);

        //checking the value at the local storage if there is some value we define that if not then undefine
        let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem
            ('myCart')) : [];

        let cartAmount = existingCart.length;


        this.state = {
            item: existingCart,
            size: cartAmount,
            increment: (value) => {
                let itemList = this.state.item;
                itemList.push(value);

                this.setState({ item: itemList });
                this.setState({ size: this.state.item.length });

                this.state.saveToLocalCache();
            },
            // decrement: (value) => {
            //     let itemList = this.state.item;
            //     itemList.pop(value);

            //     this.setState({ item: itemList });
            //     this.setState({ size: this.state.item.length});

            //     this.state.saveToLocalCache();
            // },

            saveToLocalCache: () => {
                localStorage.setItem('myCart', JSON.stringify(this.state.item));
            },
            
        }
    }
    render() {
        return (

            <CartContext.Provider value={{ ...this.state, ...this.increment, ...this.decrement }} >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartContextProvider;