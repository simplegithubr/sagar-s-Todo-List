"use client"
import React, { useState } from "react"
import { Todoject } from "./models/page"
import {v4 as uuid} from "uuid"
const  Home: React.FC = () =>{
  const [todo, setTodo] = useState<string>(" ")
  const [todos, setTodos] = useState<Todoject[]>([])
  const addTodo = () => {
    setTodos([{id: uuid(), value: todo, done: false},...todos, ])
    setTodo('')
    
  }
  const markTodoDone = (id: string) => {
   setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done}: todo))

  }
  return (
    <>
    <header className="bg-pink-600 text-white p-4 text-center">
      <h1 className="">sagar's Todo List</h1>
    </header>
    <main className="flex flex-col items-center p-4 bg-pink-100 min-h-screen">
      <input type="text" placeholder="Enter a new todo" className= "p-2 rounded border border-pink-300 shadow-md mb-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
      onChange={(e) => setTodo(e.target.value) }
      value={todo}
      />
      
      

      <button className="bg-pink-500 text-white p-2 rounded shadow-md hover:bg-pink-600 transition duration-300" onClick={()=> addTodo()}>Add Todo</button>
      <ul className="mt-4">
        {
          
          todos.map(todo => (
            <li
            onClick={() => markTodoDone(todo.id)}
             className={`text-3*1 ml-5 cursor-pointer ${todo.done ? 'line-through' : 'no-underline'}`} 
             >
            {todo.value}
            </li>

          ))
        }
        
      </ul>
    </main>

    
    
    </>

  )
}
export default Home