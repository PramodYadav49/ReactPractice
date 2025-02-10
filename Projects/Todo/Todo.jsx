import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TaskList from "./List";
import DeleteAll from "./DeleteAll";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDateTime(`${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue.trim() || tasks.some((task) => task.text === inputValue.trim())) return;

    setTasks((prevTasks) => [...prevTasks, { text: inputValue.trim(), completed: false }]);
  };

  const handleDelete = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  const handleToggleComplete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <header className="text-4xl font-bold text-white mb-6">Todo List</header>
      <h2 className="border border-black-500 mb-8 p-2 font-bold">{dateTime}</h2>

      <TodoForm onAddTodo={handleFormSubmit} />

     
      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />

      <DeleteAll ondeleteAll={handleDeleteAll} tasks={tasks}></DeleteAll>
    </section>
  );
};

export default Todo;
