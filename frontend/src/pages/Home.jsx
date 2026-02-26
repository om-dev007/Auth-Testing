import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/api/auth/register">SignUp for the new user</Link>
      <br />
      <Link to="/api/auth/login">Login to this </Link>
    </div>
  )
}

export default Home
