 import * as type from "./action.type"

//  let init={
//     count:0
//  }


 export const reducer=(state,action)=>{
    console.log(state,action);
    switch(action.type){
        case type.INCREMENT :{
            state.count++;
            return {...state}
        }
        case type.DECREMENT :{
            state.count--;
            return {...state}
        }
        default :{
            return state;
        }
    }
 
 }