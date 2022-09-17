
import { legacy_createStore ,combineReducers} from "redux";
import { counter_reducer } from "./counter.reducer";
import { todo_reducer } from "./todo.reducer";


const rootReducer=combineReducers({
    counter:counter_reducer,
    todo:todo_reducer
})


export const store=legacy_createStore(rootReducer)