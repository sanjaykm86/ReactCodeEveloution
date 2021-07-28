import React,{useState} from 'react'

function HooksFormArray() {
    const [items, setItems] = useState([])
    const addItem = ()=>{
        setItems([...items,{
            id : items.length,
            value : Math.floor(Math.random()*10)
        }])

    }
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
           <ul>{items.map(x=><li key={x.Id}>{x.value}</li>)}</ul> 
        </div>
    )
}

export default HooksFormArray
