import React, {  useState } from 'react';
import Counter from './Counter';

const CounterGroup = ({ total,valueArr, changeTotal } ) => {

    return (
        <div className="counter-group">
            <div className="total">
                <h4>Total Sum: {total}</h4>
            </div>
            {valueArr.map((v,i)=><Counter key={i} count={v} onChange={(newCount) => changeTotal(newCount, i )}/>)}
        </div>
    );
};

export default CounterGroup;
