import React,{useState} from 'react'
import HooksMouseMoveFunction from './HooksMouseMoveFunction'

function HooksMouseContainer() {

    const[display,setDisplay] =useState(true)

    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <HooksMouseMoveFunction/>}
        </div>
    )
}

export default HooksMouseContainer
