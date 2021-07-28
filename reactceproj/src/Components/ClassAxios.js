import React, { Component } from 'react'
import axios from 'axios'


 class ClassAxios extends Component {
     constructor(props) {
        super(props)
     
        this.state = {
             futureData : []
        }

    }

    componentDidMount(){
        axios.get('data.json').then(response=>{
            console.log(response.data)
            this.setState({
                futureData : response.data
            })
            console.log(this.state.futureData)
            
        })
         
            
    }
   

    render() {
        const futureData = this.state.futureData
        console.log(this.state.futureData)
        
        console.log(futureData)
        futureData.map(x=>x['Profit/Loss'] =  Math.round(x['Profit/Loss']))
    
        return (
           
            <div>
                
                {futureData.map(x=><div><h1 key={x['Trade Id']}>{x.Stock}</h1><h2>{x['Profit/Loss']}</h2></div>)}
                
            </div>
        )
    }
}


export default ClassAxios
