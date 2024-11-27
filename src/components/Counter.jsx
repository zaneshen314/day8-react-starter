import React, { useState } from 'react';

const Counter = (props) => {
    const [status,setStatus]  = useState(0);
    const increment  = () => {
        setStatus(status+1);
    };
    const decrement  = () => {
        setStatus(status-1)
    }
    return (
        <div className="counter">
            <button className='button' onClick={increment}>-</button>
            <span>{status}</span>
            <button className='button' onClick={decrement}>-</button>
        </div>
    );
};

export default Counter