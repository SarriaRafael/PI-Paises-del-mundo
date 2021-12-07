import { createStore, applyMiddleware } from "redux";
//import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import rootstr from '../reducers/index'

const store = createStore(rootstr,applyMiddleware(thunk));

export default store ;

