import { createContext, useContext } from "react";

export const todoContex=createContext({
    todos:[
        {
            id:1,
            todo:"I added todo",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toogleTodo:(id)=>{}
})

export const TodoProvider=todoContex.Provider

export default function useTodo(){
    return useContext(todoContex)
}
