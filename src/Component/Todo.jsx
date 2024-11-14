import { useState } from "react";
import "../style.css";
const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const handleInput = () => {
    if (!input) return;
    const newTodo = {
      id: todos.length + 1,
      text: input,
    };
    setTodo((prev) => [...prev, newTodo]);
    setInput("");
  };
  const removeTodo = (id) => {
    setTodo((todos) => todos.filter((t) => t.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <br />
      <button onClick={handleInput}>AddTodo</button>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <span> {text}</span>
            <button onClick={() => removeTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
