import React from 'react'
import "./Homepage.css"

function Homepage() {
  return (
    <div className="container">
    <nav className="homepage-nav homepage-padding">
      <div className="nav-leftside">
        <h1 className='nav-h1'>Blog CMS</h1>
        <p className="nav-leftside-p">
          Home
        </p>
        <p className="nav-leftside-p">
          New Post
        </p>
      </div>
      <div className="nav-rightside">
        <button className="nav-rightside-logout-button">
          Logout
        </button>
      </div>
    </nav>
    <main className="homepage-main">

    </main>
    </div>
  )
}

export default Homepage