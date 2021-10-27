import avatar from './images/image-avatar.png'
import iconCart from './images/icon-cart.svg'
import './css/cart.css'
import React, { Component } from 'react'
import PopupCart from './popupCart.js'


export default class cart extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {

        return (
            <div className="cart">
                <div className="content">
                    <img onClick={this.togglePopup.bind(this)} className="iconCart" src={iconCart} alt="icon close" />
                    <img className="avatar" src={avatar} alt="avatar" />
                </div>
                {this.state.showPopup ?
                    <PopupCart style={{ display: 'flex' }}
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}

