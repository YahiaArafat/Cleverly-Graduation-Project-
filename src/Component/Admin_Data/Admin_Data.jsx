import React,{useState, useEffect}from 'react'
import Lottie from "lottie-react";
import ControlIcone from '../jsons/ControlJo.json'
import NewUserIcone from '../jsons/NewUserJo.json'
import NewClassIcone from '../jsons/NewClassJo.json'
import  axios  from 'axios';
import {  useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';





export default function Admin_Data() {
    
    let [User,setUser] = useState({
        email: '',
        password: '',
        passwordConfirmation: '',
        username: '',
        // type : 'student',
        firstName: '',
           
      });

      const submitForm =() =>{
        console.log( User.firstName + ' '  + ' ' + User.email + ' ' + User.password + ' ' + User.passwordConfirmation +  ' ' + User.username );
       
      }
    let Navigate = useNavigate();

    function goToDetail(_id){
      Navigate({
        pathname:'/DeleteCourses',
        search:`?_id=${_id}`
      })}
   
  
      let [GetUsers,setGetUsers]=useState([]); 
      let [CoursesOnd,setCoursesOnd]=useState([]);
      let [CoursesID,setCoursesID]=useState([]);
      let [searchID,setsearchID]=useSearchParams();
      let currentID =searchID.get('_id');
     
      const count=0;
    async function GetUserData(){
        // const id =localStorage.getItem("type"); 
      console.log("llllllll");
    let {data} =await axios.get(`https://polar-waters-85807.herokuapp.com/api/users` //);
    ,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      }
    });
    
  setCoursesOnd(data);
  
//   let token = localStorage.getItem('token');
//   let decode = jwtDecode(token);
  console.log(data);
//   console.log(CoursesOnd);
  console.log("qqqqqqqqqqqq"); 
//   setGetUsers(decode);
}


const {email,username,firstName,lastName,ownedCourses,publishedCourses,cart,bio,profilePic} = CoursesOnd;



async function SubFormData(e){
    e.preventDefault();
 
    console.log("dddddddddd");
    let {data} =await axios.post("https://polar-waters-85807.herokuapp.com/api/users",User
    ,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
      });
    
    
      console.log("ffffffffff");
      console.log(data);
    //************** */
    // VerEmail();

  }

//   async function VerEmail(){
//     console.log("dddddddddd");
//     let {data} =await axios.post("https://polar-waters-85807.herokuapp.com/api/users/email/send",User);   
//       console.log("oooooo");
//       console.log(data);

//   }



async function DeleteCourse(id,e){
    e.preventDefault();
    console.log(id);
    console.log("dddddddddd");
    let {data} =await axios.delete(`https://polar-waters-85807.herokuapp.com/api/users/638503096cc36b44dc167ee7`  //);
    ,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
      });
    
      console.log("ffffffffff");
      console.log(data);
    //************** */
    // VerEmail();

  }


  function getFormVal(e){
    let MyUser = {...User};
    MyUser[e.target.name]= e.target.value;
    setUser(MyUser);
    // console.log(MyUser);
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

  const sal=0;
  const {category,description,price,quizes,rating,students_count,thumbnail,videos,_id} = CoursesID;
  {CoursesID && Object.values(CoursesID).map( (corse)=>(
   sal=corse.price * corse.students_count
    
    ))}; 

useEffect( ()=> { 
    GetUserData();
  },[]);
  return (
    <div >


    <div className='Row-Control row'>
    <Lottie className='ControlIcone col-12 ' animationData={ControlIcone} />
    <h1 className='text-center p-4 my-2'>Center Of Control </h1>

        <div className='container-AdminData col-md-12 my-4'>
       
        
                <table className="table table-AdminControl table-dark table-striped table-responsive text-center">
            <thead>
                <tr>
                <th scope="col">Email</th>
                <th scope="col">Channel Name</th>
                <th scope="col">User Name</th>
                <th scope="col"># Of Courses</th>
                <th scope="col">Channel Profits</th>
                <th scope="col">My Profits</th>
                <th scope="col">Delete Channel</th>
                </tr>
            </thead>
          
            <tbody>
            {CoursesOnd && Object.values(CoursesOnd).map( (corse)=>(
        <>
        {/* {( ()=>{
           
        for(let i=0; i<=corse.ownedCourses.length;i++){
            count++;
            console.log('uuuuuuuuuuuuu');
        }
        })} */}
        
                <tr>
                <th className='fw-bold' scope="row">{corse.email}</th>
                <td className='fw-bold'>{corse.username}</td>
                <td className='fw-bold'>{corse.firstName + ' ' + corse.lastName}</td>
                <td className='fw-bold'> <a  href='DeleteCourses'  className="btn bold fw-bold  btn-warning  AddAccount" onClick={()=>goToDetail(corse._id)}> {corse.ownedCourses.length} </a></td>
                <td className='fw-bold'>{ CoursesID.students_count }</td>
                <td className='fw-bold'></td>
                <td className='fw-bold'><button className='btn bold fw-bold bg-danger  DeleteAccount ' onClick={(e)=>DeleteCourse(corse._id,e)}>Delete</button> </td>
                </tr>   
                </>  
        ))}              
                <tr>
                <th >Total</th>
                <td></td>
                <td></td>
                <td></td>
                <td className='fw-bold'>6500 $</td>
                <td className='fw-bold'>650 $</td>
                <td></td>
                </tr>
                
            </tbody>
          
            </table>

         

         </div>
         </div>




         <div className='Row-Control row'>
    <Lottie className='NewUserIcone text-center' animationData={NewUserIcone} />
    <h1 className='text-center p-4 my-2'>Add New User </h1>

        <div className='container-AdminData col-md-12 my-4'>

        <form onSubmit={SubFormData} className='form'>
        <table className="table table-AdminControl table-dark table-striped table-responsive text-center">
            <thead>
                <tr>
                <th scope="col">Channel Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Confirmation</th>
                <th scope="col">Add User</th>
                </tr>
            </thead>
           
            <tbody>
                <tr>
                <td><input
                onChange={getFormVal}
                  type="text"
                  name="username"
                  className="form-control lapp"
                  id="username"
                /></td>
                <td> <input
                onChange={getFormVal}
                  type="text"
                  name="firstName"
                  className="form-control lapp "
                  id="firstName"
                 /// onChange={e=> setUser(e.target.firstName)}
                /></td>
                <td><input
                onChange={getFormVal}
                  type="text"
                  name="email"
                  className="form-control lapp"
                  id="email"
                /></td>
                <td><input
                onChange={getFormVal}
                  type="password"
                  name="password"
                  className="form-control fw-bold lapp"
                  id="password"
                /></td>
                <td> <input
                onChange={getFormVal}
                  type="password"
                  name="passwordConfirmation"
                  className="form-control fw-bold lapp"
                  id="passwordConfirmation"
                /></td>
                <td>
                    <button className='btn bold fw-bold bg-success  AddAccount ' onClick={submitForm}>Add</button> </td>
                </tr>
              
                
            </tbody>
            </table>
          
        </form>
        </div>
        </div>







        <div className='Row-Control row'>
    <Lottie className='NewClassIcone text-center' animationData={NewClassIcone} />
    <h1 className='text-center p-4 my-2'>Add New Class</h1>

        <div className='container-AdminData col-md-12 my-4'>

        <table className="table table-AdminControl table-dark table-striped table-responsive text-center">
            <thead>
                <tr>
                <th scope="col">Class Name</th>
               
                <th scope="col">Add / Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td><input
                    type="text"
                    className="form-control"
                  /></td>
               
                <td>
                    <button className='btn bold fw-bold bg-success   AddClass'>Add</button> 
                    <button className='btn bold fw-bold bg-danger  DeleteClass'>Delete</button>
                </td>
                </tr>
              
                
            </tbody>
            </table>
        </div>
        </div>

        
       </div>
  )
}
