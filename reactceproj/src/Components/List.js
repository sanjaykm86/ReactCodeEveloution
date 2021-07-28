import React from 'react'
import Person from './Person'

function List() {
    const names = ["Bruce","Clark","Diana","Bruce"]
    const persons = [
        {
         id :1,
         name : "Sanjay",
         age : 34   
        },
        {
            id : 2,
            name : "Nandini",
            age : 32
        }
    ]
  //  const personlist = persons.map(person=><Person key={person.id} human={person}></Person>)
  const namelist = names.map((name,index)=><div key={index}>{index} : {name}</div>)
    return (
        <div>
            {
                namelist
            }
        </div>
    )
}

export default List
