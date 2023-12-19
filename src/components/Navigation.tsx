import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css"

export function Navigation(props:any) {
  const handleLogout = () => {
    props.logout()
  }
    const navigate = useNavigate();

    return (
          <nav className="h-20 flex items-center justify-between px-8 bg-gradient-to-r from-gray-600 to-gray-900 text-white shadow-lg">
            <span className="text-3xl font-extrabold tracking-wider">LuxCart</span>
      
            <div className="space-x-6">
            
            <Link
                to="/my_products"
                className="text-lg font-medium hover:text-gray-300 transition duration-300"
              >
                My Products
              </Link>
              <Link
                to="/"
                className="text-lg font-medium hover:text-gray-300 transition duration-300"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-lg font-medium hover:text-gray-300 transition duration-300"
              >
                About
              </Link><button
              onClick={handleLogout}
                className="text-lg font-medium hover:text-gray-300 transition duration-300 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </nav>
      );
}