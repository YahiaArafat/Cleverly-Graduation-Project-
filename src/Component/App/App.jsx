import React,{useState,useEffect}from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Settings from '../Settings/Settings';
import About from './../About/About';
import Messages from '../CardForm/CardForm';
import Meeting from './../Meeting/Meeting';
import NewCourses from './../NewCourses/NewCourses';
import EditCourse from './../EditCourse/EditCourse';
import Admin_Data from './../Admin_Data/Admin_Data';
import DeleteCourses from './../DeleteCourses/DeleteCourses';
import DeleteVideo from './../DeleteVideo/DeleteVideo';
import Quiz from './../Quiz/Quiz';
import CardForm from './../CardForm/CardForm';
import CreateQuiz from './../CreateQuiz/CreateQuiz';
import WatchCourseVideo from './../WatchCourseVideo/WatchCourseVideo';
import Footer from '../Footer/Footer';
import SignIn from './../SignIn/SignIn';
import SignUp from './../SignUp/SignUp';
import jwtDecode from 'jwt-decode';
import Logout from './../Logout/Logout';
import {  useNavigate } from 'react-router-dom';


export default function App() {

  const [UserToken,setUserToken]= useState(null);

  let navigate = useNavigate();
  function LogoutApp(){
    localStorage.removeItem('token');
    setUserToken(null);
    navigate('/SignIn');
  }
 
  function getUserDataToken(){ 
    let token = localStorage.getItem('token');
    let decode = jwtDecode(token);
    // console.log(decode);
    setUserToken(decode._id);
    // console.log('ppppp');
    // console.log(UserToken);
  }


  useEffect( ()=> { 
    if(localStorage.getItem('token')){
      console.log('yyyyyyyy');
      getUserDataToken();   
    }
  },[])

  return (
   

    <div>


      <Navbar UserToken={UserToken} LogoutApp={LogoutApp}/>
     
       
      <div className="container"> 
        
        <Routes>
        <Route path='/' element={<SignUp />}> </Route>
          <Route path='Home' element={<Home UserToken={UserToken}/>}> </Route>  
          <Route path='SignIn' element={<SignIn getUserDataToken={getUserDataToken} />}></Route>
          <Route path='SignUp' element={<SignUp  />}>  </Route>
          <Route path='About' element={<About />}> </Route>
          <Route path='Courses' element={<Courses />}> </Route>
          <Route path='CardForm' element={<CardForm />}> </Route>
          <Route path='Meeting' element={<Meeting />}> </Route>
          <Route path='Settings' element={<Settings />}> </Route>
          <Route path='NewCourses' element={<NewCourses />}> </Route>
          <Route path='EditCourse' element={<EditCourse />}> </Route>
          <Route path='Admin_Data' element={<Admin_Data />}> </Route>
          <Route path='DeleteCourses' element={<DeleteCourses />}> </Route>
          <Route path='DeleteVideo' element={<DeleteVideo />}> </Route>
          <Route path='Quiz' element={<Quiz />}> </Route>
          <Route path='Logout' element={<Logout />}> </Route>
          <Route path='CreateQuiz' element={<CreateQuiz />}> </Route>
          <Route path='WatchCourseVideo' element={<WatchCourseVideo/>}> </Route>
          
        </Routes>
      
      </div>
      <Footer/>
    </div>
  )
}