import { createContext, useContext, useState } from "react";

export const AuthContest= createContext();


export const AuthProvider=({children})=>{
    const [isAuthorised,setIsAuthorised]=useState(false);

    const login=(username,password)=>{
        if(username && password){
            setIsAuthorised(true)
        }
    }


    const logout=()=>{
        setIsAuthorised(false)
    }
    return (
        <AuthContest.Provider  value={{isAuthorised,login,logout}} >{children}</AuthContest.Provider>
    )
}