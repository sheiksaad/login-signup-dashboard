import React, { useState } from 'react';
import './SignUp.css';
import desk from '../assets/desk illustration.jpeg'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignUp = ({clickFunc}) => {
  const navigate = useNavigate();
  const [input,setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // To store value in localStorage
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify(input))
    navigate("/signInCard")
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name,email,password)
  // }


  return (
<div className="signup-container">
      <div className="signup-card">
        <h2>Sign up</h2>
        <form onSubmit= {handleSubmit}>
          <div className="input-group">
            <label htmlFor="name"></label>
            <input  type="text" id="name" name="name" placeholder="Name" 
            value={input.name}
            onChange={(e)=>setInput({...input,
            [e.target.name]: e.target.value})} />
          </div>
          <div className="input-group">
            <label htmlFor="email"></label>
            <input type="text" id="email" name="email" placeholder="Enter your Email" 
            value={input.email}
            onChange={(e)=>setInput({...input,
            [e.target.name]: e.target.value})} />
          </div>
          <div className="input-group">
            <label htmlFor="password"></label>
            <input type="password" id="password" name="password" placeholder="Password"
             value={input.password}
             onChange={(e)=>setInput({...input,
             [e.target.name]: e.target.value})} />
          </div>
          {/* <div className="input-group checkbox-group">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">I agree all statements in <a href="/terms-of-service">Terms of service</a></label>
          </div> */}
          <button  type="submit">Register</button>
        </form>
      </div>
      <div className="illustration">
        <img src= {desk} alt="Desk Illustration" />
        <Link to={"/signInCard"} className="login-link" onClick={clickFunc}>I am already member</Link>
      </div>
    </div>
  );
};

export default SignUp;
