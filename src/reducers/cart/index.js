import {ACTION_TYPES} from "../../actions/cart";
const initialState = {
    id:null,
    name:"",
    image: "",
    amount:"",
    manufacture:"",
    category:"",
    featured:""
}
export default function(state=[], action){
    switch(action.type){
        case ACTION_TYPES.FETCH_CART:
            return state;
        case ACTION_TYPES.PRODUCT_REMOVE:
            const x = state.findIndex(el=>el.id===action.id);
            state.splice(x,1);
            return state;
                
           
        case ACTION_TYPES.PRODUCT_ADD:
            return [...state,action.product];
        default:
            return state;
    }
}