import React , {useState,useEffect}  from "react";
import BackVideo from "../../Assets/background_SignUp.mp4";
import Lottie from "lottie-react";
import UserIcone from '../jsons/userJo.json'
import axios from "axios";
import Joi from "joi";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



export default function SignUp() {


  let [errorJoi,seterrorJoi] = useState([]);
  let [SuccessJoi,setSuccessJoi] = useState([]);
  let [ShowSuccess,setShowSuccess] = useState(false);

  let [User,setUser] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    username: '',
    // type : 'student',
    firstName: '',
    lastName: '',
       
  });

  const submitForm =() =>{
    console.log( User.firstName + ' ' + User.lastName + ' ' + User.email + ' ' + User.password + ' ' + User.passwordConfirmation +  ' ' + User.username );
   
  }
  

  async function SubFormData(e){
    e.preventDefault();
    
    console.log("hhhhhhhhhhhhhhhhhhh");
    let DataResult =DataFormJoi();
    if(DataResult.error){
      seterrorJoi(DataResult.error.details);
    } 
    //************** */  
//************** */
console.log("dddddddddd");
let {data} =await axios.post("https://polar-waters-85807.herokuapp.com/api/users",User);

  console.log("ffffffffff");
  console.log(data);
    //************** */
    VerEmail(); 

  }
  async function VerEmail(){
    console.log("dddddddddd");
    let {data} =await axios.post("https://polar-waters-85807.herokuapp.com/api/users/email/send",User);   
      console.log("oooooo");
      console.log(data);
      setShowSuccess(true);

  }

  
  function getFormVal(e){
    let MyUser = {...User};
    MyUser[e.target.name]= e.target.value;
    setUser(MyUser);
    // console.log(MyUser);
  }

  function DataFormJoi(){
    const schema = Joi.object({
      firstName: Joi.string().required().min(5).max(20),
      lastName: Joi.string().required().min(5).max(20),
      username: Joi.string().required().min(5).max(20),
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().required().min(6).max(30),
      passwordConfirmation: Joi.string().required().min(6).max(30),
    });
    return schema.validate(User,{abortEarly:false});
  }

  return (
    <div className="main">
      <div className='SignUpCountainer'>
        <video className='videoBG' src={BackVideo} autoPlay loop muted />   
          
          <div className="content">
          <form onSubmit={SubFormData} className='form'>
          
            {/* <div className="Wrapper"> */}
              <h1 className="my-2 text-center">            
          <Lottie className='Ico' animationData={UserIcone} />
              </h1>
              <h1 className=' bold text-center lppp'>SignUp</h1>

          <div className="SupName justify-content-lg-between">
              <div className="mb-3 text-center col-md-5  h5">
                <label htmlFor="firstName" className="form-label fw-bold">
                  First Name
                </label>
                <input
                onChange={getFormVal}
                  type="text"
                  name="firstName"
                  className="form-control lapp "
                  id="firstName"
                 /// onChange={e=> setUser(e.target.firstName)}
                />
              </div>

              <div className="mb-3 text-center col-md-5 h5">
                <label htmlFor="lastName" className="form-label fw-bold ">
                  Last Name
                </label>
                <input
                onChange={getFormVal}
                  type="text"
                  name="lastName"
                  className="form-control lapp"
                  id="lastName"
                />
              </div>
              </div>

              <div className="SupName justify-content-lg-between">
              <div className="mb-3 text-center col-md-5 h5">
                <label htmlFor="username" className="form-label fw-bold ">
                   Name of Channel
                </label>
                <input
                onChange={getFormVal}
                  type="text"
                  name="username"
                  className="form-control lapp"
                  id="username"
                />
              </div>


              <div className="mb-3 text-center col-md-5 h5">
                <label htmlFor="email" className="form-label fw-bold ">
                  Email
                </label>
                <input
                onChange={getFormVal}
                  type="text"
                  name="email"
                  className="form-control lapp"
                  id="email"
                />
              </div>
              </div>

              <div className="SupName justify-content-lg-between">
              <div className="mb-4 text-center col-md-5 h5">
                <label htmlFor="password" className="form-label fw-bold">
                  Password
                </label>
                <input
                onChange={getFormVal}
                  type="password"
                  name="password"
                  className="form-control fw-bold lapp"
                  id="password"
                />
              </div>
            
              <div className="mb-4 text-center col-md-5 h5">
                <label htmlFor="passwordConfirmation" className="form-label fw-bold">
                  Password Confirmation
                </label>
                <input
                onChange={getFormVal}
                  type="password"
                  name="passwordConfirmation"
                  className="form-control fw-bold lapp"
                  id="passwordConfirmation"
                />
              </div>
              </div>
              <div className="text-center btn-SUP">
                <button
                  className='btn bg-success bold fw-bold btnn space sizeBot'
                  onClick={submitForm}
                >
                  Register
                </button>
                <a  href='SignIn'  className="btn bold fw-bold bg-danger btnn space sizeBot">  To SignIn  </a>
                {/* <Link className="btn bold fw-bold bg-danger btnn space sizeBot" to="SignIn">
                To SignIn
              </Link> */}
                {/* <button
                  className='btn bold fw-bold bg-danger btnn space sizeBot'
                >
                  <Link className="nav-link" to="SignIn">
                  To SignIn 
              </Link>
                                </button> */}
              </div> 

            {/* </div> */}
            </form>
          </div>
          {errorJoi.map( (error,index)=> <div key={index} className="alert alert-danger JoiError">
              {error.message} Write Again
            </div> )}

            {
          ShowSuccess ? <div className="alert bg-success JoiError">
             Success ...Verify in your Email and SignIn
            </div> : null
            }
      </div>
    </div>
  );
}
