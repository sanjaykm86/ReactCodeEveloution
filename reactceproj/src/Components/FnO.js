import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'


function FnO(monthval) {
    console.log(monthval);

    const[fno,setfno] = useState([]);

    useEffect(()=>{
        console.log(monthval.monthVal);
        axios.get(`http://tradingapi/api/fnoperformancebymonth?month=${monthval.monthVal}`).then(response=>{
            setfno(response.data);
            //console.log(response.data);
            console.log(fno);
            console.log(monthval.monthVal);
            
        })

    },monthval.monthVal)

    return (
        <div>
           <div>
           <Table striped bordered hover variant="dark">
                   <th>Rank</th>
                   <th>Stock</th>
                   <th>Change</th>
                   <th>Percent Change</th>
                   <th>High</th>
                   <th>Low</th>
                   <th>LTP</th>
                   {fno.map(x=><tr>
                       <td>{x.Rank}</td>
                       <td>{x.Stock}</td>
                       <td>{x.Change}</td>
                       <td>{x.PChange}</td>
                       <td>{x.High}</td>
                       <td>{x.Low}</td>
                       <td>{x.LTP}</td>
                       </tr>)}
                   
               </Table>
               </div>
        </div>
    )
}

export default FnO
