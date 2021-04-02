import React from 'react'

const Form = (props) => {
  

  return (
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div>
                <label for="company_website" class="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div class="mt-1">
                  <input type="text" name="title" id="company_website" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full rounded-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                </div>
              </div>

              <div>
                <label for="about" class="block text-sm font-medium text-gray-700">
                  Body
                </label>
                <div class="mt-1">
                  <textarea id="about" name="body" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                </div>
              </div>
              
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form;