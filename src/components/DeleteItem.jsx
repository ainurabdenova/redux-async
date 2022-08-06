import React, { useDispatch, useSelector } from 'react-redux';
import { AddNumber, RemoveDate, SortDate } from './../store/slice/countSlice'
import { useState, useRef, useEffect } from 'react'

const DeleteItem = () => {

    const [data, setData] = useState('')
    const ref = useRef(null)
    const dispatch = useDispatch()
    const alldatas = useSelector(state => state.count.dates)

    useEffect(() => {
        if (ref.current) {
            ref.current.focus()
        }
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.stopPropagation()
            handleClick()
        }
    }

    const handleClick = () => {
        if (data.trim().length) {
            dispatch(AddNumber(data))
        }
        setData('')
    }


    return (
        <div>
            <input type="text" ref={ref} value={data} onChange={(e) => setData(e.target.value)} onKeyDown={handleKeyDown} />
            <button onClick={handleClick}>Add</button>
            <button onClick={() => dispatch(SortDate(data))}>Sorting</button>
            <div>{
                alldatas.map((item, index) => <li key={index} onClick={() => dispatch(RemoveDate(index))}>{item}</li>)
            }</div>

        </div>
    );
}

export default DeleteItem;
