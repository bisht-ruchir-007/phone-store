import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from "../context";
import {ButtonContainer} from "./Button";
import {Link} from 'react-router-dom';


export default class Modal extends Component {
    render(){
        return (
            <ProductConsumer>
                {(value) =>{
                    const {modelOpen,closeModel} = value;
                    const {img,title,price} = value.modelProduct;
                    if(!modelOpen){
                        return null;
                    }
                    else{
                        return (
                        <ModalContainer >
                            <div className="container">
                                <div className="row">
                                   <div id="modal"className="col-8 mx-auto col-md-6 col-lg-4 
                                   text-center text-capitalize">
                                       <h3>item added to the cart</h3>
                                       <img src={img} alt="phone img" className="img-fluid"></img>
                                       <h4>{title}</h4>
                                       <h5>PRICE : ${price}</h5>
                                       <Link to="/">
                                           <ButtonContainer
                                            onClick={()=>closeModel()}>
                                               Back To Store
                                           </ButtonContainer>
                                       </Link>
                                       <Link to="/mycart">
                                           <ButtonContainer
                                            cart
                                            onClick={()=>closeModel()}>
                                               Go To Cart
                                           </ButtonContainer>
                                       </Link>
                                       </div> 
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }
            }
            </ProductConsumer>
        );
    }
} 
const ModalContainer = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  #modal{
      background: var(--white);
  }  
`;
