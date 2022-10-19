import axios from "axios";
import * as types from "./actioType";

const getBookRequest=(payload)=>{
    return {
        type:types.GET_BOOK_REQUEST
    }
}

const getBookSuccess=(payload)=>{
    return {
        type:types.GET_BOOK_SUCCESS,
        payload
    }
}

const getBookFailue=(payload)=>{
    return {
        type:types.GET_BOOK_FAILURE
    }
}


export const getBookData=(params)=>(dispatch)=>{
    dispatch(getBookRequest());
    axios.get("http://localhost:8080/books",params)
    .then((r)=>
    
    dispatch(getBookSuccess(r.data))
    )
    .catch((e)=>dispatch(getBookFailue(e.data)))
}