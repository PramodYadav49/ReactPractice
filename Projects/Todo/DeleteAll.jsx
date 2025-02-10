import React from 'react'

const DeleteAll = ({tasks,ondeleteAll}) => {
  return (
    <div>{tasks.length > 0 && (
        <button
          onClick={ondeleteAll}
          className="bg-red-500 text-white px-4 py-2 rounded-lg transition transform hover:scale-105 shadow-md hover:bg-red-600 mt-4"
        >
          Clear All
        </button>
      )}</div>
  )
}

export default DeleteAll