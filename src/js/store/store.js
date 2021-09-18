import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

//Reducers will be imported in here
import {taskReducer} from './reducers/taskReducers'


//combineReducer will be in here
const reducer = combineReducers({
    uri: taskReducer
})

const middleware = [thunk]

const store = createStore(
    reducer
    ,applyMiddleware(...middleware)
)
export default store
