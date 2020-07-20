import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Nav from "components/Nav/Nav";
import Container from "components/Container/Container";
import Footer from "components/Footer/Footer";
import AboutPage from "pages/About/AboutPage";
import CatalogPage from "pages/Catalog/CatalogPage";
import HomePage from "pages/Home/HomePage";
import Cart from "components/Cart/Cart";
import store from "./store";
import {fetchData} from "./actions/products";
import Modal from "./components/Modal";


const App = () => {
  // const cart =useSelector(state=>state.cart);
  const [modalOpen, setModalOpen] = useState(false);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchData());

}, [])

  return(
    <Router>
      <Nav />
     
      <Cart />
        {modalOpen && <Modal >
         {/* // style={{float: "right", position: "absolute"}}  */}
          
          
      <button onClick={()=>setModalOpen(false)} className="btn btn-success" >Zamknij koszyk</button>
      </Modal>
      }
    
        {/* <Modal style={{float:"right"}}>
          <h1>Modal title</h1>
        </Modal> */}
       
     
      <Container>
        
        <Route exact path="/"  component={HomePage} />
        <Route path="/catalog"  component={CatalogPage} />
        <Route path="/about" component={AboutPage} />
      </Container>
      <Footer />
    </Router>
  )
  };

export default App;
