import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container">
      <div>
        <img src="../images/MJ-header.jpg" style={{ width: '1000vw', height: '80vh', backgroundRepeat: "repeat", objectFit: "cover", transform: "scale(.9)" }}></img>
      </div>
      <CategoryMenu />
      <ProductList />
      <Footer/>
    </div>
  );
};

export default Home;
