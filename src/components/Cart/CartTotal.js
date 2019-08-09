import React from "react";
import {Link} from "react-router-dom";
import PayPalButton from './PayPalButton';

export default function CartTotal({value, history}){
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 
                    text-right text-capitalize">
                        <Link to="/">
                            <button className="btn btn-outline-danger mb-3" type="button" onClick= {() => value.clearCart()}>
                             CLEAR CART 
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            <strong>Rs {value.cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax (0.5% of subtotal):
                            </span>
                            <strong>Rs {value.cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total :
                            </span>
                            <strong>Rs {value.cartTotal}</strong>
                        </h5>
                        <PayPalButton total={value.cartTotal} clearCart={value.clearCart} 
                        history={history}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}