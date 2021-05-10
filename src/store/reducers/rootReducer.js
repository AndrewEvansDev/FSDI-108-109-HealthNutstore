import { combineReducers } from "redux";
import cartReducer from "./cartreducer";
import groceryListReducer from './grocerylistreducer';

const rootReducer = combineReducers({
    groceryList: groceryListReducer,
    cart: cartReducer,
})

export default rootReducer;