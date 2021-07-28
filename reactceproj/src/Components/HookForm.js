import React,{useState} from 'react'

function HookForm() {
     const [name, setName] = useState({firstName:'',lastname:''})
    return (
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName : e.target.value})}></input>
                <input type='text' value={name.lastname} onChange={e=>setName({...name,lastname : e.target.value})}></input>
                <h2>{name.firstName}</h2>
                <h2>{name.lastname}</h2>
            </form>
        </div>
    )
}

export default HookForm
