import React from 'react'
import { createContext,useContext } from "react";


export const ToDoContext =  createContext({todos:[{ id:1,todo:"To Do",completed:false,}],
    addToDo: (todo)=>{},
    updatedToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:(id)=>{},
})


export const useToDo =()=>
{
    return useContext(ToDoContext);
}


export const ToDoProvider = ToDoContext.Provider;