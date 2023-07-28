import React,{useState, useEffect}from 'react'
import Lottie from "lottie-react";
import TrueIcone from '../jsons/TrueJo.json'
import CoursesPhoto from "../../Assets/CoursesPhoto.jpg";
import makeAnimated from "react-select/animated";
import videocourse from '../jsons/videocourseJo.json'
import QuzeJocourse from '../jsons/QuzeJo.json'
import liveJocourse from '../jsons/liveJo.json'
import deletecourse from '../jsons/deleteJo.json'
import  jwtDecode  from 'jwt-decode';
import {  useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import { useSearchParams } from 'react-router-dom';





export default function EditCourse() {
    const animatedComponents = makeAnimated();
    const [changeColor, setChangeColor] =useState(false)
    let [CoursesID,setCoursesID]=useState([]);

    let [searchID,setsearchID]=useSearchParams();
    let currentID =searchID.get('_id');

    const IDcourse=0;
    let Navigate = useNavigate();
    function goToDetail(_id){
      Navigate({
        pathname:'/WatchCourseVideo',
        search:`?_id=${_id}`
      })}

    let NavigateMet = useNavigate();
    function goToMeeting(_id){
      NavigateMet({
        pathname:'/Meeting',
        search:`?_id=${_id}`
      })}
    
    const IconeSuccses = () =>{
      console.log( 'hhhhhhh' );
    } 
  
    const handleClick = () => {
      setChangeColor(!changeColor)
  }

  let [GetUsers,setGetUsers]=useState([]); 
  let [CoursesOnd,setCoursesOnd]=useState([]);

  async function GetUserData(){
    const id =localStorage.getItem("id"); 
  console.log("llllllll");
let {data} =await axios.get(`https://polar-waters-85807.herokuapp.com/api/courses/638e4b8aeab21ed9fe1ac81a` //);
,{
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}` 
  }
});

setCoursesOnd(data.ownedCourses);

let token = localStorage.getItem('token');
let decode = jwtDecode(token);
// console.log(data);
// console.log("qqqqqqqqqqqq"); 
setGetUsers(decode);
}

async function GetSessionsData(){
  console.log("kkkkkkkk");
  let {data} =await axios.get(`https://polar-waters-85807.herokuapp.com/api/courses/${currentID}` 
  ,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
  });
     console.log(data);      
setCoursesID(data);
console.log("pppppppp"); 
}
console.log('xxxxxxxx');  
console.log(CoursesID); 
console.log('xxxxxxxx');  
const {category,description,price,quizes,rating,review_count,thumbnail,videos,_id} = CoursesID;

// const count=0 ;
// {videos && Object.values(videos).map( (corse)=>(
//   {
//   for(let i=0;i<=videos.length;i++){
//     count++
//   }
// }

// )};
useEffect( ()=> { 
  GetUserData();
 GetSessionsData();
},[]);
  return (
    <div>

<div className='row'>

        <div className='container-photo col-md-4 my-4'>
      <div className="ProfilePhoto">
      <img src={CoursesID.thumbnail} alt='' className='w-100' />
       </div>
       <button className={`btn bold fw-bold bg-primary  ChangPhoto `}>
                  Change Photo
                </button>
      </div>
      <div className="About-Home col-md-8 p-5">
      <h1>{CoursesID.name}</h1>
      <p className='fw-bold'>{CoursesID.description}</p>
      <p className='fw-bold'> <span className='bg-danger' > Vote</span> : {CoursesID.rating} / 5 </p>
      <p className='fw-bold'><span className='bg-danger' > Visit</span> : {CoursesID.students_count} </p>
      <p className='fw-bold'><span className='bg-danger' > Price</span> : {CoursesID.price}$ </p> 
        

      <h2 className='text-center fw-bold'>Next Meeting </h2>
      <div className='row row-Meeting'>

      <div className="mb-3 text-center col-md-4  h5">
      <p className='fw-bold '> Date & Time</p>
      <h6 className='fw-bold'>22/1/2023-2:00pm</h6>
              </div>

              <div className="mb-3 text-center col-md-4  h3">
      <p className='fw-bold'> ID </p>
      <h6 className='fw-bold'>11819680</h6>
              </div>

              <div className="mb-3 text-center col-md-4  h5">
      <p className='fw-bold'> Password </p>
      <h6 className='fw-bold'>yy@00</h6>
              </div>
      </div>

      <button 
      onClick={ () => {
        handleClick()
        IconeSuccses()
      } }
      className={`btn bold fw-bold  SaveCourse-Home  SaveCourse-EditCourse ${ (changeColor === true) ?   'bg-success' :'bg-danger'  }`} >
                  Save Course <Lottie className='TrueIconeHome' animationData={TrueIcone} />
                </button>
     </div>
     <div className="w-100 brdr"></div>
      </div>




        <div className='row'>
        <div className='container-Icon-EditCourse col-md-4 my-4'>
        {/* {Object.values(CoursesOnd).map( (corse,index)=>(
        <>
         </>  
        ))} */}
        <div>
            <Lottie className='videoEditcourse' animationData={videocourse} />
            <a  href='EditCourse'  className="btn bold fw-bold bg-primary h1 ">  + Add New Video </a>
            </div>
        <div>
            <Lottie className='liveEditcourse' animationData={liveJocourse} />
            <a  onClick={()=>goToMeeting(CoursesID._id)}  className="btn bold fw-bold bg-primary h2 ">   Set New Live Meeting </a>
        </div>
        <div className='div3'> 
            <Lottie className='QuzeEditcourse' animationData={QuzeJocourse} />
            <a  href='CreateQuiz '  className="btn bold fw-bold bg-primary  h3 ">  + Add New Quiz </a>
        </div>
        
      

        </div>
        <div className="w-100 brdr"></div>

        </div>





    <div className='Courses-EditCourse row'>   
    {videos && Object.values(videos).map( (corse)=>(
        <>
        <div className='container-courses-Home col-md-4 my-4'>
      <img src={CoursesID.thumbnail} alt='' className='w-100' />
      </div>
      <div className="text col-md-8 p-5">
      <h1>Video </h1>
      <a  className="btn bold fw-bold btn-warning  WatchCourse-EditCourse"onClick={()=>goToDetail(CoursesID._id)}>   Watch </a>
      <button 
      className="btn bold fw-bold   DeleteCourse-EditCourse bg-danger" >
                  Delete Course <Lottie className='deleteIconeHome' animationData={deletecourse} />
                </button>   
     </div>  
         </>  
        ))}
       

         
     </div>
   

     <div className='Courses-EditCourse row'>
     {quizes && Object.values(quizes).map( (corse)=>(
      <>
       <div className='container-courses-Home col-md-4 my-4'>
      <img src={CoursesPhoto} alt='' className='w-100' />
      </div>

      <div className="text col-md-8 p-5">
      <h1>Quiz {corse.length}</h1>
      <a  href='Quiz'  className="btn bold fw-bold btn-warning  WatchCourse-EditCourse">   Watch </a>
      <button 
      className="btn bold fw-bold   DeleteCourse-EditCourse bg-danger" >
                  Delete Course <Lottie className='deleteIconeHome' animationData={deletecourse} />
                </button>    
     </div>
       </>  
        ))}
     </div>

    


    

      
     

</div>
  )
}
