import React,{useState}from 'react'
import Lottie from "lottie-react";
import Select from 'react-select';
import makeAnimated from "react-select/animated";
import UserIcone from '../jsons/learningJo.json'
import CoursesPhoto from "../../Assets/CoursesPhoto.jpg";
import TrueIcone from '../jsons/TrueJo.json'


export default function Courses() {

  const animatedComponents = makeAnimated();
  const [changeColor, setChangeColor] =useState(false)
  const [BtnId, setBtnId] = useState(0)




  const handleClick = () => {
    setChangeColor(!changeColor)
}

  const options = [
    { value: "produto 01", label: "Developer" },
    { value: "produto 02", label: "Athlete" },
    { value: "produto 03", label: "Educational" },
    { value: "produto 04", label: "Cooking" },
    { value: "produto 05", label: "Arts" },
    { value: "produto 06", label: "Makeup" },
    { value: "produto 07", label: "Diverse" },
  ];
  
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleSelect = () => {
      console.log(selectedOptions);
    };
 
    

  return (
    <> 

    <section> 
      <div className=' row-6'>
      <Lottie className='UserIconelearning' animationData={UserIcone} />
      <h1 className='text-center p-4 my-2'>All Courses<br/> Most wahched Courses and Learn</h1>
    

      <div className='selpart-container col-md-12 my-4'>
    <Select
        components={animatedComponents}
        isMulti
        options={options}
        onChange={(item) => setSelectedOptions(item)}
        className="select fw-bold text-dark"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
        placeholder="Search"
        
      />

      <button
      onClick={ () => { 
        setBtnId(1)
        handleClick()
      }
      }
      
      className={`btn bold fw-bold  btfiltering ${ (changeColor === true && BtnId == 1 ) ?   'bg-success' :'bg-danger'  }`} >
                  Free <Lottie className='TrueIconeCourses' animationData={TrueIcone} />
                </button>
      <button
       onClick={ () => { 
        setBtnId(2)
        handleClick()
      }
    }
      className={`btn bold fw-bold  btfiltering ${ (changeColor === true && BtnId == 2 ) ?   'bg-success' :'bg-danger'  }`} >
                  Saved <Lottie className='TrueIconeCourses' animationData={TrueIcone} />
                </button>
      <button
      onClick={ () => { 
        setBtnId(3)
        handleClick()
      }
    }
      className={`btn bold fw-bold  btfiltering ${ (changeColor === true && BtnId == 3 ) ?   'bg-success' :'bg-danger'  }`} >
                  Paid <Lottie className='TrueIconeCourses' animationData={TrueIcone} />
                </button>

   <div className="w-100 brdr"></div>

   </div>

 


</div>
      
</section>

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
      <p><span className='bg-danger' > Viewers</span> : 48852 </p>
      <p><span className='bg-danger' > Price</span> : Free </p>

      <a  href='EditCourse'  className="btn bold fw-bold btn-warning  WatchCourse">  Watch Course </a>
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



  </>
    
  )
}
