import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './views/Homepage'

function RouterSwitch() {
  const [AllBlogs, setAllBlogs] = useState(undefined)
  const port = process.env.REACT_APP_PORT || "http://localhost:5000"

  console.log(AllBlogs)

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const response = await fetch(`${port}/blogs`, {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          setAllBlogs(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllBlogs();
  }, []);


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default RouterSwitch