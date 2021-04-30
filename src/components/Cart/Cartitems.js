import React from 'react'
import Cartitem from './Cartitem';
import {Layout} from '../layout';

//rendering items by mapping it
function CartItems({cartItems}) {

    return (
        <>
        <h1 style={{padding: "40px 20px"}}>Your Order</h1>
        <Layout>
            {
                cartItems.map((item) => (
                    <Cartitem
                        item={item.product}
                        id={item.id}

                    />
                ))
            }
        </Layout>
        </>
    )
}

export default CartItems
