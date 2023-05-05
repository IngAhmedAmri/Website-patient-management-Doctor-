import { useState ,useEffect} from "react";
import axios from 'axios'
import Patient from "./componenets/patient";
import Add from "./componenets/add";
function App() {
  const[data,setData]=useState([])
  function fetchData(){
    axios.get("http://localhost:5000/api/patients/")
    .then((res)=>{
      setData(res.data) 
    })
    .catch((err)=>{console.log(err)})
  }

  function addPatient(patient){
    axios.post(`http://localhost:5000/api/patients/`,patient)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{console.log(err)})
  }

  const deletePatient=(name)=>{
    if(window.confirm("are you sure that u want to delete it")){
    axios.delete(`http://localhost:5000/api/patients/${name}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}}

  useEffect(()=>{
    fetchData()
    console.log(data)
  },[])
  return (
   <>
   <Add addPatient={addPatient} deletePatient={deletePatient}/>
   <Patient data={data} deletePatient={deletePatient}/>
   </>
  );
}

export default App;






