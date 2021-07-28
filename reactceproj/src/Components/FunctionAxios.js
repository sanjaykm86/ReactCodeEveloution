import React, { useEffect, useState } from 'react'
import axios from 'axios'



function FunctionAxios() {
    const [futureData,setFutureData] = useState([])
    useEffect(()=>{
        //axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        axios.get('http://tradingapi/api/FnOperformancebymonth',
        {
            headers:{
                'Access-Control-Allow-Origin' :'*',
                'Content-Type' : 'application/x-www-form-urlencoded'  
            },
            withCredentials: true,
            credentials: 'same-origin'

        })
        .then(response=>{
        console.log(response.data)
        setFutureData(previos=>response.data)
        console.log(futureData)
        //futureData.map(x=>x['Profit/Loss'] =  Math.round(x['Profit/Loss']))

    })
    
    })
    
    return (
        
        <div>
            {futureData.map(x=><div><h1 key={x['Trade Id']}>{x.Stock}</h1><h2>{x['Profit/Loss']}</h2></div>)}
        </div>
    )
}

export default FunctionAxios
