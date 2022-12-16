import React from 'react'
import { useState } from 'react-dom';

export default function List() {
    const [todos,setTodos] = useState([
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
    ]);
  return (
    <div>
         {todos.map((todo,i) => {
           <div key={i} >{todo.text}</div>
         }
         )}
    </div>
  )
}
