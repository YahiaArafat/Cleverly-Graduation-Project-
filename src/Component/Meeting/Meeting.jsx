import React,{useState, useEffect}from 'react'
import Lottie from "lottie-react";
import JoinMeeting from '../jsons/JoinJo.json'
import  axios  from 'axios';
import { useSearchParams } from 'react-router-dom';


export default function Meeting() {

  let [User,setUser] = useState({
    meetingId: '',
    meetingPassword: '',
    meetingTime: '',
  });

  const submitForm =() =>{
    console.log(User.meetingId + ' ' + User.meetingPassword + ' ' + User.meetingTime); 
  }

  let [searchID,setsearchID]=useSearchParams();
  let currentID =searchID.get('_id');

  async function getFormVal(e){
    let MyUser = {...User};
    MyUser[e.target.name]= await e.target.value;
    setUser(MyUser);
    // console.log(MyUser);
  }
  
async function GetMeeting(e){
  e.preventDefault();
  console.log("kkkkkkkk");
  let {data} =await axios.post(`https://polar-waters-85807.herokuapp.com/api/courses/${currentID}/zoom/add` 
  ,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}` 
    }
  });
  console.log(data);      
console.log("pppppppp"); 
}
console.log('xxxxxxxx');  


  return (
    <div>
        <form className="formMeeting" onSubmit={GetMeeting}>
          <div className="content">
            <div className="Wrapper">
              <h1 className="my-2 text-center">
              <Lottie className='JoinIconeMeeting' animationData={JoinMeeting} />
              </h1>

              <h1 className="my-4 fw-bold text-center ">Set Meeting</h1>
         
                <div className="mb-3 text-center h4">
                  <label htmlFor="meetingTime" className="form-label fw-bold ">
                    Date & Time
                  </label>
                  <input
                     onChange={getFormVal}
                     type="text"
                     name="meetingTime"
                     className="form-control lapp"
                     id="meetingTime"
                  />
                </div>
            
                <div className="mb-3 text-center h4">
                  <label htmlFor="meetingId" className="form-label fw-bold ">
                    ID Number
                  </label>
                  <input
                  onChange={getFormVal}
                  type="text"
                  name="meetingId"
                  className="form-control lapp"
                  id="meetingId"
                  />
                </div>

                <div className="mb-4 text-center h4">
                  <label htmlFor="meetingPassword" className="form-label fw-bold ">
                    Passowrd
                  </label>
                  <input
                   onChange={getFormVal}
                    type="text"
                    name="meetingPassword"
                    className="form-control fw-bold"
                    id="meetingPassword"
                  />
                </div>

                <div className="text-center ">
                  
                </div>
           
                  <button
                    className="btn btn-warning bold fw-bold  sizeBotMeeting1"
                    onClick={submitForm}
                 >
                    Set Meeting
                  </button>
            </div>
          </div>
        </form>




    </div>
  )
}
