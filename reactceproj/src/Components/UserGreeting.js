import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn : false
         }
     }
     
    render() {
        return this.state.isLoggedIn ?(
            <div>Welcome Sanjay</div>
        ) :(
            null
        )

        // return (
        //     <div>
        //        <div>Welcome Sanjay</div> 
        //        <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
