import React, { Component } from 'react'
import axios from 'axios'

 class PostForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userid : '',
              title : '',
              body : ''

         }
     }
     changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }) 
     }

     submitHandler = (e) =>{
         e.preventDefault()
         axios.post('https://jsonplaceholder.typicode.com/posts',this.state).
         then(response => console.log(response))
         console.log(this.state);
     }
     
    render() {
        const {userid,title,body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' value={userid} name='userid'  onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type='title' value={title} name='title' onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type='body' value={body} name='body' onChange={this.changeHandler}></input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
