// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

// export const CartWidget = () => {
//     return (
//         <div>
//             <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
//                 <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
//                 <span>0</span>
//             </button>

//         </div>
//     )
// }

import React from 'react';
import { BsCart3 } from "react-icons/bs";
const CartWidget = () => {
    return (
        <div className='container'>
            <button>
            <BsCart3 />
            </button>
        </div>
    );
}

export default CartWidget;