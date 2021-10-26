import React, { Component } from "react";

import image1 from './images/image-product-1.jpg'
import image2 from './images/image-product-2.jpg'
import image3 from './images/image-product-3.jpg'
import image4 from './images/image-product-4.jpg'
import './css/images-section.css';
import thumbnail_image1 from './images/image-product-1-thumbnail.jpg'
import thumbnail_image2 from './images/image-product-2-thumbnail.jpg'
import thumbnail_image3 from './images/image-product-3-thumbnail.jpg'
import thumbnail_image4 from './images/image-product-4-thumbnail.jpg'

import Popup from './popup';
const data = [
    {
        id: "1",
        key: "1",
    },
    {
        id: "2",
        key: "2",
    },
    {
        id: "3",
        key: "3",
    },
    {
        id: "4",
        key: "4",
    }
];

const array = [
    thumbnail_image1, thumbnail_image2, thumbnail_image3, thumbnail_image4
]
const images = [
    image1, image2, image3, image4
]

export default class ImagesSection extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false, toggle: 0 };

    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {


        return (
            <div id="cards">
                <div className="cards">

                    <div className="card" id="card_1">
                        <div className="card__content">
                            <figure>


                                <>
                                    <img onClick={this.togglePopup.bind(this)} src={images[this.state.toggle]} alt="" className="photo" />
                                </>

                            </figure>
                        </div>

                    </div>


                    <div className="miniature">
                        {data.map(({ key }) => {
                            return (
                                <>
                                    <img onClick={() => this.setState({ toggle: key - 1 })} src={array[key - 1]} className="main-image" alt="" key={key} />
                                </>
                            );
                        })}</div>

                </div>

                {this.state.showPopup ?
                    <Popup
                        text='Click "Close Button" to hide popup'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}



