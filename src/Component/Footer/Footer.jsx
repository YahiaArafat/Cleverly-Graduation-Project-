import React from 'react'

export default function Footer() {
  return (
    <div >
         <div className="w-100 brdr"></div>

    
    <footer className="footer col-md-12 ">
  <div className="footer-content">
    <div className="footer-row ">

    
      <div className="footer-col ">
        <h4>Cleverly Company</h4>
        <ul className="footer-list">
          <li><a href="About">About Us</a></li>
          <li><a target="_blank" href="https://www.najah.edu/en/home/">AN-NAJAH university</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Our partners</h4>
        <ul className="footer-list">
          <li><a href="https://www.coursera.org/">Coursera</a></li>
          <li><a href="https://www.udemy.com/course/free-photography-course-for-beginners/">Udemy</a></li>
         
        </ul>
      </div>

      <div className="footer-col">
        <h4>Follow us</h4>
        <div className="social-footer">
          <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
          <a href="https://twitter.com/"><i className="fab fa-twitter" /></a>
          <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
        </div>
      </div>

      <div className="fw-bold last " >
        <span>© Dec-2022  All rights reserved.</span>
        <span>Terms · Privacy Policy For Cleverly Company</span>
      </div>

    </div>
  </div>
</footer>
</div>
  )
}
