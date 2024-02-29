// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"


import React from 'react';
import { ImCart } from "react-icons/im";
export const CartWidget = () => {
    return (
        <div className='container'>
            <button className="bg-sky-700 text-white px-4 py-2 rounded flex items-center">
                <ImCart />
                <span>0</span>
                </button>
        </div>
    );
}

export default CartWidget;
