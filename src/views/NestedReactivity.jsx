
// function NestedReactivity(){
//     return(
//         <div>

//         </div>
//     )
// }
import { For } from "solid-js";
import { createStore,produce } from "solid-js/store";

const NestedReactivity = () => {
  let input;
  let todoId = 0;
  const [todos, setTodos] = createStore([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: ++todoId, text, completed: false }]);
  }

  const toggleTodo = (id) => {
    setTodos(todo => todo.id === id, produce((todo)=>{todo.completed=!todo.completed}));
  }

  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`)
          return <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onchange={[toggleTodo, id]}
            />
            <span
              style={{ "text-decoration": todo.completed ? "line-through" : "none" }}
            >{text}</span>
          </div>
        }}
      </For>
    </>
  );
};


export default NestedReactivity

