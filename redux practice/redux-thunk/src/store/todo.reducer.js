
import * as type from "./action.type";

const init={
    todos:[],

}

export const todo_reducer=(state=init,action)=>{

    switch (action.type){
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