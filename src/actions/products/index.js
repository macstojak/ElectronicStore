
export const ACTION_TYPES={
    FETCH_PRODUCTS: "FETCH_PRODUCTS"
}


export const fetchProducts = (products) =>({type:ACTION_TYPES.FETCH_PRODUCTS, products});
export const fetchData = () =>{
    return async (dispatch)=>{
        try{
        const response = await fetch("http://jsdeveloper-shop-api.s3-website-eu-west-1.amazonaws.com");
        const data = await response.json();
        
        console.log(data)
        dispatch(fetchProducts(data));
    }catch(e){
        console.log(e);
    }
    }
}