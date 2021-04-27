import React from 'react'
import {Info, Add} from './layout';
import {useStateValue} from './Navbar/StateProvider'

function Foods({id, image, title, price}) {
    const [{basket}, dispatch] = useStateValue();

    const add = () => {
        dispatch({
            type: 'ADD',
            food: {
                id: id,
                title: title,
                price: price,
                image: image
            },
        });
    };
    return (
        <div style={{ marginBottom: '40px', width: '270px'}}>
            <Add onClick={add}></Add>
            <img style={{height: "140px", width: "250px"}} src={image} alt=""/>
            <h3>{title}</h3>
            <Info></Info>
            <p>${price}</p>
        </div>
    )
}

export default Foods;
