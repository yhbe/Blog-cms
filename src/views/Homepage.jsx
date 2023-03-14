import React from 'react'
import { useNavigate } from 'react-router-dom'
import CreateHomepageBlogs from '../helper/createHomepageBlogs'
import "./Homepage.css"

function Homepage({AllBlogs}) {
  const navigate = useNavigate()
  
  const blogJSX = AllBlogs?.map(blog => CreateHomepageBlogs(blog, navigate))

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
      {!blogJSX && <h1>Loading blogs...</h1>}
      {blogJSX}
    </main>
    </div>
  )
}

export default Homepage