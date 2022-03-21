import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Depart = () => {
  const [employeeData, setEmployeeData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(`http://localhost:5000/employees`).then(res => {
      setEmployeeData(res.data)
    })
  }

 return (
   <>
   {
     employeeData.map((e)=> {
       <div>{e.name}</div>
      //  <h1>{e.name}</h1>
      //  <h1>{e.gender}</h1>
      //  <h1>{e.department}</h1>,
      //  <h1>{e.role}</h1>,
      //  <h1>{e.salary}</h1>
     })
   }
  </>
 )
}

export { Depart}