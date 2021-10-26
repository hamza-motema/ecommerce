import React from 'react';
import './css/popupCart.css';
import thumbnail_image1 from './images/image-product-1-thumbnail.jpg'
import { AiOutlineDelete } from "react-icons/ai";

class popupCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="box-popupcart">
                <div className="header-popupCart">
                    <h1 className="title-popupcart">Cart</h1>
                </div>

                <div className="content-popupcart">
                    <img src={thumbnail_image1} alt="" className="image-popupcart" />
                    <div className="text-popupcart">
                        <p>Fall Limited Edition Sneakers</p>
                        <p>$125.00 x 3<span> $375.00</span></p>
                    </div>
                    <AiOutlineDelete className="delete-popupcart" />
                </div>
                <div>
                    <button className="checkout-popupcart"><p>Chechout</p></button>

                </div>
            </div>
        );
    }
}

export default popupCart;