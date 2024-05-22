import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';
import { increment, decrement } from '../stores/counterSlice';

export const Increment = () =>{

    const [amount, setAmount] = useState(1);
    const {counter} = useSelector( state => state.counter);
    const dispatch = useDispatch();

    const handleIncrement =()=>{
        dispatch (increment(amount));
    }
    const handleDecrement =()=>{
        dispatch (decrement(amount));
    }
    return(
        <>
            <h1>App</h1>
            <hr />
            <span> Counter is : {counter}</span>
            <input type="number" onChange={(x) => setAmount(parseInt(x.target.value))}/>
            <button
                className="btn btn - primary"
                onClick={handleIncrement}>
            +
            </button>
            <button
                className="btn btn - primary"
                onClick={handleDecrement}>
            -
            </button>
        </>
    )
}