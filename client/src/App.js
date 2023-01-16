import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

const [todos, setTodos] = useState([])
console.log("Todo State", todos)

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(
    data => data.json()
    )
  .then(
      data => setTodos(data)
    )
    },[])

  return (
    <div className="App">
     <h1>Your Todos</h1>
     <ul>
      {(typeof todos === 'undefined') ? (<p>Loading...</p>) : 
      (todos.map((todo, index) => {
          return <li key={index}>{todo.title}</li>
        })
      )}
     </ul>
    </div>
  );
}

export default App;
