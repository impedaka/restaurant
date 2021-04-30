import React from 'react'
import {Link} from 'react-router-dom'
import {Check} from '../layout';

//diaplays total price with props from Cart
function CartTotal({getTotalPrice}) {

        return (
            <>
        <div style={{textAlign: 'left', padding: '40px 20px', }} >
            <h2>Total: ${(getTotalPrice()*1.13).toFixed(2)}</h2>
            <h3 style={{color: 'grey'}}>Tax: ${(getTotalPrice()*0.13).toFixed(2)}</h3>
                <Link to="/checkout"><Check>Checkout</Check></Link>
        </div>
        </>
    )
}

export default CartTotal
