import { createContext, useState } from "react";

export const TheamContest=createContext()

export const TheamProvider=({children})=>{

    const [theme,setTheam]=useState("light")


    const toggleTheam=()=>{
        if(theme==="light"){
            setTheam("dark")
        }
        else{
            setTheam("light")
        }
    }

    return (
        <TheamContest.Provider value={{
            toggleTheam,
            isTheam:theme==="light",

        }}>{children}</TheamContest.Provider>
    )
}