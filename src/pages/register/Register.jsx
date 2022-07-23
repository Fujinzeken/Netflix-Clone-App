import React, { useRef } from 'react'
import "./register.scss"
import {Link} from "react-router-dom";

function Register() {
  const [email, setEmail] = React.useState("")

  const [password, setPassword] = React.useState("")
  
  const emailRef = useRef()
  const passwordRef = useRef()

  function handleStart(){
    setEmail(emailRef.current.value)
  }

  function handleFinish(){
    setPassword(passwordRef.current.value)
  }

  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png?20190206123158' alt='netflix.png' />
        <button className='signIn'><Link to="/login"style={{color:"inherit", textDecoration: "none", cursor:"pointer"}}>Sign In</Link></button>
       
        </div>
      </div>
      <div className='container'>
          <h1>Unlimited Movies, Tv Shows and More</h1>
          <h2>Watch anywhere, Cancle anytime</h2>
          <p>
          Ready to watch? Enter your email to create or restart your membership.
          </p>
          {
            !email?
            <div className='input'>
              <input type="email" placeholder='Email Address' ref={emailRef} ></input>
              <button className='registerButton' onClick={handleStart}> Get Started</button>
              
          </div> : 
          <form className='input'>
              <input type="password" placeholder='Password' ref={passwordRef} required></input>
              <Link to="/"style={{color:"inherit", textDecoration: "none", height:"100%",fontSize:"20px"}}>
              <button className='registerButton' onClick={handleFinish}> Start</button>
              </Link>
          </form>
          }
         
      </div> 
    </div>
  )
}

export default Register
