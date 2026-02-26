import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-title">Home Page</h1>

        <div className="home-links">
          <Link className="home-link signup-link" to="/api/auth/register">
            SignUp for the new user
          </Link>

          <Link className="home-link login-link" to="/api/auth/login">
            Login to this
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home