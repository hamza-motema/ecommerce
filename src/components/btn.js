import React, { useState } from "react";
import minus from './images/icon-minus.svg'
import plus from './images/icon-plus.svg'
import cart from './images/icon-cart.svg'

function Qbutton(props) {
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);

    const Qty = 12;

    function handlePlus() {
        if (count < Qty) {
            setCount(count + 1);
            setError(null);
        } else {
            setError("No stock");
        }
    }

    function handleMinus() {
        if (count > 0) {
            setCount(count - 1);
            setError(null);
        } else {
            setError("No items in Cart");
        }
    }

    function handleValueChange(e) {
        const x = Number(e.target.value);
        if (isNaN(x) || x < 1 || x > Qty) {
            setError(
                "Input not valid"
            );
        } else {
            setCount(x);
            setError("Qty updated");
        }
    }

    function SubmitQty(e) {
        setError("Items Added to Cart");
        setCount(0);
        e.preventDefault();
    }

    return (
        <div className="add-cart-content">
            <div className="plus-minus-value">
                <button className="minus-btn" onClick={handleMinus} type="button"><img src={minus} alt="" /></button>
                <input
                    className="value"
                    type="text"
                    min="0"
                    value={count}
                    onClick={() => setCount(0)}
                    onChange={handleValueChange}
                />
                <button className="plus-btn" onClick={handlePlus} type="button"><img src={plus} alt="" /></button>
            </div>

            <button onClick={SubmitQty} className="add-btn" type="button"><img style={{ color: "white", marginLeft: 'auto' }} src={cart} alt="" /> &nbsp; &nbsp;&nbsp;&nbsp; <p className="addToCart">Add to cart</p></button>
        </div>
    );
}

export default Qbutton;