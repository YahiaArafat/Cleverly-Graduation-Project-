import React from 'react'
import CoursesPhoto from "../../Assets/CoursesPhoto.jpg";


export default function DeleteCourses() {


  
  return (
    <div>


<section>
<div className=' row'>


  <div className='container-courses col-md-4 my-4'>
      <img src={CoursesPhoto} alt='' className='w-100' />
      </div>

      <div className="Name-course-Corses col-md-8 p-5">
      <h1>Java Course</h1>
      <button
      className={`btn bold fw-bold bg-primary userBtn  `} >
                  Name Of User
                </button>

      <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need to recompile</p>
      <p> <span className='bg-danger' > Vote</span> : 9.13 </p>
      <p><span className='bg-danger' > Count</span> : 48852 </p>
      <p><span className='bg-danger' > Courses Info</span> : Free </p>

      <a  href='#'  className="btn bold fw-bold bg-danger  DeleteCourse"> Delete Course  </a>
      <a  href='EditCourse'  className="btn bold fw-bold btn-warning   WatchCourse">   Watch Course </a>
      
       
     </div>
   


   
  <div className='container-courses col-md-4 my-4'>
      <img src={CoursesPhoto} alt='' className='w-100' />
      </div>

      <div className="Name-course-Corses  col-md-8 p-5">
      <h1>C++ Course</h1>
      <button
      className={`btn bold fw-bold bg-primary userBtn  `} >
                  Name Of User
                </button>

      <p>C++ (pronounced "C plus plus") is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to  facilities for low-level </p>
      <p> <span className='bg-danger' > Vote</span> : 9.43 </p>
      <p><span className='bg-danger' > Count</span> : 6841 </p>
      <p><span className='bg-danger' > Courses Info</span> : 9.00$ </p>
      
          
      <button
      className={`btn bold fw-bold btn-warning  WatchCourse`} >
                  Watch Course
                </button>
     </div>
   


  <div className='container-courses col-md-4 my-4'>
      <img src={CoursesPhoto} alt='' className='w-100' />
      </div>

      <div className="Name-course-Corses col-md-8 p-5">
      <h1>Python Course</h1>
      <button
      className={`btn bold fw-bold bg-primary userBtn  `} >
                  Name Of User
                </button>
      <p>Python is an interpreted, interactive, object-oriented programming language. It incorporates modules, exceptions, dynamic typing, very high level dynamic data types, and classes. It supports multiple programming paradigms beyond object-oriented programming, such as procedural and functional programming. Python combines remarkable power with very clear syntax. It has interfaces to many system calls and libraries, as well as to various window systems</p>
      <p> <span className='bg-danger' > Vote</span> : 8.55 </p>
      <p><span className='bg-danger' > Count</span> : 5172 </p>
      <p><span className='bg-danger' > Courses Info</span> : 18.00$ </p>

          
      <button
      className={`btn bold fw-bold btn-warning  WatchCourse`} >
                  Watch Course
                </button>
     </div>
   



</div>
</section>



    </div>
  )
}
