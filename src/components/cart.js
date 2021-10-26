import avatar from './images/image-avatar.png'
import iconCart from './images/icon-cart.svg'
import './css/cart.css'
import React, { Component } from 'react'

export default class cart extends Component {
    handleEvent = event => {
        alert("I was clicked");
    };
    render() {

        return (
            <div className="cart">
                <div className="content">
                    <img onClick={this.handleEvent} className="iconCart" src={iconCart} alt="icon close" />
                    <img className="avatar" src={avatar} alt="avatar" />
                </div>
            </div>
        )
    }
}

