import React,{useState, useEffect}from 'react'
import { Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import  jwtDecode  from 'jwt-decode';

export default function Navbar({UserToken,LogoutApp}) {

 

  const [changeColor, setChangeColor] =useState(false)

  const handleClick = () => {
    setChangeColor(!changeColor)
}

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid  ">
      
        <a className="navbar-brand fw-bold " to="#">
          Cleverly
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="container nav-container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          {UserToken? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="CardForm">
              Visa Card
              </Link>
            </li>
           
           {localStorage.getItem("_id")== '63c1cba7c30b294ed5ed68eb' ?<li className="nav-item">
              <Link className="nav-link" to="Admin_Data">
              Control
              </Link>
            </li> : ''}
            
            
            
          
          </ul> :  
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link" to="SignUp">
              SignUp
              </Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link" to="SignIn">
              SignIn
              </Link>
            </li>
            </ul> }
          
          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-reight">
            <form className="d-flex " role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Courses"
                aria-label="Search"
              />
            </form>

            <li className="nav-item d-flex">
              <a className="nav-link" href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="Settings">
                <i className="fa-solid fa-gear   "></i>
              </Link>
            </li>
            <li className="nav-item form-check form-switch DarkMode">
              <input
                 onClick={
                  handleClick          
              }
                className={`form-check-input  ${ (changeColor === true ) ?   '' :'bg-info'} `}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              ></label>
            </li>
            {UserToken?  
             <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-reight">
             <li className="nav-item">
               <a className="nav-link" onClick={LogoutApp}>
                 Logout <i className="fa-solid fa-right-from-bracket"></i>
               </a>
             </li>
             </ul> : '' }
           
          </ul>
        </div>
        </div>
      </div>
    </nav>

    </>
  );
}
