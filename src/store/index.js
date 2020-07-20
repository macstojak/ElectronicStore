import {createStore, applyMiddleware, combineReducers} from "redux";
import ReduxThunk from "redux-thunk";
import productsReducer from "../reducers/products";
import cartReducer from "../reducers/cart";
import modalReducer from "../reducers/modal";

const store = createStore(combineReducers({
    products: productsReducer, 
    cart: cartReducer,
    modal: modalReducer
}), applyMiddleware(ReduxThunk));
export default store;