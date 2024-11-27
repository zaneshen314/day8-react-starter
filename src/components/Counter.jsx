import React, { useState } from 'react';

const Counter = ( {count,onChange} ) => {
    return (
        <div className="counter">
            <button className="button" onClick={()=>onChange(count - 1)}>-</button>
            <span className="count">{count}</span>
            <button className="button" onClick={()=>onChange(count + 1)}>+</button>
        </div>
    );
};

export default Counter;
