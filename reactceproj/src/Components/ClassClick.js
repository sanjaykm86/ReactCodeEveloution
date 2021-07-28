import React, { Component } from 'react'

 class ClassClick extends Component {
    clickhandler(){
        console.log("Class button clicked");
        console.log(this);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>Class Click</button>
            </div>
        )
    }
}

export default ClassClick
