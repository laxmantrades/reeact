import { createContext, useContext } from "react";

export const ThemeContext=createContext({ //first step is to create a varibale
    themeMode:"light",
    lightTheme:()=>{}, //it can accept method,string ,etc
    darkTheme:()=>{},
})

export const ThemeProvide=ThemeContext.Provider  //after creating variable we need to provide the value of var

//this is a hook that return the value of themecontext
export default function useTheme(){
    return useContext(ThemeContext)  //usecontext is a method to use the value
}