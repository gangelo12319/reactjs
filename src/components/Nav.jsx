/* eslint-disable no-unused-vars */
import React from 'react'

const Nav = () => {
    return (
        <nav className="flex items-center justify-between w-full bg-gray-800 p-4 shadow-lg fixed top-0 left-0 transition-all duration-300 hover:bg-gray-900">
        <h1 className="text-3xl font-extrabold text-white tracking-wide hover:text-purple-400 transition-all duration-300">
          My Notes
        </h1>
        <div>
          <ul className="flex space-x-6 text-lg">
            <li className="px-4 py-2 border-2 border-white text-white rounded-lg transition-all duration-300 hover:border-purple-400 hover:bg-purple-400 hover:text-white cursor-pointer">
              Home
            </li>
            <li className="px-4 py-2 border-2 border-white text-white rounded-lg transition-all duration-300 hover:border-purple-400 hover:bg-purple-400 hover:text-white cursor-pointer">
              Add To Do's
            </li>
          </ul>
        </div>
      </nav>
    );
  };

export default Nav