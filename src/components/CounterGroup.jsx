import React, {  useState } from 'react';
import Counter from './Counter';

const CounterGroup = ({ valueArr, changeTotal } ) => {

    return (
        <div className="counter-group">
            {valueArr.map((v,i)=><Counter key={i} count={v} onChange={(newCount) => changeTotal(newCount, i )}/>)}
        </div>
    );
};

export default CounterGroup;
