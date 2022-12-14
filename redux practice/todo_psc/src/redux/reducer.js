import * as types from "./actionType";

const init={
    todos:[],
    loading:false,
    error:false,
    single:{}
}

export const reducer=(state=init,{type,payload})=>{

    switch(type){
        case types.GET_TODO_LIST_REQUEST:{
            return {
                ...state,
                loading:true,
                error:false
            }
        }

        case types.GET_TODO_LIST_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                todos:payload
            }
        }

        case types.GET_TODO_LIST_FAILURE:{
            return {
                ...state,
                loading:false,
                error:true
            }
        }


        // *************************************************single*********************************************************



        // case types.SINGLE_TODO_REQUEST:{
        //     return {
        //         ...state,
        //         loading:true,
        //         error:false
        //     }
        // }

        // case types.SINGLE_TODO_SUCCESS:{
        //     return {
        //         ...state,
        //         loading:false,
        //         error:false,
        //         single:payload
        //     }
        // }

        // case types.SINGLE_TODO_FAILURE:{
        //     return {
        //         ...state,
        //         loading:false,
        //         error:true
        //     }
        // }



        // ************************************toggle****************************************************


        case types.TOGGLE_TODO_REQUEST:{
            return {
                ...state,
                loading:true,
                error:false
            }
        }

        case types.TOGGLE_TODO_SUCCESS:{

            let newTodo=state.todos.map((e)=>payload.id==e.id ? payload: e);
            console.log("payload",payload)

            return {
                ...state,
                loading:false,
                error:false,
                 todos:newTodo
                 
            }
        }

        case types.TOGGLE_TODO_FAILURE:{
            return {
                ...state,
                loading:false,
                error:true
            }
        }


        default:{
            return state
        }
    }







}