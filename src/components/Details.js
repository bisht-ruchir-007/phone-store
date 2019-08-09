import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
    render(){
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-white text-center text-uppercase my-5">
                                <h1><strong>{title}</strong></h1>
                                </div>
                                <div className=" mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} alt="phone image" className="img-fluid"/>
                                </div>
                                <div className=" mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase mt-3 mb-2">made By : {company}</h4>  
                                    <h4 className="text-white"><strong>price : <span> Rs </span>{price}</strong></h4>
                                    <p className="text-capitalized font-weight-bold mt-3 mb-0">
                                        some info about product : 
                                        <p className="text-justify lead">
                                            {info}
                                        </p>
                                    </p>
                                    <div className="">
                                        <Link to="/">
                                        <ButtonContainer>Back To 
                                        Products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                        cart
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModel(id);
                                        }}
                                        >   
                                         {inCart?"Show in Cart":"Add To Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
} 