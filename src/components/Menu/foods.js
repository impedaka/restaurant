import React from 'react'
import {Info, Add} from './layout';
import { db } from '../../firebase'

function Foods({title, price, image, id}) {
    const addToCart = () => {
        console.log(id);
        const cartItem = db.collection("CartItems").doc(id);
        cartItem.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                //to make sure that there isnt the same thing rendered to cart, instead we add +1 to quantity
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {

                db.collection("CartItems").doc(id).set({
                    title: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }
    return (
        <div style={{ marginBottom: '40px', width: '270px'}}>
            <Add onClick={addToCart}/>
            <img style={{height: "140px", width: "250px"}} src={image} alt=""/>
            <h3>{title}</h3>
            <Info/>
            <p>${price}</p>
        </div>
    )
}

export default Foods;
