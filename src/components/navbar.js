import React, { Component } from 'react'
import './css/navbar.css';

export default class navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a className="logo" href="#">sneakers</a></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>
            </div>
        )
    }
}
