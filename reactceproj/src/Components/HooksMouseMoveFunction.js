import React,{useEffect,useState} from 'react'

function HooksMouseMoveFunction() {

    const[x,setX] = useState(0)
    const[y,setY] = useState(0)

   const logMouseLocation=e=>{
    setX(e.clientX)
    setY(e.clientY)}

    useEffect(()=>{
        window.addEventListener('mousemove',logMouseLocation)

        return()=>{window.removeEventListener('mousemove',logMouseLocation) }
    },[])

    return (
        <div>
            X-{x} Y-{y}
        </div>
    )
}

export default HooksMouseMoveFunction
