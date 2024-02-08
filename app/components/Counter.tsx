"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { incrementAsync, decrement, incrementByAmount } from "../../store/counter/counterSlice";

const Counter = () => {
const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useDispatch<AppDispatch>(); //dispatch actions, appDispatch import for async case


    return <div>
<h2>{count}</h2>
<div>
    <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
</div>
    </div>
}


export default Counter;