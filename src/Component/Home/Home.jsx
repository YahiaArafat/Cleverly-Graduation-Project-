import React,{useState, useEffect}from 'react'
import Lottie from "lottie-react";
import VideoAbout from "../../Assets/background_SignUp.mp4";
import makeAnimated from "react-select/animated";
import CoursesPhoto from "../../Assets/CoursesPhoto.jpg";
import photoUser from "../../Assets/photo.jpg";
import TrueIcone from '../jsons/TrueJo.json'
import AddIcone from '../jsons/addnewJo.json'
import AboutUsIcone from '../jsons/aboutusJo.json'
import  axios  from 'axios';
import  jwtDecode  from 'jwt-decode';
import {  useNavigate } from 'react-router-dom';

// import {DateTimePickerComponent} from '../../../node_modules/@syncfusion/ej2-react-calendars';


export default function Home() {

  let Navigate = useNavigate();

  function goToDetail(_id){
    Navigate({
      pathname:'/EditCourse',
      search:`?_id=${_id}`
    })}
 
  let [GetUsers,setGetUsers]=useState([]); 
  let [CoursesOnd,setCoursesOnd]=useState([]);
  let [CoursesID,setCoursesID]=useState([]);
 
  async function GetUserData(){
      const id =localStorage.getItem("type"); 
    console.log("llllllll");
  let {data} =await axios.get(`https://polar-waters-85807.herokuapp.com/api/users/profile/get ` //);
  ,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
  });

  setCoursesOnd(data);
  
  let token = localStorage.getItem('token');
  let decode = jwtDecode(token);
  console.log(data);
  console.log("qqqqqqqqqqqq"); 
  setGetUsers(decode);
}

console.log('jjjjjjjjjjjj');  
console.log(CoursesOnd); 
console.log(GetUsers);   
console.log('jjjjjjjjjjjj');  


//  const IDCoursess = Object.values(CoursesOnd).map(IDCor=>(
//   IDCor._id
//  ));

 const {_id,email,usernam,firstName,lastName,ownedCourses,publishedCourses,cart,bio,profilePic} = CoursesOnd;

 console.log('eeeee');
//  console.log(IDCoursess);
 console.log('eeeee');


  async function GetSessionsData(){
    console.log("kkkkkkkk");
    let {data} =await axios.get(`https://polar-waters-85807.herokuapp.com/api/courses/638e4b8aeab21ed9fe1ac81a` 
    ,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      }
    });
  setCoursesID(data);
  console.log("pppppppp"); 
  }
  console.log('xxxxxxxx');  
  console.log(CoursesID); 
  console.log('xxxxxxxx');  
  
  // const CoursesDATA = {}
  
  useEffect( ()=> { 
    GetUserData();
   GetSessionsData();
  },[]);


  const animatedComponents = makeAnimated();
  const [changeColor, setChangeColor] =useState(false)
  
  const IconeSuccses = () =>{
    console.log( 'hhhhhhh' );
  } 

  const handleClick = () => {
    setChangeColor(!changeColor)
   }

  return (

    <div>
        {/* {HomePage.map( (Home,index)=> key={index} )} */}

      <div className='row'>
        <div className='container-photo col-md-4 my-4'>
      <div className="ProfilePhoto">
      <img src={GetUsers.profilePic} alt='' className='w-100' />
       </div>
       <button className={`btn bold fw-bold bg-primary  ChangPhoto `}>
                  Change Photo
                </button>
                <p className='NameUserHome'>{GetUsers.firstName + ' ' +GetUsers.lastName}</p>
      </div>
      <div className="About-Home col-md-8 p-5">
        <h1>{GetUsers.username}</h1>
      
      <p  className='fw-bold'>{GetUsers.bio}</p>
      <p className='fw-bold'> <span className='bg-danger' >  Courses</span> :3</p>
      <p className='fw-bold'><span className='bg-danger' >  Views</span> : 35 </p>
          


      
      

      
     
      <button 
      onClick={ () => {
        handleClick()
        IconeSuccses()  
      } }
      className={`btn bold fw-bold   SaveCourse-Home ${ (changeColor === true) ?   'bg-success' :'bg-danger'  }`} >
                  Follow <Lottie className='TrueIconeHome' animationData={TrueIcone} />
                </button>
     </div>
     <div className="w-100 brdr"></div>
      </div>
      

       

       <div className='row'>
        <div className='container-Video col-md-12 my-4'>

          <div><Lottie className='AboutUsIcone' animationData={AboutUsIcone} /></div>
        
        <div> 
          <p className='NameUserVideoHome'>About {GetUsers.username} Channel</p>
       <video className="video" src={VideoAbout}  controls/> 
       </div>
       
       <button className="btn bold fw-bold bg-primary  ChangVideo">
                  Change Video
                </button>
       </div>
        </div>


      <div className='container-addRow row'>
      <div className='container-add col-md-12 '>
     <Lottie className='AddIconeHome' animationData={AddIcone} />
     <a  href='NewCourses'  className="btn bold fw-bold  btnAdd">   Add a new course </a>
    
       </div>
    </div>


       <div className='Courses-Home-Row row'>
       <div className="w-100 brdr"></div>
        {publishedCourses && Object.values(publishedCourses).map( (corse)=>(
        <>
      <div className='container-courses-Home col-md-4 my-4'>
      <img src={corse.thumbnail} alt='' className='w-100' />
      </div>

      <div className="text col-md-8 p-5">

      <h1>{corse.name} </h1> 
      
      <p>{corse.description}</p>
      <h4 className='fw-bold'> Open Course and edit details... </h4>
      <p className='fw-bold'> <span className='bg-danger' > category</span> : {corse.category} </p>
      <p  className='fw-bold'> <span className='bg-danger' > Vote</span> : {corse.rating} </p>
      <a className="btn bold fw-bold btn-warning  WatchCourse-Home"  onClick={()=>goToDetail(corse._id)}>   Open Course </a>
     
     </div>

        </>
        
        ))}
     </div>


    </div>
    
  )
}
