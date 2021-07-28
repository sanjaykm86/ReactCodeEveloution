import React,{useReducer} from 'react'
const initialState = 0
const reducer =(state,action)=>{

    console.log('Action is : '+action)
    switch(action)
    {
        case 'increment':
        return state + 1
        case 'decrement':
        return state -1
        case 'reset':
        return initialState
        default:
        return state
    }

    
}
function UseReducerCounter() {
    const [countstate, dispatch] = useReducer(reducer, initialState)
   
    return (
        <div>
            <div>Count is : {countstate}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerCounter
