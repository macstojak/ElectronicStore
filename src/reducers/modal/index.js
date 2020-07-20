import { ACTION_TYPES } from "../../actions/modal";

const modalReducer = (state=null, action) =>{
    switch(action.type){
        case ACTION_TYPES.MODAL_SHOW:
            return action.cart;
        case ACTION_TYPES.MODAL_HIDE:
            return null;
        default:
            return state;
    }
}

export default modalReducer;