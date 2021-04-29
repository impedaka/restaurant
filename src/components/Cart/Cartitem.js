import React from 'react'
import {Info, Delete, Quantity} from '../Menu/layout';
import {db} from '../../firebase';

//allows user to delete items from db
function Cartitem({id, item}) {
    const deleteItem = (e) => {
        e.preventDefault()
        db.collection('CartItems').doc(id).delete();
    }


    let options = []

    for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
        options.push(<option value={i}> Qty: {i}</option>)
    }
//allows user to change quantity from db
    const changeQuantity = (newQuantity) => {
        db.collection('CartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }
//template for all food components, since they all have the same formating
    return (
        <div style={{ marginBottom: '40px', width: '270px'}}>
        <img style={{height: "140px", width: "250px"}} src={item.image} alt=""/>
        <h3>{item.title}</h3>
        <Info/>
        <p>${item.price}</p>
        <Quantity>
        <select value={item.quantity} onChange={(e) => changeQuantity(e.target.value)}>
            {options}
        </select>
        </Quantity>
        <Delete onClick={deleteItem}/>
        </div>
    )
}

export default Cartitem
