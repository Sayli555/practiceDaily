import * as types from "./actionType";
import axios from "axios"


const getTodoRequest=(payload)=>{
    return {
        type:types.GET_TODO_LIST_REQUEST,
        payload
    }
}


const getTodoSuccess=(payload)=>{
    return {
        type:types.GET_TODO_LIST_SUCCESS,
        payload
    }
}


const getTodoFailure=(payload)=>{
    return {
        type:types.GET_TODO_LIST_FAILURE,
        payload
    }
}


export const getTodoFetch=(payload)=>(dispatch)=>{
    dispatch(getTodoRequest());

    axios.get("http://localhost:8080/todos").then((r)=>
        dispatch(getTodoSuccess(r.data))
        // console.log(r.data)
    )
    .catch((e)=>dispatch(getTodoFailure(e.data)))
}



// *********************************POST***************************************



const postTodoRequest=(payload)=>{
    return {
        type:types.POST_TODO_LIST_REQUEST,
        payload
    }
}


const postTodoSuccess=(payload)=>{
    return {
        type:types.POST_TODO_LIST_SUCCESS,
        payload
    }
}


const postTodoFailure=(payload)=>{
    return {
        type:types.POST_TODO_LIST_FAILURE,
        payload
    }
}


export const postTodoFetch=(payload)=>(dispatch)=>{
    dispatch(postTodoRequest());

    axios.post("http://localhost:8080/todos",payload).then((r)=>{

    
        dispatch(postTodoSuccess(r.data))
        // dispatch(getTodoSuccess(r.data))
}
    )
    // .then((r)=>dispatch(getTodoSuccess(r.data)))
    .catch((e)=>dispatch(postTodoFailure(e.data)))
}



// *********************************SINGLE**************************************************


const singleTodoRequest=(payload)=>{
    return {
        type:types.SINGLE_TODO_REQUEST,
        payload
    }
}


const singleTodoSuccess=(payload)=>{
    return {
        type:types.SINGLE_TODO_SUCCESS,
        payload
    }
}


const singleTodoFailure=(payload)=>{
    return {
        type:types.SINGLE_TODO_FAILURE,
        payload
    }
}


export const singleTodoFetch=(payload)=>(dispatch)=>{
    dispatch(singleTodoRequest());

    axios.get(`http://localhost:8080/todos/${payload}`).then((r)=>
        dispatch(singleTodoSuccess(r.data))
        // console.log(r.data)
    )
    .catch((e)=>dispatch(singleTodoFailure(e.data)))
}



// **************************************DELETE*******************************************************



const deleteTodoRequest=(payload)=>{
    return {
        type:types.SINGLE_TODO_REQUEST,
        payload
    }
}


const deleteTodoSuccess=(payload)=>{
    return {
        type:types.SINGLE_TODO_SUCCESS,
        payload
    }
}


const deleteTodoFailure=(payload)=>{
    return {
        type:types.SINGLE_TODO_FAILURE,
        payload
    }
}


export const deleteTodoFetch=(payload)=>(dispatch)=>{
    dispatch(deleteTodoRequest());

    axios.delete(`http://localhost:8080/todos/${payload}`).then((r)=>
        dispatch(deleteTodoSuccess(r.data))
        // console.log(r.data)
    )
    .catch((e)=>dispatch(deleteTodoFailure(e.data)))
}