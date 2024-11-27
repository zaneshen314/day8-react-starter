import React, {useState} from 'react';
import CounterGroup from './CounterGroup';
import CounterSizeGenerator from './CounterSizeGenerator';

const MultipleCounter = () => {
    const [valueArr,setValueArr] = useState([])
    const [total,setTotal] = useState(0)
    const [size, setSize] = useState(0);

    const handleSizeChange = (event) => {
        if (event.target.value >= 0 && event.target.value <= 20) {
            setSize(event.target.value);
        }
    };
    const changeTotal = (value, index)=>{
        const diff = value - valueArr[index]
        setTotal(total+diff)
        changeValueArr(value,index)
    }
    const handleReset = () => {
        const newValueArr = Array(Math.max(size, valueArr.length)).fill(0);
        if(size !== valueArr.length){
            if (size < valueArr.length) {
                newValueArr.length = size;
            }
            setValueArr(newValueArr);
            setTotal(0);
        }
    };

    const changeValueArr = (value,index) => {
        const newArr = [...valueArr];
        newArr[index] = value
        setValueArr(newArr)
    }

    return (
        <div className="container">
            <CounterSizeGenerator size={size} handleSizeChange={handleSizeChange} handleReset={handleReset}/>
            <div className="counter-list">
                {valueArr.length > 0 && <CounterGroup valueArr={valueArr} total={total} changeTotal={changeTotal} changeValueArr={changeValueArr} />}
            </div>
        </div>
    );
};

export default MultipleCounter;
