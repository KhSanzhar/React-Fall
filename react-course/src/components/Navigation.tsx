import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Navigation() {
    const navigate = useNavigate();
    const auth = useAuth();

    const handleLogout = () => {
      auth?.logout();
      navigate("/sign_in");
    }

    return (
          <nav className="h-20 flex items-center justify-between px-8 bg-gradient-to-r from-gray-600 to-gray-900 text-white shadow-lg">
            <span className="text-3xl font-extrabold tracking-wider">LuxeCart</span>
      
            <div className="space-x-6">
            {auth?.currentUser ? (
            <Link
                to="/my_products"
                className="text-lg font-medium hover:text-gray-300 transition duration-300"
              >
                My Products
              </Link> ) : (
              <Link
                to="/sign_in"
                className="text-lg font-medium hover:text-gray-300 transition duration-300"
              >
                Sign In
              </Link>
              )
            }       
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
              </Link>
              {auth?.currentUser && (<button
                onClick={handleLogout}
                className="text-lg font-medium hover:text-gray-300 transition duration-300 cursor-pointer"
              >
                Logout
              </button>)}
            </div>
          </nav>
      );
}