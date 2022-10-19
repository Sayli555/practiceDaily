import * as types from './actioType'
const init={
    books:[],
    isLoading:false,
    error:false
}

export const reducer=(state=init,{type,payload})=>{

    switch(type){
        case types.GET_BOOK_REQUEST :
            return {
                ...state,
                isLoading:true,
                error:false
            }
        case types.GET_BOOK_SUCCESS:
                return {
                    ...state,
                    books:payload,
                    isLoading:false,
                    error:false
                }
                
        case types.GET_BOOK_FAILURE :
                    return {
                        ...state,
                        isLoading:false,
                        error:true
                    }       
        default:{
            return state
        }
    }
}