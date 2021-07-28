import React, { Component } from 'react'
import Axios from 'axios'


 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             value : 1
              
         }
     }
     componentDidMount(){
         

         Axios.post('http://lsgelection.kerala.gov.in/public/getlocalbody').then(response=>{
             console.log(response)
             this.setState({posts : response})
            })
         .catch(error=>console.log(error))
     }
     
    render() {
         const {posts} = this.state
        // console.log(this.state.posts)
        // console.log("Postlist:-")
        // console.log(posts[0])
        return (
            <div>
                
               {/* List of posts<br/>
               -------------
               {posts.map(x=><div>{x.title}</div>)} */}
            </div>
        )
    }
}

export default PostList
