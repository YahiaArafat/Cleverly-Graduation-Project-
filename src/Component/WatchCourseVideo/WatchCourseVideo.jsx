import React,{useState, useEffect}from 'react'
import AboutUsIcone from '../jsons/VideoJo.json'
import Lottie from "lottie-react";
import VideoAbout from "../../Assets/background_SignUp.mp4";
import  axios  from 'axios';
import { useSearchParams } from 'react-router-dom';



export default function () {

  let [CoursesID,setCoursesID]=useState([]);

  let [searchID,setsearchID]=useSearchParams();
  let currentID =searchID.get('_id');
  
async function GetSessionsData(){
  console.log("kkkkkkkk");
  let {data} =await axios.get(`https://polar-waters-85807.herokuapp.com/api/courses/638e4b8aeab21ed9fe1ac81a` 
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
console.log(CoursesID ); 
console.log('xxxxxxxx');  

function loopID(){
  let vid = [];
for(let i=0;i<=CoursesID.videos.length;i++){
  vid[i]=CoursesID.videos[i];
  console.log(vid[i]);
}
}

// const IDCoursess = Object.values(vid).map(IDCor=>(
//   IDCor._id
//  ));
// console.log(vid._id ); 

useEffect( ()=> { 
 GetSessionsData();
//  loopID();
},[]);
  return (  
    <div>


<div className='row'>
   {Object.values(CoursesID).map( (corse,index)=>(
        <>
         </>  
        ))}
        <div></div>
        <div className='container-VideoCourse col-md-4 my-4'>
       <video className="videoWatch" src={CoursesID.videos}  controls/> 
       </div>
    
        </div>




    </div>
  )
}
