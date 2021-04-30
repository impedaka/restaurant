import React, {useState} from 'react'
import {Link} from 'react-router-dom';

const Checkout = () => {
    const [values, setValues] = useState({
        yourName: '',
        phoneNumber: '',
    });

    const handleSubmit = (e) => {

    }

    return (
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setValues(e.target.value)}
          value={values.yourName}
          placeholder="Your name"
        />
        <input
          type="text"
          value={values.phoneNumber}
          placeholder="Phone number"
          onChange={e => setValues(e.target.value)}
        />
        <Link to ="/done">
            <input
                type="submit"
            />
        </Link>
    </form>
    )
}

export default Checkout
