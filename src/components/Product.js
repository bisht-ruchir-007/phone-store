import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types'

export default class Product extends Component {
    render(){
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value)=> (
                            <div className="img-container p-5" 
                            onClick={()=>value.handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top"/>
                            </Link>
                            <button className="btn btn-info" 
                            disabled={inCart ? true : false} 
                            onClick={()=>{
                                value.addToCart(id);  
                                value.openModel(id);
                                }}
                            >
                            { inCart? (
                                <p className="text-capitalize mb-0" disabled>
                                 in incart
                                 </p>
                                ):
                                (
                                    <p className="text-capitalize mb-0" disabled>
                                    add to cart
                                    </p>
                                )
                            }
                            </button>
                            </div>
                        )}
            
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="font-italic mb-0"><span className="mr-1">Rs {price}</span></h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
} 

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all .5s linear;
}
 .card-footer{
     background:transparent;
     border-top:transparent;
     transition:all .5s linear;
 }
 &:hover{
     .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,1,0.9);
     }
     .card-footer{
         background:rgba(247,243,20);
     }
 }
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all .5s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.3);
}
.btn{
  position: absolute;
  bottom:0;
  right:0;+
  padding: 0.3rem .4rem;
  font-size:1.2rem;
  border:none;
  border-radius: 0.5 0 0 0;
  transform:translate(100%,100%);
  transition:all .5s linear;
}
.img-container:hover .btn{
    transform:translate(0,0);
}
.btn:hover{
    cursor:pointer;
}
`; 