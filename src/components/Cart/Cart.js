import React, { Component } from 'react';
import Title from "../Title";
import CartCol from "./CartCol";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
    render(){
        return (
            <ProductConsumer>
                {value =>{
                    const {cart} = value;
                    if(cart.length === 0 ){
                        return <EmptyCart />
                    }
                    else{
                        return(
                            <React.Fragment>
                                <Title name="Your" title="cart"/>
                               <CartCol/>
                               <CartList value={value}/>
                               <CartTotal value={value} history={this.props.history}/>
                            </React.Fragment>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
} 