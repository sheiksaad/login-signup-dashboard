import React from 'react';
import styles from './SignInCard.module.css';
import Men from '../assets/Men illustration.jpeg'
import { Navigate, useNavigate, Link} from 'react-router-dom';
import { useState } from 'react';

const SignInCard = ({clickFunc}) => {

  const navigate = useNavigate();
  const [input,setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault()
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password){
      localStorage.setItem("loggedin",true)
      navigate("/")
    }
    else{
      alert("Wrong email or password")
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.illustration}>
        <img src= {Men} alt="Illustration" />
        <div className={styles.createAccount}>
          <Link to={"/SignUp"} onClick={clickFunc}>Create an account</Link>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Sign in</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="username"></label>
          <input type="text" id="username" name="email" placeholder="Email"
          value={input.email}
            onChange={(e)=>setInput({...input,
            [e.target.name]: e.target.value})} 
             />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password"></label>
          <input type="password" id="password" name="password" placeholder="Password"
          value={input.password}
            onChange={(e)=>setInput({...input,
            [e.target.name]: e.target.value})}
             />
        </div>
        <div className={styles.rememberMe}>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit" className={styles.loginButton}>Log in</button>
        <div className={styles.socialLogin}>
          <p>Or login with</p>
          <div className={styles.socialButtons}>
            <button className={styles.facebook}>F</button>
            <button className={styles.twitter}>T</button>
            <button className={styles.google}>G</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInCard;
