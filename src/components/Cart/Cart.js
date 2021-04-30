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

    return (
        <div>
            <CartItems cartItems={cartItems}  />
            <CartTotal getCount={getCount} getTotalPrice={getTotalPrice} />
        </div>
    )
}

export default Cart;