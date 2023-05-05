import React, { useState } from 'react'


function Add({addPatient}) {
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[lastvisit,setLastvisit]=useState("")
    const[situation,setSituation]=useState("")
    const[description,setDescription]=useState("")
    const[medication,setMedication]=useState("")
    
    const patient={
        name:name,
        age: age,
        lastvisit: lastvisit,
        situation:situation,
        medication:medication,
        description:description
    }
    const handleAdd=()=>{
     addPatient(patient)
    }
  return (
    <div class="login-box">
        <div class="user-box">
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name patient"/>
        </div>
        <div class="user-box">
        <input type="text" onChange={(e)=>setAge(e.target.value)} placeholder="Age patient"/>
        </div>
        <div class="user-box">
        <input type="text" onChange={(e)=>setLastvisit(e.target.value)} placeholder="Last visit patient"/>
        </div>
        <div class="user-box">
        <input type="text" onChange={(e)=>setSituation(e.target.value)} placeholder="Situation patient"/>
        </div>
        <div class="user-box">
        <input type="text" onChange={(e)=>setMedication(e.target.value)} placeholder="Medication patient"/>
        </div>
        <div class="user-box">
        <input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="Description patient"/>
        </div>
        <button onClick={handleAdd}>Add Patient</button>
    </div>
  )
}

export default Add