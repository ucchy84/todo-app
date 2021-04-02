import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

      <nav class="bg-gray-800">
        <div class="px-20">
          <div class="flex items-center justify-between h-16">
            <div class="hidden md:block">
              <div class="flex items-baseline space-x-4">
                <Link to="/" class="text-gray-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <Link to="/Diary" class="text-gray-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Diary</Link>
                <Link to="/Form" class="text-gray-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Create</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">
            Todo アプリ
          </h1>
        </div>
      </header>
    </div>
  )
}

export default Header;