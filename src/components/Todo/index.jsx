import React, {useState} from 'react'
import css from './index.css'

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])

  return(
    <div>
      <h1>ToDo</h1>
      {todos.map((todo, i) => <div className='todo' key={i}>{todo.text}</div>)}
    </div>
  );
}
