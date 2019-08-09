import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer,NavWrapper } from './Button'; 
//import styled from "styled-components";

export default class Navbar extends Component {
    render(){
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="Store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">PRODUCTS</Link>
                    </li>
                </ul>
                <Link to="/mycart" className="ml-auto">
                    <ButtonContainer>
                        MY CART
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
} 