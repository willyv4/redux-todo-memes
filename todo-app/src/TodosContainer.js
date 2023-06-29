import { useSelector, useDispatch } from "react-redux";

const TodosContainer = () => {
  const todos = useSelector((st) => st.todos);
  const dispatch = useDispatch();

  const remove = (id) => dispatch({ type: "DELETE", payload: id });

  return (
    <div className="flex justify-center mt-10">
      {todos.length > 0 && (
        <ul className="bg-zinc-100 p-10 rounded">
          {todos.map((todo) => (
            <li
              className="mt-2 text-zinc-900"
              key={todo.id}
              onClick={() => remove(todo.id)}
            >
              Todo: {todo.todos}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default TodosContainer;
