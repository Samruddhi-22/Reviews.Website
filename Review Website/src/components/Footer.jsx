import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul>
              <li><Link to="/category/technology">Technology</Link></li>
              <li><Link to="/category/travel">Travel</Link></li>
              <li><Link to="/category/food">Food</Link></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex items-center">
              <li className="mr-4"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li className="mr-4"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="mr-4"><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
