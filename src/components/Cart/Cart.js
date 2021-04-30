import React from 'react'
import CartItems from './Cartitems';
import CartTotal from './CartTotal';
import {} from '../layout';

function Cart({ cartItems }) {
    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item)=>{
            total += (item.product.price * item.product.quantity)
        })
        return total;
    }

    const getCount = () => {
        let count = 0;
        // Loop through all cart items
        cartItems.forEach((item) => {
            // add the quantity of the cart item to total
            count += item.product.quantity;
        })

        return count;
    }
//if cart is empty, display empty cart message, else, display cart items
    return (
        <>
        <div>
            <CartItems cartItems={cartItems}  />
            {getTotalPrice() === 0 ? (
                <div style={{padding: '0px 20px', position: 'relative', top: '-100px'}}>
                <h3>You have no order :( </h3>
                <p>Please go back to order something!</p>
                </div>) : (
                <>
                <CartTotal cartItems={cartItems} getCount={getCount} getTotalPrice={getTotalPrice} />
                </>
                )}
                </div>
        </>
    )
}

export default Cart;