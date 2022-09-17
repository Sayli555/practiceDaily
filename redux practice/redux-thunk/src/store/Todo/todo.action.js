import * as type from "./todo.action.type"

export const todoAdd=(payload)=>({type:type.ADD_TODO,payload});
export const todocomplite=(id)=>({type:type.COMPLITE_TODO,payload:id});
export const todoupdated=(id)=>({type:type.UPDATED_TODO,payload:id});
export const todoremove=(id)=>({type:type.REMOVE_TODO,payload:id})