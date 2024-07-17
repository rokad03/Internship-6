import React,{useState} from 'react'

import "./login.css"
import axios from "axios"

import Back from '../../../../common/back/Back'

const Login = ({setLoginUser}) => {
    // const history=useHistory();

    const navigateToRegister = () => {
        window.location.href = '/register';
      };
    const [user,setUser]= useState({
        email:"",
        password:""
        
    })

    const handleChange=(e)=>{
      const {name,value}=e.target
      setUser({
        ...user,
        [name]:value,

      })
    }
    const login=()=>{
        axios.post("http://localhost:3001/login",user)
        .then(res=>{
          if (res.data.success) {
            alert(res.data.message);
            setLoginUser(res.data.user);
            window.location.href = '/verify-phone-number';
          }
          else
          {
            alert(res.data.message)
          }
            // alert(res.data.message)
            // setLoginUser(res.data.user)
            // history.push("/")
            // window.location.href = "/pricing";
        })
    }
  return (
    <>
    <Back title='Login'></Back>
    <div className='login'>
      
      <h1>Login</h1>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter your Email'></input>
      <input type="password" name="password" value={user.password}  onChange={handleChange} placeholder='Enter your Password'></input>
      <div className='button' onClick={login}>Login</div>
      <div>or</div>
      {/* <div className='button' onClick={()=>history.push("/register")}>Register</div> */}
      <div className='button' onClick={navigateToRegister}>
        Register
      </div>
    </div>
    </>
  )
  }

export default Login
