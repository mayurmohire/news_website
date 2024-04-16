import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';

const Footer = (props) => {
  return (
    <footer className='bg-dark'>
      <div className="container py-3">
        <div className="row text-light mt-3">
        <div className="col-md">
            <div className="d-flex align-items-center" style={{fontSize: '20px', fontWeight: '500'}}> <br></br>
              <img src={logo} alt="Taaza khabar" style={{  width: '150px', marginRight: '10px'}} /> <br></br> 
            </div> 
            <br></br>
            <p>Get all the latest news at one place, just a touch away!</p>
            <p>Copyright &copy; 2023 TAAZA KHABAR</p>
             
          </div>
          <div className="col-md-3 mt-4 mt-md-0">
            <h4 style={{fontWeight: 'normal'}}>Quick Links</h4>
            {/* <Link className="nav-link footer-link my-1" to="/general">General</Link> */}
            <Link className="nav-link footer-link my-1" to="/business">Business</Link>
            <Link className="nav-link footer-link my-1" to="/technology">Technology</Link>
            <Link className="nav-link footer-link my-1" to="/science">Science</Link>
            <Link className="nav-link footer-link my-1" to="/sports">Sports </Link>
            <Link className="nav-link footer-link my-1" to="/health">Health</Link>
            <Link className="nav-link footer-link my-1" to="/entertainment">Entertainment</Link>

             


















          </div>

        </div>
          
      </div>
    </footer>
  )
}

export default Footer;