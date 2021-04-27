import React from 'react'
import {useStateValue} from "./Navbar/StateProvider"
import CheckoutFood from './CheckoutFood';

function Cart() {
    const [{basket}] = useStateValue();
    return (
        <div style={{color: "white", padding: "100px"}}>
            <style>{'body { background-color: #fa8072; }'}</style>
                    <h4>PENDING ITEMS</h4>
                    {basket?.map((food) => {
                        console.log(food);
                        return(
                        <CheckoutFood
                            key={food.id}
                            title={food.title}
                            price={food.price}
                        />
                        )})}
        </div>
    )
}

export default Cart;