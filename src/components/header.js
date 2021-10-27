import React, { Component } from 'react'
import Navbar from './navbar'
import Cart from './cart'
import './css/header.css';
import logo from './images/logo.svg'
import { AiOutlineMenu } from "react-icons/ai";
import ResponsiveMenu from './responsive-menu';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
    }

    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    render() {
        return (
            <div>
                <div className="header">
                    <AiOutlineMenu className="menu" onClick={this.toggleMenu.bind(this)} />
                    <img className="logo" src={logo} alt="Logo of the site" />
                    <Navbar />
                    <Cart />
                </div>
                <hr />
                {this.state.showMenu ?
                    <ResponsiveMenu
                        closePopup={this.toggleMenu.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}
