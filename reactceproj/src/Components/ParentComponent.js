import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName :"Parent"
        }
    }

   greet=(child)=>{
       alert(`Hello ${this.state.parentName} from ${child}`)
   }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greet}/>
            </div>
        )
    }
}

export default ParentComponent
