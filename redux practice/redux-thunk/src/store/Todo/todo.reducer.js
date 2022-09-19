import * as type from "./todo.action.type"

const init={
    addtodos:{
        loading:false,
        error:false,
        data:{},
    },
    gettodos:{
        loading:false,
        error:false,
        data:[],
    },

    
    

}

export const todo_reducer=(state=init,action)=>{

    switch (action.type){

        case type.GET_TODOS_LOADING:{
            return {
                ...state,
                gettodos:{
                    ...state.gettodos,
                    loading:true
                }
                
            }
        }

        case type.GET_TODOS_SUCCESS :{
            return {
                ...state,
                gettodos:{
                    ...state.gettodos,
                    loading:false,
                    data:action.payload
                }
               
            }
        }

        case type.GET_TODOS_ERROR :{
            return {
                ...state,
                gettodos:{
                    ...state.gettodos,
                    loading:false,
                    error:true,

                }
               
            }
        }


        case type.ADD_TODO_LOADING:{
            return {
                ...state,
                addtodos:{
                    ...state.addtodos,
                    loading:true
                }
                
            }
        }

        case type.ADD_TODO_SUCCESS :{
            return {
                ...state,
                gettodos:{
                    data:[...state.gettodos.data,action.payload]
                },
                addtodos:{
                    ...state.addtodos,
                    loading:false,
                    data:action.payload
                }
               
            }
        }

        case type.ADD_TODO_ERROR :{
            return {
                ...state,
                addtodos:{
                    ...state.addtodos,
                    loading:false,
                    error:true,

                }
               
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