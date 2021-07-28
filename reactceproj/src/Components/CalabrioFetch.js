import React from 'react'
import axios from 'axios'

function CalabrioFetch() {

    axios.get('https://www.instagram.com/p/COFx8H0pJ8h/',
        {
            headers:{
                'Access-Control-Allow-Origin' :'*',
                'Content-Type' : 'application/x-www-form-urlencoded'  
            },
            withCredentials: true,
            credentials: 'same-origin'

        }).then(response=>{
            console.log(response.data)
        })

    return (
        <div>
            
        </div>
    )
}

export default CalabrioFetch
