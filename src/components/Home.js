import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import google from './Assets/google-icon 1.png'
import apple from './Assets/apple 1.png'

function Home() {
  return (
    <div className="signup-page">
      <div className="left">
        <span>
        Board.
        </span>
        
      </div>
      <div className="right">
        <div className="main">
          <h3>Sign In</h3>
          <p>Sign in to  your account</p>

          <div className="btnbox">
          <button className="btn">
            <img src={google} alt="" />
            Sign in with Google
          </button>
          <button className="btn">
            <img src={apple} alt="" />
            Sign in with Apple
          </button>

          </div>
          

          <div className="hbox">
            <form action="">
              <label htmlFor="">Email address</label>
              <input placeholder='johndoe@gmail.com' type="text" />
              <label  htmlFor="">Password</label>
              <input placeholder="••••••••" type="text" />

              <a className='link' href="">Forgot Password</a>
            
              <Link to="/dashboard">
              <button className='btn2'>Sign In</button>
              </Link>
              

            </form>
          </div>

          <span id="span2">
          Don't have an account? <a className='link' href=""> Register here</a>
          </span>

        </div>
      </div>
    </div>
  )
}

export default Home
