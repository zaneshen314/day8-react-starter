import React, {useState} from 'react';
import CounterGroup from './CounterGroup';

const CounterSizeGenerator = () => {
    const [valueArr,setValueArr] = useState([]) // 子组件的所有值
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
        const newValueArr = [...valueArr].fill(0)
        if( size < newValueArr.length){
            let diff =  newValueArr.length - size
            newValueArr.splice(size,diff)
        } else {
            let diff =  size - newValueArr.length
            newValueArr.push(...Array(diff).fill(0))
        }
        setValueArr(newValueArr);
    };

    const changeValueArr = (value,index) => {
        const newArr = [...valueArr];
        newArr[index] = value
        setValueArr(newArr)
    }

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
                {valueArr.length > 0 && <CounterGroup valueArr={valueArr} total={total} changeTotal={changeTotal} changeValueArr={changeValueArr} />}
            </div>
        </div>
    );
};

export default CounterSizeGenerator;
