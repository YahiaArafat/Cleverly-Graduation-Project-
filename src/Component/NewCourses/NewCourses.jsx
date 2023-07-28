import React from 'react'
import Lottie from "lottie-react";
import NewCourseIcone from '../jsons/NewCourseAddJo.json'

export default function NewCourses() {
  return (
    <div>
        
        <div className='row'>
        <div className='container-Video col-md-4 my-4'>

        <form className="formAddCourse">
          <div className="content">
            <div className="Wrapper">
              <h1 className="my-2 text-center">
              <Lottie className="AddCourseIcone" animationData={NewCourseIcone} />
              </h1>

              <h1 className="my-4 fw-bold text-center ">Add New Course</h1>
              <form>
                <div className="mb-3 text-center h4">
                  <label  className="form-label fw-bold ">
                    Name Of Course
                  </label>
                  <input
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-4 text-center h4">
                  <label htmlFor="passowrd" className="form-label fw-bold ">
                    About Course
                  </label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  
                </div>

               
                <div className="mb-4 text-center h4 ">

                    <div className='InfoName'>
                <label htmlFor="passowrd" className="form-label fw-bold InfoName   ">
                    Info Course: 
                  </label>
                  </div>

                 <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                  <label className="form-check-label" htmlFor="inlineRadio1">Free</label>
                 </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                     <label  className="form-check-label" htmlFor="inlineRadio2">Paid</label>
                  
                 </div>
                 <input
                    type="text"
                    className="form-control pric"
                  />
                </div>


                <div className="text-center ">
                  <button
                    className="btn btn-warning bold fw-bold  sizeBotMeeting"
                  >
                    + Add
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
        </form>



        </div>
        </div>

        
        
        </div>
  )
}
