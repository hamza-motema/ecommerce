import React, { Component } from 'react'
import image from './images/image-product-1.jpg'
export default class ImagesSection extends Component {
    render() {
        return (
            <div>
                <img src={image} className="main-image" alt="" />
            </div>
        )
    }
}
