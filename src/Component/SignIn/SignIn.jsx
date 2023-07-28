import React,{useState}from 'react'
import BackVideo from "../../Assets/SignIn.mp4";
import Lottie from "lottie-react";
import UserIcone from '../jsons/userJo.json'
import  axios  from 'axios';
import Joi from "joi";
import {  useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
  
  export default function SignIn({getUserDataToken}) {

    //  console.log(getUserDataToken );
    
  
    let [User,setUser] = useState({
      email: '',
      password: '',
    });
    
    let [errorJoi,seterrorJoi] = useState([]);
    let [test,settest] = useState(null);
  
  
    const submitForm =() =>{
      console.log(User.email + ' ' + User.password); 
    }
    console.log("nnnnnnnn");
  
   let navigate = useNavigate();
    function goToHome(){
      let path='/Home';
      navigate(path);
    }
  
    async function getFormVal(e){
      let MyUser = {...User};
      MyUser[e.target.name]= await e.target.value;
      setUser(MyUser);
      // console.log(MyUser);
    }
  
    async function checkUsernamePassword(e){
      e.preventDefault();
    let DataResult =DataFormJoi();
    if(DataResult.error){
      seterrorJoi(DataResult.error.details);
      }
  //******** */
  
  //******** */
    let {data,status} =await axios.post("https://polar-waters-85807.herokuapp.com/api/sessions",User);
    console.log(data);
    if(status===200 && data.accessToken ){
      console.log("i was called"); 
      localStorage.setItem("token",data.accessToken);  
      let decode = jwtDecode(localStorage.getItem('token'));
      localStorage.setItem("decode",decode);
      localStorage.setItem("type",decode.type);
      localStorage.setItem("_id",decode._id);
      console.log(localStorage.getItem("_id"));
      console.log(localStorage.getItem("type"));
     getUserDataToken();  
     goToHome();   
   
    }
    //******** */
    //  axios.defaults.headers.common['Authorization'] = `Bearer ${data['accessToken']}`;///////////

    }

  function DataFormJoi(){
    const schema = Joi.object({
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().required().min(6).max(30),
    });
    return schema.validate(User,{abortEarly:false});
  }



  return (
    <div className="main">
      <div className='SignInCountainer'>
        <video className='videoBG' src={BackVideo} autoPlay loop muted />
        <div className='formSignIn'>
          <div className="content">
            <div className="Wrapper">
              <h1 className="my-2 text-center">
              <Lottie className='Ico' animationData={UserIcone} />
              </h1>

              <h1 className="my-4 fw-bold text-center ">Signin</h1>
              <form onSubmit={checkUsernamePassword} className='form'>
                <div className="mb-3 text-center h4">
                  <label htmlFor="email" className="form-label fw-bold  ">
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

                <div className="mb-4 text-center h4">
                  <label htmlFor="passowrd" className="form-label fw-bold  ">
                    Password
                  </label>
                  <input
                  onChange={getFormVal}
                    type="password"
                    name="password"
                    className="form-control lapp"
                    id="password"
                  />
                </div>

                <div className="text-center ">
                  <button
                    className="btn bg-success bold fw-bold   sizeBot"
                    onClick={submitForm}
                  >
                    SignIn
                  </button>
                  <a  href='SignUp'  className="btn bold fw-bold bg-danger  space sizeBot">  To SignUp  </a>

                
                </div>
                </form>
               
              
            </div>
           
          </div>
         
        </div>
        {errorJoi.map( (error,index)=> <div key={index} className="alert alert-danger JoiErrorSignIn">
              {error.message} or wrong emale (Please Write Again).
            </div> )}
      </div>
    </div>
  );
}
