import React, { useEffect, useState } from 'react';
import Counter from './Counter';

const CounterGroup = (props) => {
    const counters = [];
    const size =props.size
    const reset =props.reset

    // 这里保持所有计数器的初始值
    const [countersState, setCountersState] = useState(Array(size).fill(0));

    // 当 size 或 reset 发生变化时，我们调整计数器的数量
    useEffect(() => {
        setCountersState(Array(size).fill(0)); // 重置计数器的状态
    }, [size]); // 只有当 size 变化时才重新渲染计数器

    const handleChange = (index, newCount) => {
        const updatedCounters = [...countersState];
        updatedCounters[index] = newCount;
        setCountersState(updatedCounters);
    };



    for (let i = 0; i < size; i++) {
        counters.push(
            <Counter key={i} reset={reset} onChange={(newCount) => handleChange(i, newCount)} />
        );
    }

    return (
        <div className="counter-group">
            {counters}
        </div>
    );
};

export default CounterGroup;
