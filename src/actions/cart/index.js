
export const ACTION_TYPES={
    // CART_ADD: "CART_ADD",
    PRODUCT_ADD: "PRODUCT_ADD",
    PRODUCT_REMOVE: "PRODUCT_REMOVE",
    FETCH_CART:"FETCH_CART",
    PRODUCT_REFRESH: "PRODUCT_REFRESH"
}

// export const addCart =(id, products)=>({type:ACTION_TYPES.CART_ADD, 
//     payload:{
//    id,
//    products
// }});
export const addProduct =(id,product)=>({type:ACTION_TYPES.PRODUCT_ADD, product});
export const fetchCart = () =>({type:ACTION_TYPES.FETCH_CART});
export const removeProduct = (id) =>({type:ACTION_TYPES.PRODUCT_REMOVE, id})


// export const removeProduct = (id, cart) =>{
//     return async (dispatch)=>{
//         try{
       
//         const newProducts = await cart.filter(el=>el.id!==id);
        
//         console.log(newProducts)
//         dispatch(refreshCart(newProducts));
//     }catch(e){
//         console.log(e);
//     }
// }
// }