// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"


import React from 'react';
import { ImCart } from "react-icons/im";
export const CartWidget = () => {
    return (
        <div className='container'>
            <button>
            <ImCart />
            </button>
        </div>
    );
}

export default CartWidget;
