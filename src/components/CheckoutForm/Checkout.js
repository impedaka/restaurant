import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {Icon, Check} from '../layout';

const Checkout = () => {
    const [values, setValues] = useState({
        yourName: '',
        phoneNumber: '',
    });

    const handleSubmit = (e) => {
//work in progress
    }

    return (
        <div style={{display: 'grid', placeItems: 'center', }}>
        <Icon>
            <img style={{maxWidth: '20%'}} src="https://i.pinimg.com/originals/9a/17/8f/9a178fcf8a37a2c317c5c8febf01dc40.jpg" alt="messageicon"/>
        </Icon>
        <h1 style={{position: 'relative', top: '-25px'}}>Get Notified</h1>
        <p style={{position: 'relative', top: '-25px'}}>Enter your name and phone number and we'll text</p>
        <p style={{position: 'relative', top: '-25px'}}>you when your order is ready!</p>
        <form onSubmit={handleSubmit}>
        <input
        style={{padding: '8px', width: '100%', paddingBottom: '15px',}}
          type="text"
          onChange={e => setValues(e.target.value)}
          value={values.yourName}
          placeholder="Your name"
        />
        <input
        style={{padding: '8px', width: '100%', paddingBottom: '15px',}}
          type="text"
          value={values.phoneNumber}
          placeholder="Phone number"
          onChange={e => setValues(e.target.value)}
        />
        <Link to ="/done">
            <Check>
                Submit
            </Check>
        </Link>
    </form>
    </div>
    )
}

export default Checkout
