import React from 'react'
import {} from './layout';
import { useStateValue } from "./Navbar/StateProvider";

function CheckoutFood(id, title, price) {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <>
            <h3>{title}</h3>
            <h3>${price}</h3>
        </>
    )
}

export default CheckoutFood
