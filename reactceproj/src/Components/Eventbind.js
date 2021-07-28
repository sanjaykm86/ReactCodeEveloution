import React, { Component } from 'react'

 class Eventbind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message : 'Hello Event'
         }
         //this.clickHandler = this.clickHandler.bind(this)
     }
    //  clickHandler(){
    //      this.setState({
    //          message : 'GoodBye Event'
    //      })
    //  }
     clickHandler = ()=>{
         this.setState({
             message : 'GoodBye Event'
         })
     }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>ClickEvent</button>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default Eventbind
