import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
// here
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//Reducers will be imported in here
import {taskReducer} from './reducers/taskReducers'


//combineReducer will be in here
const reducer = combineReducers({
    uri: taskReducer
})
const middleware = [thunk]

// here
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
  let store = createStore(persistedReducer,{}, applyMiddleware(...middleware))
  let persistor = persistStore(store)
  return { store, persistor }
}
