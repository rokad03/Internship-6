import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import { useState } from 'react';

import Login from './components/login-signup-sgp/my-app/components-login/login/login';
import Register from './components/login-signup-sgp/my-app/components-login/register/register';
import RoomPage from "./components/pricing/Pages/Room"
import HomePage from "./components/pricing/Pages/Home"
import Course1 from "./components/CoursesOne/course1_c++"
import Course2 from "./components/CoursesOne/course2_photoshop"
import Course3 from "./components/CoursesOne/course3_HTML"
import Course4 from "./components/CoursesOne/course4_MongoDb"
import Course5 from "./components/CoursesOne/course5_ReactJS"
import Course6 from "./components/CoursesOne/course6_CSS"
import Course7 from "./components/CoursesOne/course7_JAvascript"
import Course8 from "./components/CoursesOne/course8_java"
import Course9 from "./components/CoursesOne/course9_Nodejs"
import OTP from "./components/firebase/verify"
import Donate from "./components/donate/donate"
import Admin from "./components/admin/admin"
import AdminLoginLogin from "./components/admin/adminLogin"
import AdminLogin from "./components/admin/adminLogin"



function App() {
  const [user,setLoginUser]=useState({})
  return (
    <>
    
    <Router>
            <Header />
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/courses' element={< CourseHome />}></Route>
                <Route exact path='/team' element={< Team />}></Route>
                <Route exact path='/pricing' element={< Pricing />}></Route>
                <Route exact path='/journal' element={< Blog/>}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
               
                <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
                <Route exact path="/register" element={<Register></Register>}></Route>
                <Route exact path="/" element={  user && user._id ? <Home/>:<Login setLoginUser={setLoginUser}/> }></Route>
                <Route path='/room' element={<HomePage></HomePage>}></Route>
                <Route path='/room/:roomId' element={<RoomPage></RoomPage>}></Route>
                <Route path='/courses/1' element={<Course1></Course1>}></Route>
                <Route path='/courses/2' element={<Course2></Course2>}></Route>
                <Route path='/courses/3' element={<Course3></Course3>}></Route>
                <Route path='/courses/4' element={<Course4></Course4>}></Route>
                <Route path='/courses/5' element={<Course5></Course5>}></Route>
                <Route path='/courses/6' element={<Course6></Course6>}></Route>
                <Route path='/courses/7' element={<Course7></Course7>}></Route>
                <Route path='/courses/8' element={<Course8></Course8>}></Route>
                <Route path='/courses/9' element={<Course9></Course9>}></Route>
                <Route path='/verify-phone-number' element={<OTP></OTP>}></Route>
                <Route path='/adminlogin' element={<AdminLogin/>}></Route>
                <Route path='/admin' element={<Admin/>}></Route>

                
        </Routes>
        
      </Router>
      <Footer/>
      
    </>
  )
}

export default App

