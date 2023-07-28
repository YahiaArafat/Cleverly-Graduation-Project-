import React from 'react'
import Lottie from "lottie-react";
import QuestionIcone from '../jsons/QuestionJo.json'

export default function CreateQuiz() {
  return (
    <div>
        
    <div className='row'>
    <div className='container-CreQuiz col-md-12 my-4'>

    <form className="formAddCourse">
      <div className="content">
        <div className="Wrapper">
          <h1 className="my-2 text-center">
          <Lottie className="QuestionIcone" animationData={QuestionIcone} />
          </h1>

          <h1 className="my-4 fw-bold text-center ">Add New Quiz</h1>
          <form>
          <div className='row'>
            <div className="mb-3 text-center col-md-12 h4">
              <label  className="form-label fw-bold ">
                What is the question?
              </label>
              <input
                type="text"
                className="form-control"
              />
            </div>
            </div>


            <div className='row'>
            <div className="mb-3 text-center OptionsQuiz h4 col-md-12 justify-content-between">

            <div>
             <label  className="form-label fw-bold ">
                Option 1
              </label>
              <input
                type="text"
                className="form-control"
              />
                </div>
            <div>
             <label  className="form-label fw-bold ">
                Option 2
              </label>
              <input
                type="text"
                className="form-control"
              />
                </div>
            <div>
             <label  className="form-label fw-bold ">
                Option 3
              </label>
              <input
                type="text"
                className="form-control"
              />
                </div>
            <div>
             <label  className="form-label fw-bold ">
                Option 4
              </label>
              <input
                type="text"
                className="form-control"
              />
                </div>
              

             
            </div>
            </div>
          

        

            <div className='row'>
            <div className="mb-4 text-center h4 ">

                <div className='InfoName'>
            <label htmlFor="passowrd" className="form-label fw-bold InfoName  mt-2 ">
            The Correct Answer: 
              </label>
              </div>

             <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
              <label className="form-check-label" htmlFor="inlineRadio1">1</label>
             </div>

             <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
              <label className="form-check-label" htmlFor="inlineRadio1">2</label>
             </div>

             <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
              <label className="form-check-label" htmlFor="inlineRadio1">3</label>
             </div>

            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                 <label className="form-check-label" htmlFor="inlineRadio2">4</label>
             </div>
            </div>
            </div>

            <div className='row'>
            <div className="text-center col-md-12 justify-content-center ParentsizeBotQuiz ">
             
              <button
                className="btn btn-warning bold fw-bold  sizeBotQuizNext">
                Next Question
              </button>

              <button
                className="btn bg-primary text-black bold fw-bold  sizeBotQuizFinsh">
                Finsh
              </button>

              </div>
            </div>

            

          </form>
        </div>
      </div>
    </form>



    </div>
    </div>

    
    
    </div>  )
}
