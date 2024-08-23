import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Photographer™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
