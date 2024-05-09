import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";

const Signup = () => {
  // const history = useNavigate();
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({name:"",email:"",password:""});


  const submit = async (e) => {
    e.preventDefault();
    try {
        console.log("hello");
      const response = await fetch("http://localhost:5001/api/createuser", {
        method:'POST',
        headers:{
          'Content-Type':'application/json',

        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
      });
      const json = await response.json();
      console.log(json);

      if (json.success) {
        //save the auth toke to local storage and redirect
        localStorage.setItem('token', json.authToken)
        navigate("/login")
  
      }
      else {
        alert("Enter Valid Credentials")
      }
    } catch (error) {
      alert("Wrong details");
      console.error(error);
    }
  };

  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative top-16">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to YourApp</h2>
      </div>
  
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={submit}>
            {/* Name input */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input id="username" name="name" type="text" value={credentials.name} onChange={onChange} autoComplete="username" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input id="email" name="email" value={credentials.email} onChange={onChange} type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            {/* Password input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input id="password" name="password" type="password" autoComplete="new-password" required value={credentials.password} onChange={onChange} className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            {/* Sign up button */}
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign up
              </button>
            </div>
          
            <div className="text-center">
              <p className='text-sm'>or</p>
              <Link to="/login" className="mt-4 block text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
  
  export default Signup;
