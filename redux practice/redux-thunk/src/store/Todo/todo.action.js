import axios from "axios";
import * as type from "./todo.action.type";


export const getTodos=(dispatch)=>{
    dispatch({type: type.GET_TODOS_LOADING})
   return axios.get("http://localhost:8080/todos").then((r)=>{
    setTimeout(()=>{
        dispatch({type:type.GET_TODOS_SUCCESS,payload:r.data})

    },1000)
      })
      .catch((error)=>{
        dispatch({type:type.GET_TODOS_ERROR})
      })
}



export const todoAdd=(dispatch,payload)=>{
    dispatch({type:type.ADD_TODO_LOADING})
    axios.post("http://localhost:8080/todos",payload).then((r)=>{

        dispatch({type:type.ADD_TODO_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:type.ADD_TODO_ERROR})
    })
};




export const todocomplite=(id)=>({type:type.COMPLITE_TODO,payload:id});
export const todoupdated=(id)=>({type:type.UPDATED_TODO,payload:id});
export const todoremove=(id)=>({type:type.REMOVE_TODO,payload:id})