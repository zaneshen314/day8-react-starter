import React, {useState} from 'react';
import CounterGroup from './CounterGroup';

const CounterSizeGenerator = () => {
    const [size, setSize] = useState(0);
    const [counterSize, setCounterSize] = useState(0);
    const [reset, setReset] = useState(false);

    const handleSizeChange = (event) => {
        if (event.target.value >= 0 && event.target.value <= 20) {
            setSize(event.target.value);
        }
    };

    const handleReset = () => {
        if (size !== counterSize) {
            setCounterSize(size);
            setReset(true);
        }
    };

    return (
        <div className="container">
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

            <div className="counter-list">
                {counterSize > 0 && <CounterGroup size={counterSize} reset={reset}/>}
            </div>
        </div>
    );
};

export default CounterSizeGenerator;
