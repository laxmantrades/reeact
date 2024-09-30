import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"laxman",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}

    
})
export const TodoProvider=TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext)
}
