import * as type from "./action.type"


export const add=(value)=>({type:type.INCREMENT,payload:value});

export const subtract=(value)=>({type:type.DECREMENT,payload:value})