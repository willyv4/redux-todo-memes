import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();
  const initialState = { id: uuid(), todos: "" };
  const [formData, setFormData] = useState(initialState);
  const addTodo = () => dispatch({ type: "ADD", payload: formData });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormData(formData);
    console.log("SUBMMItED DATA", formData);
    addTodo();
    setFormData(initialState);
  };

  return (
    <div className="flex justify-center m-2">
      <form onSubmit={handleSubmit} className="flex flex-row m-2">
        <input type="hidden" value={formData.id} />
        <input
          type="text"
          placeholder="Todo"
          name="todos"
          className="input input-bordered w-full max-w-xs m-2"
          value={formData.todos}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn glass bg-rose-300/50 hover:bg-emerald-300/50 m-2"
        >
          Glass button
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
