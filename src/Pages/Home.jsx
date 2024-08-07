import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cards from './Cards'
import { productData } from './data';

const Home = () => {

  const userName = JSON.parse(localStorage.getItem("user"))

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedin")
    navigate("/signInCard")
  }


  return (
    <>
      <div id="container">
        <h1 className="heading">HomePage
        </h1>
        <p>Welocome- {userName.name}</p>
        <div className="btn">
          <button onClick={handleLogout} type='button'>Log Out</button>
        </div>
      </div>

      <div>
        {productData.map((e,i) => {
          return(
            <Cards id = {e.id}
            title={e.title}
            desc={e.description}
            img={e.image}
            key={i} />
          )
        })
        }
      </div>
    </>
  )
}

export default Home