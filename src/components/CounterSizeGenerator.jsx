
import React, { useState } from 'react';

const CounterSizeGenerator = ({ handleSizeChange }) => {
    const [size, setSize] = useState(0);

    const handleSizeInputChange = (event) => {
        const newSize = parseInt(event.target.value);
        if (newSize >= 0 && newSize <= 20) {
            setSize(newSize);
        }
    };

    return (
        <div className="size-generator">
            <font>Size:</font>
            <input
                type="number"
                value={size}
                onChange={handleSizeInputChange}
                min="0"
                max="20"
            />
            <button onClick={() => handleSizeChange(size)}>Reset</button>
        </div>
    );
};

export default CounterSizeGenerator;
