import React, { useRef } from 'react'
import "./login.scss";
import {Link} from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
       <form>
         <h1>Sign In</h1>
         <input type="email" placeholder='Email or phone number'></input>
         <input type="password" placeholder='Password'></input>
         {/* <Link to="/" style={{color:"inherit", textDecoration: "none"}}> */}
         <button className='loginButton'><Link to="/" style={{color:"inherit", textDecoration: "none"}}>Sign In</Link></button>
         {/* </Link> */}
         <span>New to Netflix? <Link to="/register" style={{color:"inherit", textDecoration: "none"}}><b>Sign up now.</b></Link></span>
         <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
       </form>
      </div>
    </div>
  );
}


