import React, {useEffect, useState, useRef} from 'react';
import './App.css';

function App() {

const input = useRef()
const [todos, setTodos] = useState([])

useEffect(() => {
  fetch('http://localhost:8080/api')
  .then(
    data => data.json()
    )
  .then(
      data => setTodos(data.items)
    )
    },[])

  const addTodoHandler = e => {
    if(e.key === 'Enter'){
      console.log("Click")  
      setTodos([...todos, input.current.value])
    }
  }

  return (
    <div className="App">
     <h1>Your Todos</h1>
     <ul className='list'>
      {(todos.length === 0) ? (<p>Start typing</p>) : 
      (todos.map((todo, index) => {
          return <li className='list-item' key={index}>{todo}</li>
        })
      )}
     </ul>
     <input className="input" ref={input} onKeyDown={addTodoHandler} />
    </div>
  );
}

export default App;
