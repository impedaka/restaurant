import React from 'react'
import {useStateValue} from "./Navbar/StateProvider"
import CheckoutFood from './CheckoutFood';

function Cart() {
    const [{basket}] = useStateValue();
    return (
        <div style={{color: "white", padding: "100px", backgroundColor: "#fa8072"}}>
            {basket?.length === 0? (
                <h1>You have no orders, start adding some!</h1>
            ) : ( <div>
                    <h4>PENDING ITEMS</h4>
                    {basket?.map(food => (
                        <CheckoutFood
                            key={food.id}
                            title={food.title}
                            price={food.price}
                        />
                    ))}
                    </div>        
        )}
        </div>
    );
}

export default Cart;