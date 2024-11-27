import React from 'react';
const CounterSizeGenerator =({size,handleSizeChange,handleReset})=>{
    return(
        <div className="input-container">
            <font>Size:</font>
            <input
                type="number"
                value={size}
                onChange={handleSizeChange}
                placeholder="Enter Size"
                min="0"
            />
            <button className="reset-button" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default CounterSizeGenerator