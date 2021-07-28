import React from 'react'

function Person({human}) {
    return (
        <div>I am {human.name} , I am {human.age} years old</div>
    )
}

export default Person

