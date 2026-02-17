import React, { useState,useEffect } from 'react'
import './App.css'
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';
import {ToDoProvider} from './context/ToDoContext'


function App() {
    
  const [todos, setToDo]  = useState([]);
 

    const addToDo = (todo) => {
       setToDo((prev) => [{ id: Date.now(),...todo},...prev]) 
       } 

    const  updatedToDo =(id,todo) =>{
     setToDo((prev)=>prev.map((prevToDo)=>prevToDo.id === id ? todo:prevToDo)
    )}

    const deleteToDo = (id)=>{
      setToDo((prev)=>prev.filter((todo)=>todo.id ===!id))
    }


     const toggleComplete =(id) => {
     setToDo((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo,completed :!prevTodo.completed}:prevTodo))
     }


useEffect(()=>
{
  const todos =JSON.parse(localStorage.getItem("todos"));

  if (todos && todos.length > 0)
  {
    setToDo(todos);
  }
},[])

// 
  useEffect(()=>
  {
   localStorage.setItem("todos",JSON.stringify(todos));
  
  },[todos])





  return (
    <ToDoProvider  value= {{ todos , addToDo, updatedToDo, deleteToDo ,toggleComplete }} >


               <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                         {todos.map((todo)=>(
                          <div key={todo.id} className='w-full' >
                            
                            <ToDoItem todo={todo} />
                          </div>
                         ))}
                    </div>
                </div>
            </div>

    </ToDoProvider>
  )
}

export default App
