import React, { Component } from 'react'
import Navbar from './navbar'
import Cart from './cart'
import './css/header.css';
import logo from './images/logo.svg'
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="logo" src={logo} alt="Logo of the site" />
                    <Navbar />
                    <Cart />
                </div>
                <hr />
            </div>
        )
    }
}
