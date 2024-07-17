import { useEffect, useState } from 'react';
import axios from "axios";
import "./admin.css"
function Admin() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
     axios.get("http://localhost:3001/getUsers")
     .then(users=>setUsers(users.data))
     .catch(err=>console.log(err))
  },[])
  return (
    <>
    <h2 style={{textAlign:"Center"}}>List of All Users</h2>
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-50'>
    <table className='table'>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
          <th>
            Ip
          </th>
          <th>
            City
          </th>
          <th>
            Country
          </th>
          
        </tr>
        </thead>
        <tbody>
          {
            users.map(user=>{
             return <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.ip}</td>
                <td>{user.city}</td>
                <td>{user.country_name}</td>
              </tr>
            })
          }
        </tbody>
      
    </table>
    </div>
    </div>
    </>
  );
}

export default Admin;
