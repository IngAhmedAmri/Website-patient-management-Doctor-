import React from 'react'


function patient({data}) {
  return (
    data.map((e)=>(
        <>
        <div>
          <h2>{e.name}</h2>
        </div>
        <div>{e.age}</div>
        <div>{e.lastvisit}</div>
        <div>{e.situation}</div>
        <div>{e.medication}</div>
        <div>{e.description}</div>
        </>
    )       
    ))
}

export default patient