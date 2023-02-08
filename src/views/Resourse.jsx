import { createSignal, createResource } from "solid-js";
const fetchJokes = async (id) => (await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)).json();
const Resource = () => {
      // https://swapi.dev/api/people/1
      const[people] = createResource(async()=>{
        return await fetch('https://swapi.dev/api/people').then(res=>res.json())
    })
    console.log('peoplw',people())
    const [id,setId] = createSignal(2)
    const [jokes] = createResource(id,fetchJokes);
  const fetchUser = async (id) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();
  const [userId, setUserId] = createSignal();
  const fetchUserS = async (id) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();
  const [userID, setUserID] = createSignal(1);
  const [useR] = createResource(userID, fetchUserS);
  const [user] = createResource(userId, fetchUser);
  console.log('user',useR)
  // const changeId = setId()

  return (
    <>
    {/* <p>{JSON.stringify(user)}</p> */}
    <span>{jokes.loading && "Loading..."}</span>
      <div>
        <pre>{JSON.stringify(jokes(), null, 2)}</pre>
      </div>
      <div>
        <input placeholder="enter todo id" 
        onInput={(e) => setId(e.currentTarget.value)}
        />
      </div>
      <input
        type="number"
        min="1"
        placeholder="Enter Numeric Id"
        onInput={(e) => setUserId(e.currentTarget.value)}
      />
      <span>{user.loading && "Loading..."}</span>
      <div>
        <pre>{JSON.stringify(user())}</pre>
      </div>
    </>
  );
};

export default Resource


