import React, { Component } from "react";
import minus from './images/icon-minus.svg'
import plus from './images/icon-plus.svg'
import cart from './images/icon-cart.svg'
import PopupCart from './popupCart'

export default class btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            Qty: 12,
            fs: ''
        };
        this.baseState = {
            count: 0,
        };
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.SubmitQty = this.SubmitQty.bind(this);
        this.handleFileRead = this.handleFileRead.bind(this);
    }

    handlePlus() {
        if (this.state.count < this.state.Qty) {
            this.setState({
                count: this.state.count + 1,

            });
        }
    }

    handleMinus() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        }
    }

    handleValueChange(e) {
        const x = Number(e.target.value);
        if (isNaN(x) || x < 1 || x > this.state.Qty) {
        } else {
            this.setState({
                count: x
            });
        }
    }

    handleFileRead = (e) => {
        const content = this.fileReader.result;
        console.log(content);
    };

    SubmitQty(e) {

        localStorage.setItem('myData', this.state.count);

        e.preventDefault();
    }
    render() {
        return (
            <div className="add-cart-content">
                <div className="plus-minus-value">
                    <button className="minus-btn" onClick={this.handleMinus} type="button"><img src={minus} alt="" /></button>
                    <input
                        className="value"
                        type="text"
                        min="0"
                        value={this.state.count}
                        onChange={this.handleValueChange}
                    />
                    <button className="plus-btn" onClick={this.handlePlus} type="button"><img src={plus} alt="" /></button>
                </div>
                <button onClick={this.SubmitQty} className="add-btn" type="button"><img style={{ color: "white", marginLeft: 'auto' }} src={cart} alt="" /> &nbsp; &nbsp;&nbsp;&nbsp; <p className="addToCart">Add to cart</p></button>




            </div>
        )
    }
}
