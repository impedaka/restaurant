import React from 'react'
import {Link} from 'react-router-dom';

const Completed = () => {
    return (
        <div>
            completed!
            <Link to="/">
                <button>Done</button>
            </Link>
        </div>
    )
}

export default Completed
