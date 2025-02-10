import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <ul className="mt-6 w-full max-w-md">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`flex justify-between items-center bg-white p-4 my-2 rounded-lg shadow-md transition hover:shadow-xl ${
            task.completed ? "line-through bg-gray-200 text-gray-500" : ""
          }`}
        >
          <span className="text-lg font-medium">{task.text}</span>
          <div className="flex gap-2">
            <button
              onClick={() => onToggleComplete(index)}
              className={`text-2xl transition-transform transform hover:scale-110 ${
                task.completed ? "text-white bg-green-600 p-1 rounded-full" : "text-green-500 hover:text-green-700"
              }`}
            >
              <MdCheck />
            </button>
            <button
              onClick={() => onDelete(index)}
              className="text-red-500 text-2xl hover:text-red-700 transition-transform transform hover:scale-110"
            >
              <MdDeleteForever />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
