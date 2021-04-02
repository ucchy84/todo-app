import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <div class="flex flex-col">
      <div class="py-2 px-40">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-10 py-4">
                  <Link to="/Diary" class="text-gray-900 hover:text-indigo-900">hoge</Link>
                </td>
                <td class="px-6 py-4 text-right text-sm font-medium">
                  <Link to="/Form" class="text-indigo-600 hover:text-indigo-900">Edit</Link>
                  <a href="#" class="ml-2 text-red-600 hover:text-indigo-900">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
 
  )
}

export default List;