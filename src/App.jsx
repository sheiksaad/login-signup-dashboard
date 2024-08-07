import React, { useState } from 'react';
import SignUp from './components/SignUp';
import SignInCard from './components/SignInCard';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import ProtectedRoutes from './Services/ProtectedRoutes';
import Product from './Pages/Product';


const App = () => {
  // const [isloggedIn,setloggedIn] = useState()

  // const toggle = ()=>{   
  //   setloggedIn(!isloggedIn)
  // } 

  return (
    <>
    <Routes>
      <Route path='/signUp' element = {<SignUp/>}/>
      <Route path='/signInCard' element = {<SignInCard/>}/>
      {/* Protected route */}
      <Route path='/' element= {<ProtectedRoutes/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      </Route>
    </Routes>


  {/* <div className="App">
    {
      isloggedIn ? <SignInCard clickFunc={toggle}/>: <div className="App"><SignUp clickFunc={toggle}/></div>
    }
    </div> */}
    </>
);
};

export default App;
