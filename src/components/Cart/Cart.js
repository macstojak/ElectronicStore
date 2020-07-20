import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import styled, {keyframes} from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, removeProduct } from "actions/cart";
import Modal from "../Modal";
import {hideModal, showModal} from "actions/modal"
const Info = ({ count, total }) => {
  return (
    <div>
      <p className={styles.counter}>Ilość: {count} </p>
      <br />
      <p className={styles.counter}>Suma: {total}$</p>
      <br />
    </div>
  );
};
const  onStart = keyframes`

  0% {margin-right:55px}
  25% {margin-right:35px}
  50% {margin-right:55px}
  75% {margin-right: 75px}
  100% {margin-right:55px}
`
const RightCart = styled.div`
position: relative;
float: right;
display: flex;
align-items:center;
justify-content: center;
margin: 55px 55px 0 0;
animation: ${onStart} 1s linear alternate; 
`
const CartDetails = styled.div`
display: flex;
margin: 5px;
text-align: center;
align-items:center;
justify-content:center;
width: 70%;
heigth: 80px;
border: 2px solid blue;
`
const CartPhoto = styled.div`
  display: flex;
  width:80px;
  height:80px;
  align-items: center;
`
const Summary = styled.h1`
margin: 0 auto;
border-top: 2px solid red;
font-weight: bold;
`


  const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const modal = useSelector(state=>state.modal);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  useEffect(() => {
    if (cart.length > 0) {
      const totals = cart
        .map((el) => parseFloat(el.amount, 2))
        .reduce((p, n) => p + n)
        .toFixed(2);
      setTotal(totals);
    }
  }, [cart]);

  if(!modal){
  
  return (
    <RightCart
     >
      <div 
      //className={styles.cartContainer}
      >
        <img 
        //className={styles.cartImage} 
        src="images/cart.png"></img>
        {cart.length > 0 ? (
          <Info count={cart.length} 
          total={total}
          ></Info>
        ) : (
          <p 
          //className={styles.counter}
          >Dodaj coś do koszyka</p>
        )}
        <button className="btn btn-primary" onClick={()=>dispatch(showModal({cart}))}>Pokaż koszyk</button>
      </div>
     
    </RightCart>
  
  
  )}else{
    return(<Modal>
       {modal.cart.length===0?<h3>Pusty koszyk, najpierw dodaj produkty</h3>:""}
       {modal.cart && modal.cart.map((el,i)=>{
         return(
          <div>
           <CartDetails key={i}>
         <h3>#{i+1} {el.name} - </h3>
        
         <h3>Cost: <strong> {el.amount}$</strong></h3>
         <CartPhoto>
         <img src={el.image} alt="Blank"/>
         </CartPhoto>
         <button className="btn btn-danger" onClick={()=>dispatch(removeProduct(el.id))}>X Usuń produkt</button>

       
         </CartDetails>
        
         </div>
         )
       })}
       <Summary>SUMA: {total}$</Summary>
       <button className="btn btn-primary" onClick={()=>dispatch(hideModal())}>Zamknij koszyk</button>
   </Modal>)
 };
};

export default Cart;
