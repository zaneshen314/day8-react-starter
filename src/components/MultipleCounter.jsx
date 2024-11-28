import React, { useState } from 'react';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroup from './CounterGroup';

const MultipleCounter = () => {
    const [valueArr, setValueArr] = useState([]);
    const [total, setTotal] = useState(0);

    const handleSizeChange = (newSize) => {
        if (newSize !== valueArr.length) {
            setValueArr(Array(newSize).fill(0));
            setTotal(0);
        }
    };

    const changeTotal = (value, index) => {
        const diff = value - valueArr[index];
        setTotal(total + diff);
        changeValueArr(value, index);
    };

    const changeValueArr = (value, index) => {
        const newArr = [...valueArr];
        newArr[index] = value;
        setValueArr(newArr);
    };

    return (
        <div className="container">
            <CounterSizeGenerator handleSizeChange={handleSizeChange} />
            <div className="counter-list">
                <div className="total">
                    <h4>Total Sum: {total}</h4>
                </div>
                {valueArr.length > 0 && (
                    <CounterGroup
                        valueArr={valueArr}
                        changeTotal={changeTotal}
                        changeValueArr={changeValueArr}
                    />
                )}
            </div>
        </div>
    );
};

export default MultipleCounter;
