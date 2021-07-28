import React from 'react'

const Hello = (props)=>{
    console.log(props);
    return React.createElement('button',{
        id : 'Hello',
        className : 'App'
        },React.createElement('h1',null,'Hello '+props.children));
}

export default Hello