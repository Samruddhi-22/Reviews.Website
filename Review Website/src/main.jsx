import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Login from './components/login/Login.jsx'
import Signup from './components/login/Signup.jsx'
import About from './components/About.jsx'
import Help from './components/Help.jsx'
import NewBlogForm from './components/NewBlogForm.jsx'
import MyBlogs from './components/MyBlogs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(


    <Route path='/' element={<Layout />} >

      <Route path='' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/help' element={<Help/>} />
      <Route path='/newblog' element={<NewBlogForm/>} />
      <Route path='/myblogs' element={<MyBlogs/>} />
    
    
    </Route>
    
  
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
