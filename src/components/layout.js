import React, { Component } from 'react'
import ImageSection from './images-section'
import ContentSection from './content-section'
import './css/layout.css';

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <ImageSection />
                </div>
                <div>
                    <ContentSection />
                </div>
            </div>
        )
    }
}
