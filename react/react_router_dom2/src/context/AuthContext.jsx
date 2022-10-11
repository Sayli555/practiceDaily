import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false);
    

    const login=()=>{
        setIsAuth(true);
       
    }

    const logout=()=>{
        setIsAuth(false);
        

    }

    return (
        <AuthContext.Provider value={{login,logout,isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}