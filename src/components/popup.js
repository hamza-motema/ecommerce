import React from 'react';
import './style.css';

import image1 from './images/image-product-1.jpg'
import image2 from './images/image-product-2.jpg'
import image3 from './images/image-product-3.jpg'
import image4 from './images/image-product-4.jpg'

import thumbnail_image1 from './images/image-product-1-thumbnail.jpg'
import thumbnail_image2 from './images/image-product-2-thumbnail.jpg'
import thumbnail_image3 from './images/image-product-3-thumbnail.jpg'
import thumbnail_image4 from './images/image-product-4-thumbnail.jpg'
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const array = [
    thumbnail_image1, thumbnail_image2, thumbnail_image3, thumbnail_image4
]
const images = [
    image1, image2, image3, image4
]



class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: 0 };
        this.previousPopup = this.previousPopup.bind(this);
        this.nextPopup = this.nextPopup.bind(this);
    }

    previousPopup() {
        if (this.state.toggle > 0) {
            this.setState({
                toggle: this.state.toggle - 1
            });
        }
    }

    nextPopup() {
        if (this.state.toggle < 4) {
            this.setState({
                toggle: this.state.toggle + 1
            });
        }
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div>
                        <AiOutlineClose onClick={this.props.closePopup} className="close" />

                    </div>

                    <div className="popupContent">
                        <div className="iconPrevious"><AiOutlineLeft onClick={this.previousPopup} className="outline" /></div>
                        <img src={images[this.state.toggle]} alt="" className="image" />
                        <div className="iconNext"><AiOutlineRight onClick={this.nextPopup} className="outline" /></div>
                    </div>
                    <div className="popup-miniature">
                        <img src={array[0]} alt="" className="" />
                        <img src={array[1]} alt="" className="" />
                        <img src={array[2]} alt="" className="" />
                        <img src={array[3]} alt="" className="" />
                    </div>


                </div>
            </div>
        );
    }
}

export default Popup;