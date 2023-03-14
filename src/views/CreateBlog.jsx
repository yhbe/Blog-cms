import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog({ port, refreshPage }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  console.log(port);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${port}/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          author,
          date: "2023-03-13",
        }),
      });

      if (response.ok) {
        refreshPage();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-a-blog-container">
      <i onClick={() => navigate("/")} className="fa-solid fa-arrow-left"></i>
      <h2>Create a new blog post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateBlog;
