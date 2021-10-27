import React from 'react';
import './css/popupCart.css';
import thumbnail_image1 from './images/image-product-1-thumbnail.jpg'
import { AiOutlineDelete } from "react-icons/ai";

class popupCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myVar: localStorage.getItem('myData')
        };
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem() {
        console.log("eef");
        localStorage.setItem('myData', 0);
    }

    render() {

        const price = this.state.myVar * 125;
        return (
            <div className="box-popupcart">
                <div className="header-popupCart">
                    <h1 className="title-popupcart">Cart</h1>
                </div>
                <div style={this.state.myVar === '0' ? { display: 'none' } : {}} className="content-popupcart">
                    <img src={thumbnail_image1} alt="" className="image-popupcart" />
                    <div className="text-popupcart">
                        <p>Fall Limited Edition Sneakers</p>
                        <p>$125.00 x {this.state.myVar}<span> ${price}</span></p>
                    </div>
                    <AiOutlineDelete className="delete-popupcart" onClick={this.removeItem.bind(this)} />
                </div>
                <div style={this.state.myVar === '0' ? { display: 'none' } : {}}>
                    <button className="checkout-popupcart"><p>Chechout</p></button>
                </div>
                <div style={this.state.myVar != '0' ? { display: 'none' } : {}}>
                    <p>Your cart is empty</p>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default popupCart;