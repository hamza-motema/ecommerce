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
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


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
        this.state = {
            showPopup: false,
            toggle: 0,
            matches: window.matchMedia("(min-width: 600px)").matches,

        };
        this.previousPopup = this.previousPopup.bind(this);
        this.nextPopup = this.nextPopup.bind(this);
    }

    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(min-width: 600px)").addEventListener('change', handler);
    }

    togglePopup() {
        if (this.state.matches) {
            this.setState({
                showPopup: !this.state.showPopup
            });
        }
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
            <div className="card__content">
                {!this.state.matches && (<div id="IP" className="iconPrevious"><AiOutlineLeft onClick={this.previousPopup} className="outline" /></div>)}
                <img onClick={this.togglePopup.bind(this)} src={images[this.state.toggle]} alt="" />
                {!this.state.matches && (<div id="IN" className="iconNext"><AiOutlineRight onClick={this.nextPopup} className="outline" /></div>)}
                <div className="miniature">
                    {data.map(({ key }) => {
                        return (
                            <>
                                <img onClick={() => this.setState({ toggle: key - 1 })} src={array[key - 1]} className="main-image" alt="" key={key} />
                            </>
                        );
                    })}
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



