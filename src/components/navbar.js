import React, { Component } from 'react'
import './css/navbar.css';


export default class navbar extends Component {
    render() {
        return (
            <div className="navbar">

                <ul>
                    <li className="navbar-item"><a href="#Collections">Collections</a></li>
                    <li className="navbar-item"><a href="#Men">Men</a></li>
                    <li className="navbar-item"><a href="#Women">Women</a></li>
                    <li className="navbar-item"><a href="#About">About</a></li>
                    <li className="navbar-item"><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        )
    }
}
