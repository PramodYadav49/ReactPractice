import {React,useState }from 'react'

const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState("");
    function handleInputChange(value) {
        setInputValue(value);
      }
      const handleFormSubmit =(event)=>{
        event.preventDefault()
        onAddTodo(inputValue);
        setInputValue("");
      }
     
  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter a task..."
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg transition transform hover:scale-105 shadow-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </form>
      </section>
  )
}

export default TodoForm