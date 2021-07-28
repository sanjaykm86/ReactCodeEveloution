import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counterValue : 0
        }
    }
    increaseCounter(){
        this.setState(previousState=>({
            count : previousState.count+1
        }),()=>{console.log(this.state.counterValue)})
    }
    render() {
        return (
            <div>
                Count : {this.state.counterValue}
                <button onClick={()=>{this.increaseCounter()}}>Increase Counter</button>
            </div>
        )
    }
}

export default Counter
