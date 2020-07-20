import React from "react";
import {addProduct} from "actions/cart"
import {useDispatch} from "react-redux";
import styles from "./Product.module.css";

const Product = ({ id, name, image, amount }) => {
  
  const dispatch = useDispatch();
  const addToCart = (id) =>{
    dispatch(addProduct(id, {id, name, image, amount}));
    
  }
  return(
  <div className={styles.Product}>
    <img className={styles.Image} src={image} alt={name} />
    <p className={styles.Price}>${amount}</p>
    <h3>{name}</h3>
 
    <button onClick={()=>addToCart(id)} className="btn btn-outline-primary"><img className={styles.Icon} src="images/addcart1.png" alt="cart"/>
    <h3 className={styles.IconText}>Dodaj do koszyka</h3>
    </button>
  
  </div>
)
};

export default Product;
