import React, { useState } from 'react';

const Counter = ( props ) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    const decrement = () => {
        const newCount = count - 1;
        setCount(newCount);
    };

    return (
        <div className="counter">
            <button className="button" onClick={decrement}>-</button>
            <span className="count">{count}</span>
            <button className="button" onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
