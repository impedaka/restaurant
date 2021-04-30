import React from 'react'
import {Link} from 'react-router-dom';
import {Check} from '../layout'

const Completed = () => {
    return (
        <>
        <div style={{display: 'grid', placeItems: 'center'}}>
            <img src='https://media.tenor.com/images/cbae2dfd31aa5ec2fcb7f46b65e1550f/tenor.gif' alt="checkmark" width="250"/>
            <h1>Order Completed</h1>
            <p>You'll receive a notification when your order</p>
            <p>is ready for pick up.</p>
        </div>
        <Link style={{display: 'grid', placeItems: 'center'}} to="/">
                <Check >Done</Check>
            </Link>
        </>
    )
}

export default Completed
