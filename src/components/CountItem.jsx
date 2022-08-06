import React, { useDispatch, useSelector } from 'react-redux';
import { AddNumber, AddNum, DeleteNum } from './../store/slice/countSlice'
import { useState } from 'react'

const CountItem = () => {

    const [data, setData] = useState('')
    const dispatch = useDispatch()
    const numbers = useSelector(state => state.count.number)
    const alldatas = useSelector(state => state.count.dates)

    const handleClick = () => {
        dispatch(AddNumber(Number(data)))
        setData('')
    }


    return (
        <div>
            <input type="number" value={data} onChange={(e) => setData(e.target.value)} />
            <button onClick={handleClick}>{`Add number: ${data}`}</button>
            <div>
                <button onClick={() => dispatch(AddNum())}>+</button>
                <button onClick={() => dispatch(DeleteNum())}>-</button>
            </div>
            <div>{
                alldatas.map((item, index) => <li key={index}>{item}</li>)
            }</div>
            <div>{numbers}</div>

        </div>
    );
}

export default CountItem;
