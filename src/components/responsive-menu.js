import React, { Component } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import './css/navbar.css'
export default class responsiveMenu extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="resp-menu-content">
                        <div id="resp-menu-menu" className="resp-menu-nav">
                            <AiOutlineClose onClick={this.props.closePopup} className="close" />
                            <a href="qsd">Home</a>
                            <a href="qsd">About</a>
                            <a href="sq">Services</a>
                            <a href="qs">Portfolio</a>
                            <a href="sd">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
