import React from "react";
import {useSelector} from "react-redux"
import HeaderBig from "components/Header/HeaderBig";
import HeaderSmall from "components/Header/HeaderSmall";
import ProductsList from "components/ProductsList/ProductsList";

const ProductsSection = ({ title, products }) => (
  
  <>
    <HeaderSmall>{title}</HeaderSmall>
    <ProductsList products={products} />
  </>
);

const HomePage = () => {
 
  const featuredDesktop = useSelector( state=>state.products.filter(el=>el.category==="desktop"));
  const featuredTablet = useSelector(state=>state.products.filter(el=>el.category==="tablet"));
  return(
  <>
    <HeaderBig>Welcome to our store</HeaderBig>
    <ProductsSection title="Desktops" products={featuredDesktop} />
    <ProductsSection title="Tablets" products={featuredTablet} />
  </>
  )
};

export default HomePage;
