import {ACTION_TYPES} from "../../actions/products"
const initialState={
    id:0,
    name:"",
    image: "",
    amount:"",
    manufacture:"",
    category:"",
    featured:""
}

export default function(state=[], action){
    switch(action.type){
        case ACTION_TYPES.FETCH_PRODUCTS:
            console.log(action.products)
            return action.products;
        default:
            return state;
    }
}