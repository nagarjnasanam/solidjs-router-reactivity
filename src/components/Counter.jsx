import { createSignal, createEffect,batch } from "solid-js";
const [count, setCount] = createSignal(5);

export default function Counter() {
  function add() {
    setCount(count() + 1);
  }
  function remove() {
    setCount(count() - 1);
  }
  console.log("hello");
  createEffect(() => {
    console.log("hello", count());
  });
  const [firstName, setFirstName] = createSignal("John");
  const [lastName, setLastName] = createSignal("Smith");
  const fullName = () => {
    console.log("Running FullName");
    return `${firstName()} ${lastName()}`;
  };
  const updateNames = () => {
    console.log("Button Clicked");
    // setFirstName(firstName() + "n");
    // setLastName(lastName() + "!");
    batch(()=>{
    setFirstName(firstName() + "n");
    setLastName(lastName() + "!");
    })
  };
  return (
    <div>
        <button onClick={updateNames}>My name {fullName}</button>
      <p>Counter</p>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remover</button>
      <p>{count()}</p>
    </div>
  );
}
