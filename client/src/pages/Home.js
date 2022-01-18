import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";


const Home = () => {
  return (
    <div className="container">
      <div className="headerImgDiv" style={{ width: '100vw', height: '60vh', objectFit:'contain'}}>
        <img src="../images/MJ-header.jpg" style={{width:'inherit',height:'inherit',objectFit:'cover', objectPosition:"50% 90%"}} ></img>
      </div>
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
