import * as type from "./todo.action.type"

const init={
    addtodos:{
        loading:false,
        error:false,
       
    },
    gettodos:{
        loading:false,
        error:false,
       
    },
    data:[],

    
    

}

export const todo_reducer=(state=init,action)=>{

    switch (action.type){

        case type.GET_TODOS_LOADING:{
            return {
                ...state,
                gettodos:{
                    // ...state.gettodos,
                    loading:true,
                    error:false
                }

                
            }
        }

        case type.GET_TODOS_SUCCESS :{
            return {
                ...state,
                gettodos:{
                   // ...state.gettodos,
                    loading:false,
                    error:false
                    
                },
                data:action.payload
               
            }
        }

        case type.GET_TODOS_ERROR :{
            return {
                ...state,
                gettodos:{
                   // ...state.gettodos,
                    loading:false,
                    error:true,

                }
               
            }
        }


        case type.ADD_TODO_LOADING:{
            return {
                ...state,
                addtodos:{
                    
                    loading:true,
                    error:false
                },
              
                
            }
        }

        case type.ADD_TODO_SUCCESS :{
            return {
                ...state,
               
                addtodos:{
                    ...state.addtodos,
                    loading:false,
                  //  data:action.payload
                },
                data:[...state.data,action.payload]
               
            }
        }

        case type.ADD_TODO_ERROR :{
            return {
                ...state,
                addtodos:{
                  //  ...state.addtodos,
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