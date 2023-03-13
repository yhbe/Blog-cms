import React from 'react'

function CreateHomepageBlogs(blog) {
  return (
    <div className='single-blog'>
      <h1 className='single-blog-h1'>{blog.title}</h1>
      <button className="single-blog-edit-post">Edit Post</button>
      <p className="single-blog-body">{blog.body}</p>
    </div>
  )
}

export default CreateHomepageBlogs