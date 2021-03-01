import React from 'react'

const Form = (props) => {

  return (
    <div>
      <form onSubmit={props.handleAdd}>
        <div class="flex">
          <input type="text" name="title" class="w-1/2 border-2 border-gray-200 rounded-md mr-8 ml-auto px-4 py-2" />
          <button type="submit" class="w-1/8 bg-blue-500 text-white text-center rounded-md mr-auto ml-8 px-4 py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form;