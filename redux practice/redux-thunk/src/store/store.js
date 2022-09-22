
import { legacy_createStore ,combineReducers, compose, applyMiddleware} from "redux";
import { counter_reducer } from "./counter/counter.reducer";
import { todo_reducer } from "./Todo/todo.reducer";
import thunk from 'redux-thunk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer=combineReducers({
    counter:counter_reducer,
    todo:todo_reducer
})


export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))