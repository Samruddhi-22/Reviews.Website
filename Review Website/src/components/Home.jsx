import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo1 from "./img/logo1.webp"
import logo2 from "./img/logo2.webp"
const HomePage = () => {

    const [blogsDisplay, setBlogsDisplay] = useState([]);
  
    useEffect(() => {
      // Fetch blogs for the logged-in user
      const fetchBlogs = async () => {
        try {
          let userEmail = localStorage.getItem("userEmail");
          let response = await fetch("http://localhost:5001/api/homeblogs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              
                email: userEmail,
                
                })
          });
  
            const data = await response.json();
  
            setBlogsDisplay(data);
         
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
  
      fetchBlogs();
    }, []);
  return (
    <div>
      <section className="hero-section">
        <div className="container mt-10 mx-auto px-4 py-12 text-center ">
          <h1 className="text-4xl font-bold text-white">Welcome to My Blog</h1>
          <p className="text-xl text-gray-400 mt-4 text-bold">Insights, stories, and ideas from various domains.</p>
          <Link to="/about" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Learn More About Us
          </Link>
        </div>
      </section>

      <section className="featured-posts">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {/* Mockup for featured posts */}
            {blogsDisplay.map((blog) => (
          <div key={blog.email} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.content}</p>
            </div>
            <div className="flex justify-evenly p-4">
            
            </div>
          </div>
        ))}
          </div>
        </div>
      </section>

      <section className="latest-posts">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold">Featured Posts</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Mockup for latest posts */}
            
            <div  className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={logo1}  className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">M.M. LaFleur Blog</h2>
              <p className="text-gray-700">M.M. LaFleur is a women’s professional apparel brand designed to bring ease and comfort into the lives of their customers. Their blog, called The — M — Dash, promotes female empowerment.Women who work in virtually any industry can read the blog to feel inspired by other businesswomen as well as learn about different aspects of being a woman in the workplace (gender equality, stereotypes, etc.). Lastly, there are blog posts related to attire including topics about what to wear on your first day, casual Fridays, and to job interviews. </p>
            </div>
           
          </div>
            <div  className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={logo2}  className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Adaptive Insights Blog</h2>
              <p className="text-gray-700"> Adaptive Insights is a business and financial planning software company. Their blog provides insight into how active financial planning processes drive success. Their blogs include tips, latest news, and best practices related to active financial planning. Adaptive Insights even writes about specific causes and events that matter to them as a company (such as social causes, employee and customer success, etc.) so readers get to know them on a deeper level.
              </p>
            </div>
           
          </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
