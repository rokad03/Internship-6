import React,{useState} from 'react'
import "./register.css"
import axios from "axios"

import Back from '../../../../common/back/Back'


const Register = () => {
    // const history=useHistory();
    const navigateToRegister = () => {
        window.location.href = '/login';
      };
    const [user,setUser]= useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange=(e)=>{
      const {name,value}=e.target
      setUser({
        ...user,
        [name]:value,

      })
    }


    const register=()=>{
        const {name ,email , password , reEnterPassword}=user
        if(name && email && password && password==reEnterPassword){
            axios.post("http://localhost:3001/register",user)
            .then(res=>console.log(res))
        }
        else
        {
            alert("invlaid Input");
        }
       
    }

  return (
    <>
    <Back title="Register"></Back>
      <div className='register'>
      <h1>Register</h1>
      <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange}></input>
      <input type="text" name="email" value={user.email} placeholder='Your Mail' onChange={handleChange}></input>
      <input type="password" name="password" value={user.password}  placeholder='Your Password' onChange={handleChange}></input>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-Type Your Password' onChange={handleChange}></input>
      <div className='button' onClick={register}>Register</div>
      <div>or</div>
      {/* <div className='button' onClick={()=>history.push("/login")}>Login</div> */}
      <div className='button' onClick={navigateToRegister}>
        Login
      </div>
      
    </div>
    </>
    
  )
}

export default Register
