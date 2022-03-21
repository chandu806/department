import { useState } from "react";


import axios from "axios"

const Todo = () => {
  const [employee, setEmployee] = useState(
    {
    name: "",
    gender: "",
    department: "",
    role: "",
    salary:""
  })
  const handleChange = (e) => {
    console.log(e.targe.value)
    const {className, value} = e.target;
    setEmployee({
      ...employee,
      [className]:value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    axios.post("http://localhost:5000/employees", employee).then(() => {
      console.log("Done")
    })
  }
  return ( 
    <div className="adddepart">
      <form onSubmit={handleSubmit}>

      <input 
      type="text"
      placeholder="Name"
      value={employee.name}
      onChange={handleChange}
      className="name"
      />
      <input 
      type="text"
      placeholder="Gender"
      // value={employee.gender}
      onChange={handleChange}
      className="gender"
      />
      <input 
      type="text"
      placeholder="Department"
      // value={employee.department}
      onChange={handleChange}
      className="department"
      />
      <input 
      type="text"
      placeholder="role"
      // value={employee.role}
      onChange={handleChange}
      className="department"
      />
      <input 
      type="number"
      placeholder="Salary"
      // value={employee.salary}
      onChange={handleChange}
      className="salary"
      />
      <input type="submit" value ="ADD EMPLOYEE" />
      </form>
      

      


      
      
    </div>
  );
}

export {Todo}
