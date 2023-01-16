import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

const [todos, setTodos] = useState({})

useEffect(() => {
  fetch('http://localhost:5000/api')
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
      {(typeof todos.items === 'undefined') ? (<p>Loading...</p>) : 
      (todos.items.map((todo, index) => {
          return <li className='list' key={index}>{todo}</li>
        })
      )}
     </ul>
    </div>
  );
}

export default App;
