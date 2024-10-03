import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function CartWidget () {
    const contItem = 5;
    return (
       <div>
        <FaShoppingCart size={30}/>
        <span>{contItem}
        </span>
       </div>
    );
}

export default CartWidget