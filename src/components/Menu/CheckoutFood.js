import React from 'react'
import {} from './layout';
import { useStateValue } from "./Navbar/StateProvider";

function CheckoutFood(id, title, price) {
    return (
        <div>
            <h3>{title}</h3>
            <h3>${price}</h3>
        </div>
    )
}

export default CheckoutFood
