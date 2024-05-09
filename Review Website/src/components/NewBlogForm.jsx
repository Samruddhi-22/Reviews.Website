import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const NewBlogForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ title: "", image: "", content: "" });
  const fileInputRef = useRef(null);

  const imageBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const image = await imageBase64(file);
      setData({ ...data, image: image });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userEmail = localStorage.getItem("userEmail");

    console.log('Submitting new blog:', data);
    try {
      const response = await fetch("http://localhost:5001/api/createblog", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          
        email: userEmail,
        title: data.title,
        image: data.image,
        content: data.content,
        blog_date: new Date().toDateString()
        })
      });
      const json = await response.json();
      console.log(json);
      
      if (json.success) {
       alert("Blog created successfully!")
        navigate("/")
  
      }
      else {
        alert("Enter Valid Credentials")
      }

    } catch (error) {
      alert("Wrong details");
      console.error(error);
    }
    setData({ title: "", image: "", content: "" });
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen mt-10 mb-20 flex-col justify-between items-center bg-red-300">
      <div className="relative top-10 max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label htmlFor="uploadImage" className="block text-gray-700 font-semibold mb-2">
              Image:
            </label>
            <input
              type="file"
              id="uploadImage"
              name="image"
              onChange={handleUpload}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              className="border-2 bg-blue-500 text-white rounded-md p-1"
            >
              Upload
            </button>
            {data.image && <img src={data.image} className="h-10 w-10" alt="Uploaded Preview" />}
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
              Content:
            </label>
            <textarea
              id="content"
              name="content"
              value={data.content}
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBlogForm;
