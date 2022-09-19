import * as type from "./todo.action.type"

const init={
    loading:false,
    error:false,
    todos:[],

}

export const todo_reducer=(state=init,action)=>{

    switch (action.type){

        case type.GET_TODOS_LOADING:{
            return {
                ...state,
                loading:true
            }
        }

        case type.GET_TODOS_SUCCESS :{
            return {
                ...state,
                loading:false,
                todos:action.payload
            }
        }

        case type.GET_TODOS_ERROR :{
            return {
                ...state,
                loading:false,
                error:true
            }
        }


        case type.ADD_TODO :{
           
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        ...action.payload,
                        id:state.todos.length
                    },
                ],
            
            }
        }

        case type.COMPLITE_TODO :{
            return {...state}
        }

        case type.UPDATED_TODO :{
            return {...state}
        }
        case type.REMOVE_TODO :{
            return {...state}
        }

        default :{
            return state;
        }
    }

}