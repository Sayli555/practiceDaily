import * as type from "./counter.action.type";


const init={
    count:0
}

export const counter_reducer=(state=init,action)=>{
    switch (action.type){
        case type.INCREMENT_COUNTER :{
            state.count++;
            return {...state}
        }

        case type.DECREMENT_COUNTER :{
            state.count--;
            return {...state}
        }
        default:{
            return state;
        }
    }
}