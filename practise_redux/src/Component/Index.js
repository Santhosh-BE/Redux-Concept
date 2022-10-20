import React from 'react'
import {increasevalue,decreasevalue} from '../Redux/action-creator';
import {useSelector,useDispatch} from 'react-redux';

function Index() {
    const myState = useSelector(state=>state.ourState.count)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Welcome</h1>
        <button onClick={()=>dispatch(increasevalue())}>Increment</button>
        <p>{myState}</p>
        <button onClick={()=>dispatch(decreasevalue())}>Decrement</button>
    </div>
  )
}

export default Index