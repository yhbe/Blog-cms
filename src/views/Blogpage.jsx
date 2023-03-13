import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Blogpage.css";

function Blogpage({ AllBlogs, port }) {
  const {id} = useParams()
  
  const blog = AllBlogs?.find((blog) => blog._id === id) || null;
  
  useEffect(() => {
    if (blog){
      setTitle(blog.title)
      setBody(blog.body)
      setAuthor(blog.author)
      setComments(blog.comments);
    }
  }, [AllBlogs])
  
  const [title, setTitle] = useState(blog?.title || "");
  const [body, setBody] = useState(blog?.body || "");
  const [author, setAuthor] = useState(blog?.author || "");
  const [comments, setComments] = useState(blog?.comments || []);
  
  console.log(comments)
  
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${port}/`)
  }

  const createForm = (blog) => {
    return (
      <form onSubmit={(e) => handleFormSubmit(e)} className='blog-update-form'>
        <ul>
          <li>
            <label htmlFor="title">Title:</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              id="title"
              value={title}
            />
          </li>
          <li>
            <label htmlFor="body">Body:</label>
            <input onChange={(e) => setBody(e.target.value)} type="text" name="body" id="body" value={body} />
          </li>
          <li>
            <label htmlFor="author">Author:</label>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              type="author"
              name="author"
              id="author"
              value={author}
            />
          </li>
          <div className="button-container">
            <button className='update-button'>Update</button>
            <button className='delete-post'>Delete Post</button>
          </div>
          {blog.comments.map((comment) => createBlogComments(comment))}
        </ul>
      </form>
    );
  }

  const createBlogComments = (comment) => {
    return (
      <div data-key={comment._id} key={comment._id} className="comment-div">
        <p className="comment-author">{comment.author}</p>
        <p>{comment.text}</p>
        <i
          className="fa-solid fa-trash"
          onClick={() => handleCommentDelete(comment._id)}
        ></i>
      </div>
    );
  }

  const handleCommentDelete = (id) => {
    const indexToDelete = comments.findIndex((comment) => comment._id === id);
    const newCommentArr = [
      ...comments.slice(0, indexToDelete),
      ...comments.slice(indexToDelete + 1),
    ];
    setComments(newCommentArr);
    
    const commentElement = document.querySelector(`[data-key="${id}"]`);
    commentElement.remove();
  };


  return (
    <div className='container'>
      <i className="fa-solid fa-arrow-left"></i>
    {!blog && <h1>Loading...</h1>}
    {blog && createForm(blog)}
    </div>
  )
}

export default Blogpage