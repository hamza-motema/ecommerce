import React, { Component } from 'react'
import './css/content-section.css'
import Btn from './btn'

export default class ContentSection extends Component {
    render() {
        return (
            <div className="contenu">
                <p className="brand">Sneaker Company</p>
                <h1 className="title">Fall Limited Edition Sneakers</h1>
                <p className="texte">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                <div className="reduction-bloc">
                    <p className="price">$125.00</p>
                    <p className="reduction">50%</p>
                </div>

                <p className="base-price">$250.00</p>

                <Btn />

            </div>
        )
    }
}
